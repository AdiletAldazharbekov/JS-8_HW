// 2)	Напишите функцию removeItem 
// которая  принимает коллбэк и удаляет определенный элемент из массива. 

const arr2 = [1, 4, 7, 5, 2, 3, 6, 7, 12, 2, 1, 7, 2]
console.log(arr2)
let n=1

const removeItem = (fCallback,i,arr) => {
    return fCallback(i,arr)
}

const callback = (i, arr) => {
    let ar1=[...arr]
    let ar2=[...arr]
    ar1=ar1.splice(0,i)
    ar2=ar2.splice(i+1, arr.length)
    return ar1.concat(ar2)
}

console.log(removeItem(callback,n,arr2))
console.log(`Удаленен элемент с индексом ${n}`)
// console.log(removeItem(callback,2,arr2))
