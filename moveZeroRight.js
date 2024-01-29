function moveZero(arr) {
    let j = 0;
    for(let i= 0; i< arr.length; i++){
        if(arr[i] !== 0){
            arr[j++] = arr[i];
        }
    }

    while( j< arr.length) {
        arr[j] = 0
        j++;
    }
    return arr;
}

const array = [0,1,2,0,4,0,6,0,0,65];
console.log(moveZero(array));