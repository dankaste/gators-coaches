import { CollectionConfig } from 'payload/types';

const Coaches: CollectionConfig = {
    slug: 'coaches',
    admin: {
        useAsTitle: 'nickname'
    },
    access: {
        read: () => true
    },
    fields: [
        {
            name: 'firstname',
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
            name: 'user',
            type: 'relationship',
            relationTo: ['users'],
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

export default Coaches;