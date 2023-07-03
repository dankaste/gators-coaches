import { CollectionConfig } from "payload/types";
import Levels from "../options/levels";

const Teams: CollectionConfig = {
    slug: 'teams',
    admin: {
        useAsTitle: ''
    },
    access: {
        read: () => true
    },
    fields: [
        {
            name: "level",
            type: 'select',
            options: Levels
        }
    ]
}