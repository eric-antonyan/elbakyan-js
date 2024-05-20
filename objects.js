// let user = {
//     name: "Ani",
//     surname: "Simonyan",
//     age: 18
// }

// user.surname = 'Adamyan'
// user.name = 'Artur'
// user.age = 24

// delete user.age

// console.log(user);

// for (let i in user) {
//     console.log(a);
// }

// let user = {
//     name: "Margarit",
//     surname: "Simonyan",
//     age: 8,
//     relatives: {
//         value: "moraquyr"
//     }
// }

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    gender: "male",
    followersCount: 1567,
    followedCount: 156,
    bestFriend: {
        fisrtName: "Eric",
        lastName: "Antonyan",
        age: 15,
        gender: "male",
        followersCount: 6729,
        followedCount: 80
    }
}

let product = {
    name: "Headphones",
    price: 1500,
    discount: 0
}

if (product.price > 2000) {
    product.discount = 10
} else {
    product.discount = 7
    const discountedPrice = (product.price / 100) * product.discount
    product.price = product.price  - discountedPrice
}

// console.log(product.price);

let arr  = [
    {
        name: 'Ani',
        surname: 'Abrahamyan',
        budget: 40000,
        age: 18
    },
    {
        name: 'Mariam',
        surname: 'Abrahamyan',
        budget: 120000,
        age: 19
    },
    {
        name: 'Eric',
        surname: 'Abrahamyan',
        budget: 60000,
        age: 20
    },
    {
        name: 'Artur',
        surname: 'Abrahamyan',
        budget: 80000,
        age: 21
    },
    {
        name: 'Vardan',
        surname: 'Abrahamyan',
        budget: 30000,
        age: 22
    },
    {
        name: 'Sargis',
        surname: 'Abrahamyan',
        budget: 15000,
        age: 24
    },
    {
        name: 'Arshak',
        surname: 'Abrahamyan',
        budget: 5000,
        age: 28
    },
    {
        name: 'Anna',
        surname: 'Vardanyan',
        budget: 8000,
        age: 29
    },
    {
        name: 'Astghik',
        surname: 'Grigoryan',
        budget: 150000,
        age: 34
    },
]

// let usersBudget = 0
// let filteredUsers = []
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].age > 25) {
//         filteredUsers.push(arr[i])
//         usersBudget += arr[i].budget
//         // console.log(usersBudget);
//         // console.log(averageBudget);
//     }
// }
// let averageBudget = usersBudget / filteredUsers.length
// console.log(averageBudget);

let filteredUsers = []

for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j].age > arr[j + 1].age) {
            let user = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = user
        }
    }
}

console.log(arr);