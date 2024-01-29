//Given a sorted array and a number n, find all the pairs in the array who sum is n

function findPairOfN(arr, n) {
    left = 0;
    right= arr.length-1;
    const result = []
    while (left < right) {
        const curr_sum = arr[left] + arr[right];
        if(curr_sum === n) {
           result.push([arr[left], arr[right]]);
           left++;
           right--;
        }
        else if (curr_sum < n) {
            left++;
        } else {
            right --
        }

    }
    return result;
}

const arr = [1, 2,3, 4,5,6,7,8,9,10]
const n = 10;
const resArray = findPairOfN(arr, n);
console.log(`pair with sum of ${n}:  ${JSON.stringify(resArray)}`);