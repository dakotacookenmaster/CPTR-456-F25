class Animal {
    constructor(habitat, name, type) {
        this.habitat = habitat
        this.name = name
        this.type = type
    }

    sayHi() {
        console.log(`${this.name} says hello from the ${this.habitat}.`)
    }
}

const jeffrey = new Animal("sea", "Jeffrey", "jellyfish")

// jeffrey.sayHi()





const jeffrey2 = {
    habitat: "sea",
    name: "Jeffrey",
    type: "jellyfish",
    sayHi: function() {
        console.log(`${this.name} says hello from the ${this.habitat}.`)
    }
}

// jeffrey2.sayHi()


const numbers = [1, 2, 3, 4, 5, 6]

// for(const i in numbers) {
//     console.log(numbers[i], i);
// }

// let counter = 0;
// while(counter < numbers.length) {
//     console.log(numbers[counter], counter)
//     counter++;
// }


const evens = [1, 0, 4, 10, 2]

const result = evens.reduce((accumulator, value) => {
    return value + accumulator
}, 0)

const sortedList = evens.sort((a, b) => {
    // if(a < b) {
    //     return -1
    // } else if (a === b) {
    //     return 0
    // } else {
    //     return 1
    // }

    return -(a < b) || +(a > b)
})

const sortedCopy = [...sortedList]

const sortedCopy2 = structuredClone(sortedList)

// console.log(sortedList)

const names = ["Linton", "Aiden", "Daniel", "Andrew is the best"]

const newNames = names.map((value) => {
    return value + "👽"
})
// console.log(newNames)

const people = [
    {
        name: "Timmy",
        salary: 100_000,
    }, 
    {
        name: "John",
        salary: 50_000,
    }, 
    {
        name: "Charles",
        salary: 0
    }
]

// const updatedPeople = people.map((person) => {
//     const copy = {...person}
//     copy.isGTE50K = copy.salary >= 50_000
//     return copy
// })

const updatedPeople = people.map(person => ({...person, isGTE50K: person.salary >= 50_000 }))

console.log(people)
console.log(updatedPeople)

const filteredList = updatedPeople.filter(value => value.isGTE50K)










