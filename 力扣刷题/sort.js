// 最小的数

let arr = ['307','239','214','250','384','299','223','312'];
let sortArr = [];
let minnum = arr[arr.length-1];
function min(arr){
    for(let i = 0;i<arr.length;i++){
         if(arr[i] < minnum ){
            minnum = arr[i]
         }
    }

    return minnum
}

let num =  min(arr)
console.log(num)
