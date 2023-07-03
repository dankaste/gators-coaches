import { CollectionConfig } from "payload/types";

const PracticeLocations: CollectionConfig = {
    slug: 'practiceLocation',
    access: {
        read: () => true
    },
    admin: {
        useAsTitle: 'name'
    },
    fields: [
        {
            name: 'name',
            type: 'text'
        }
    ]
}

export default PracticeLocations;