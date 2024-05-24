import { buildConfig } from 'payload/config';
import path from 'path';
import Users from './collections/Users';
import Riders from "./collections/Riders";
import Roster from "./collections/Roster";
import RosterFile from "./collections/RosterFile";

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Riders,
    Roster,
    RosterFile
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
