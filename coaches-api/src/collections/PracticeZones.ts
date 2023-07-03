import { CollectionConfig } from "payload/types";

const PracticeZones: CollectionConfig = {
    slug: 'practiceZone',
    admin: {
        useAsTitle: 'name'
    },
    access: {
        read: () => true
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true
        },
        {
            name: 'location',
            type: 'relationship',
            relationTo: 'practiceLocation',
            required: true
        }
    ]
}

export default PracticeZones;