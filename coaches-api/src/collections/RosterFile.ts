import { CollectionConfig } from "payload/types";

const RosterFile: CollectionConfig = {
    slug: 'rosterFile',

    access: {
        read: () => true
    },
    fields: [
        {
            name: 'rosterName', // required
            type: 'text', // required
            required: true
        },
    ],
    upload: {
        staticURL: '/rosterData',
        staticDir: 'rosterData',
        mimeTypes: ['text/csv'],
    }
}

export default RosterFile;