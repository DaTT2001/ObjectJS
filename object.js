//bai thuc hanh 1
//bai 1
const pet = {
    type : "Chó",
    petName : "a",
    breed : "Đực",
    favoriteFood : ["xương", "thịt", "thịt chó"]
}
//bai 2 
console.log(pet.type)
//bai 3
pet.yearOld = 1
console.log(pet.yearOld)
//bai 4
function petIntroduce(objectInput) {
    
    return `Nhà tôi có một con ${objectInput.type} nó tên là ${objectInput.petName}, nó thích ăn ${objectInput.favoriteFood.join(", ")}`
}
console.log(petIntroduce(pet))
//bai 5
const pet1 = {
    type : "Mèo",
    petName : "b",
    breed : "cái",
    favoriteFood : ["thịt gà", "thịt lợn"],
    yearOld : 3,
}
const pet2 = {
    type : "lợn",
    petName : "c",
    breed : "cái",
    favoriteFood : ["thịt bò", "thịt lợn"],
    yearOld : 2,
}
const arr = [pet, pet1, pet2]
console.log(arr[0])
//bai 6
function comparePetAge(arrPet) {
    let result = 0;
    let result2 = 0;
    for(let i = 0; i < arrPet.length; i++) {
        if(arrPet[i].yearOld > result) {
            result = arrPet[i].yearOld;
            result2 = i;
        }
    }
    return arrPet[result2]
}
console.log(comparePetAge(arr)
)
//bai thuc hanh so 2
//bai1
const {petName, breed } = pet;
console.log(petName)
console.log(breed)
//bai 2
const [a, b, c] = arr
console.log(c.petName)
//bai 3
function petIntroduce1({type, petName, favoriteFood}) {
    return `Nhà tôi có một con ${type} nó tên là ${petName}, nó thích ăn ${favoriteFood.join(", ")}`
}
console.log(petIntroduce1(pet))
//bai thuc hanh so 3
//bai 1
function bai1(arr) {
    const [a, ...b] = arr
    return b
} 
// console.log(bai1([1,2,3]))
//bai 2
// function bai2(arr) {
//     const [...a, b, c] = arr
//     return [b,c]
// }
// console.log(bai2([1,2,3]))
//bai3
function bai3(objectInput) {
    const {breed, favoriteFood, ...abc} = objectInput
    return abc
}
console.log(bai3(pet))
//bai th 5
//bai 1
function bai51(arr) {
    const result = []
    for(const string of arr) {
        if(string.includes("a")) {
            result.push(string)
        }
    }
    return result
}
console.log(bai51(["avv","sss","sdadas"]))
//bai 2
function bai52(arr) {
    let sum = 0
    for(const num of arr) {
        sum += num
    }
    return sum
}
console.log(bai52([1,2,3]))
//bai 3
function bai53(arr, a) {
    for(const num of arr) {
        if(num === a) {
            return true
        }
    }
    return false
}
console.log(bai53(["a","b","c"],"r"))