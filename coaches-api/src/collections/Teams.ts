import { CollectionConfig } from "payload/types";
import Levels from "../options/levels";

const Teams: CollectionConfig = {
    slug: 'teams',
    admin: {

    },
    access: {
        read: () => true
    },
    fields: [
        {
            name: "level",
            type: 'select',
            options: Levels
        },
        {
            name: 'leadCoach',
            type: 'relationship',
            relationTo: ['coaches']
        },
        {
            name: "assistantCoaches",
            type: "array",
            fields: [
                {
                    name: "coach",
                    type: "relationship",
                    relationTo: ['coaches']
                }
            ]
        },
        {
            name: "riders",
            type: "array",
            fields: [
                {
                    name: 'rider',
                    type: 'relationship',
                    relationTo: ['riders']
                }
            ]
        }
    ]
}

export default Teams;