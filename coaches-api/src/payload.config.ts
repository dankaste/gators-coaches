import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Coaches from "./collections/Coaches";
import Riders from "./collections/Riders";
import Teams from "./collections/Teams";
import Practices from "./collections/Practices";
import PracticeZones from "./collections/PracticeZones";
import PracticeLocations from "./collections/PracticeLocations";

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Coaches,
    Riders,
    Teams,
    Practices,
    PracticeZones,
    PracticeLocations
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
