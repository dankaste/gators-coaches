import { CollectionConfig } from "payload/types";

const Riders: CollectionConfig = {
    slug: 'riders',
    admin: {

    },
    access: {
        read: () => true
    },
    fields: [
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
            name: "birthdate",
            type: "date"
        },
        {
            name: "parent",
            type: "group",
            interfaceName: "parent",
            fields: [
                {
                    name: "firstName",
                    type: "text"
                },
                {
                    name: "lastName",
                    type: "text"
                },
                {
                    name: "phone",
                    type: "text"
                },
                {
                    name: "email",
                    type: "email"
                }
            ]
        }
    ]
}

export default Riders;