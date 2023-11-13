import { CollectionConfig } from 'payload/types';

const Parents: CollectionConfig = {
    slug: 'parents',
    admin: {
        useAsTitle: 'email'
    },
    access: {
        read: () => true
    },
    fields: [
        {
            name: 'firstName',
            type: 'text',
            required: true
        },
        {
            name: 'lastName',
            type: 'text',
            required: true
        },
        {
            name: 'nickname',
            type: 'text',
            required: true
        },
        {
            name: 'phone',
            type: 'text'
        },
        {
            name: 'email',
            type: 'email',
            required: true
        }
    ]
}

export default Parents;