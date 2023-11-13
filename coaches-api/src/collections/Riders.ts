import { CollectionConfig } from "payload/types";
import Levels from "../options/levels";
import gender from "../options/gender";
import Gender from "../options/gender";
import Grade from "../options/grade";
import RidingExperience from "../options/ridingExperience";

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
            name: "birthdate",
            type: "date"
        },
        {
            name: "gender",
            type: "select",
            options: Gender
        },
        {
            name: "risingGrade",
            type: "select",
            options: Grade
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
            name: "ridingExperience",
            type: 'select',
            options: RidingExperience,
            hasMany: true
        },
        {
            name: "parent",
            type: "relationship",
            relationTo: "parents"
        },
        {
            name: "notes",
            type: "array",
            fields: [
                {
                    name: "note",
                    type: "textarea"
                }
            ]
        }
    ]
}

export default Riders;