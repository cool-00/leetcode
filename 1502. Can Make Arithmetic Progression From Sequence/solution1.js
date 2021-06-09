/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b)=>a-b);
    let diff = arr[1]-arr[0];
    let flag = true;
    
    for(let i=0; i<arr.length-1; i++)
        if(arr[i+1]-arr[i]!=diff){
            flag = false;
            break;
        }
    
    return flag;
};