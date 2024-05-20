let arr = []

for (let i = 0; i < 7; i++) {
    const randomNumber = Math.floor(Math.random() * 100)
    if (randomNumber < 48) {
        console.log(44 - randomNumber + " + " + randomNumber + " = " + "44");
        arr.push((44 - randomNumber) + randomNumber)
    }
}

console.log(arr);

let sum = 0