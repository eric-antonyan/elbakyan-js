let arr = [12, 26, 'Es', [true, 123, ['Elbakyan', [10, 3876, 'krtahamalirum']], ['anun'], [23, 25, ['azganun'], ['em']]], [false, [39, 10, true, ['sovorum']]]]

let newArr = new Array();

newArr[0] = 'Es'
newArr[1] = 'anun'

let es = arr[2]
let anun = arr[3][3][0]
let azganun = arr[3][4][2][0]
let sovorum = arr[4][1][3][0]
let em = arr[3][4][3][0]
let Elbakyan = arr[3][2][0]
let krtahamalirum = arr[3][2][1][2]

// newArr.push(es)
// newArr.push(anun)
// newArr.push(azganun)
// newArr.push(sovorum)
// newArr.push(em)
// newArr.push(Elbakyan)
// newArr.push(krtahamalirum)

const arrToStr = newArr.join(" ")

// console.log(newArr);

let arr2 = [12, 26, 'Es', -123, true, 123, 'Elbakyan', -10, 3876, 'krtahamalirum', 'anun', 23, 25, 'azganun', 'em', false, 39, 10, true, 'sovorum', -4, 43, 'a', 'b', 10, -14, -20, 0, 'Armenia', '123']

let sum = 1;

let sum2 = -123 * -10 * -4 * -14 * -20

for (let i = 0; i < arr2.length; i++) {
    // let isNumber = arr2[i] !== '' + arr2[i] || arr2[i] !== true || arr2[i] !== false
    if (typeof arr2[i] == 'number' && arr2[i] < 0) {
        sum += Math.abs(arr2[i])
    }
}

const average = sum / arr2.length

console.log(average);
