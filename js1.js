// 1)	Напишите код, который находит наиболее часто используемый элемент массива.

const arr =[7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7]

const maxItem = (arr)=>{
let itemMax=0
let itemCount=0
let item=0
for(let i=0; i<arr.length; i++){
for (let j=0; j<arr.length;j++){
    if(arr[i]===arr[j]){
        itemCount++
    }
}
if(itemCount>itemMax){
    itemMax=itemCount
    item=i
}
itemCount=0
}
return `Наиболее часто используемый элемент массива это ${arr[item]} в массиве ${itemMax} совпадений`
}

console.log(maxItem(arr))
