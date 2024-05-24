
const Levels = [
    {
        label: 'Balance Bike',
        value: 'balance_bike'
    },
    {
        label: 'Roller',
        value: 'roller'
    },
    {
        label: 'Grinder',
        value: 'grinder'
    },
    {
        label: 'Shredder',
        value: 'shredder'
    },
    {
        label: 'Ripper',
        value: 'ripper'
    }
]

export function fromTeamName(name:string) : string {
    return Levels.find(l => name.includes(l.value)).value;
}

export default Levels;