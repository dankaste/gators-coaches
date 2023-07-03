import { CollectionConfig } from "payload/types";

const Practices: CollectionConfig = {
    slug: 'practices',
    access: {
        read: () => true
    },
    fields: [
        {
            name: 'date',
            type: 'date',
            admin: {
                date: {
                    pickerAppearance: "dayOnly",
                    displayFormat: "d MMM yyy"
                }
            }
        },
        {
            name: 'startTime',
            type: 'date',
            admin: {
                date: {
                    pickerAppearance: "timeOnly",
                    displayFormat: "h:mm a"
                }
            }
        },
        {
            name: 'endTime',
            type: 'date',
            admin: {
                date: {
                    pickerAppearance: "timeOnly",
                    displayFormat: "h:mm a"
                }
            }
        },
        {
            name: 'zones',
            type: 'array',
            fields:[
                {
                    name: "zone",
                    type: 'relationship',
                    relationTo: ['practiceZone']
                },
                {
                    name: "teams",
                    type: 'array',
                    fields: [
                        {
                            name: 'team',
                            type: 'relationship',
                            relationTo: ['teams']
                        }
                    ]
                },
                {
                    name: "baseCoaches",
                    type: 'array',
                    fields: [
                        {
                            name: 'baseCoach',
                            type: 'relationship',
                            relationTo: ['coaches']
                        }
                    ]
                },
                {
                    name: 'startTime',
                    type: 'date',
                    admin: {
                        date: {
                            pickerAppearance: "timeOnly",
                            displayFormat: "h:mm a"
                        }
                    }
                },
                {
                    name: 'endTime',
                    type: 'date',
                    admin: {
                        date: {
                            pickerAppearance: "timeOnly",
                            displayFormat: "h:mm a"
                        }
                    }
                }
            ]
        }
    ]
}

export default Practices;