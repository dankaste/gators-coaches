
const Gender = [
    {
        label: 'Male',
        value: 'male'
    },
    {
        label: 'Female',
        value: 'female'
    },
    {
        label: 'Other',
        value: 'other'
    }
]

export function fromGender(gender :string): string {
    if('M' === gender) {
        return 'male';
    } else if('F' === gender) {
        return 'female';
    }
}

export default Gender;