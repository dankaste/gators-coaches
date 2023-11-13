import { CollectionConfig } from "payload/types";
import payload from "payload";
import csv from "csvtojson"

const Roster: CollectionConfig = {
    slug: 'roster',

    access: {
        read: () => true
    },
    fields: [
        {
            name: 'rosterFile', // required
            type: 'upload', // required
            relationTo: "rosterFile",
            hooks: {
                beforeValidate: [async (args) => {
                    const file = await payload.findByID( {
                        collection: 'rosterFile',
                        id: args.value
                    });
                    const response = await  fetch(file.url);
                    const csvData = await csv().fromString(await response.text());

                    for (const entry of csvData) {
                        let existingRiderResults = await payload.find({
                            collection: 'riders',
                            where: {
                                firstName: {
                                    equals: entry["Player First Name"],
                                },
                                lastName: {
                                    equals: entry["Player Last Name"]
                                }
                            }
                        });
                        let rider;
                        if(existingRiderResults.docs) {
                            rider = existingRiderResults.docs[0]
                            await payload.update({
                                collection: 'riders',
                                id: rider.id,
                                data: {
                                    level: entry["Division Name"]
                                }
                            })
                        } else {
                            rider = await payload.create({
                                collection: 'riders',
                                data: {
                                    fullName: entry["Player First Name"] + " " + entry["Player Last Name"],
                                    firstName: entry["Player First Name"],
                                    lastName: entry["Player Last Name"],
                                    level: entry["Division Name"],
                                    birthdate: entry["Player Birth Date"],
                                    plateNumber: entry["Race Plate Number"],
                                }
                            });
                        }
                        args.data.riders.push({rider: {value: rider.id, relationTo: "riders"}});
                    }
                }]
            }
        },
        {
            name: "riders",
            type: "array",
            fields: [
                {
                    name: "rider",
                    type: "relationship",
                    relationTo: ['riders']
                }
            ]
        }
    ],
}

export default Roster;