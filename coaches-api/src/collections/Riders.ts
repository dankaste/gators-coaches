import { CollectionConfig } from "payload/types";
import Levels from "../options/levels";
import Gender from "../options/gender";

const Riders: CollectionConfig = {
    slug: 'riders',
    admin: {
        useAsTitle: 'fullName'
    },
    access: {
        read: () => true
    },
    fields: [
        {
            name: "id",
            type: "number",
            required: true
        },
        {
          name: "fullName",
          type: "text",
          required: true
        },
        {
            name: "firstName",
            type: "text",
            required: true
        },
        {
            name: "lastName",
            type: "text",
            required: true
        },
        {
            name: "birtdate",
            type: "date"
        },
        {
            name: "gender",
            type: "select",
            options: Gender
        },
        {
            name: "plateNumber",
            type: "number"
        },
        {
            name: "level",
            type: 'select',
            options: Levels
        },
        {
            name: "email",
            type: 'text'
        }
    ]
}

export default Riders;