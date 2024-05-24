import { CollectionConfig } from "payload/types";
import { fromTeamName } from "../options/levels";
import { fromGender } from "../options/gender";
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
                                id: {
                                    equals: entry["id"],
                                }
                            }
                        });
                        let rider;
                        const level = fromTeamName(entry["team"]);
                        if(existingRiderResults.docs) {
                            rider = existingRiderResults.docs[0]
                            await payload.update({
                                collection: 'riders',
                                id: rider.id,
                                data: {
                                    level: level
                                }
                            })
                        } else {
                            rider = await payload.create({
                                collection: 'riders',
                                data: {
                                    id: entry['id'],
                                    fullName: entry["player_first_name"] + " " + entry["player_last_name"],
                                    firstName: entry["player_first_name"],
                                    lastName: entry["player_last_name"],
                                    level: level,
                                    birthdate: entry["birth_date"],
                                    plateNumber: entry["number"],
                                    gender: fromGender(entry["gender"]),
                                    email: entry["parent1_email"]
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