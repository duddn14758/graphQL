export const people = [
    {
        id:"0",
        name:"Young",
        age:26,
        gender:"male"
    },
    {
        id:"1",
        name:"Woo",
        age:16,
        gender:"female"
    },
    {
        id:"2",
        name:"Gloria",
        age:18,
        gender:"male"
    },
    {
        id:"3",
        name:"Yeyoung",
        age:24,
        gender:"female"
    },
    {
        id:"4",
        name:"You",
        age:6,
        gender:"male"
    }
];

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === String(id));
    return filteredPeople[0];
}