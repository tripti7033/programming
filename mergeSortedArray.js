const s1= [2,3,23];
const s2 = [1,3,7,9, 12];

console.log('merged array: ', mergeSorted(s1, s2));

function mergeSorted(a1, a2) {
    let mA= []
    let i=0, j= 0;
    while(i < a1.length && j < a2.length){

        if(a1[i] < a2[j]){
            mA.push(a1[i])
            i++;
        } else {
            mA.push(a2[j]);
            j++;
        }
    }
    console.log(i , j );
    while (i < a1.length) {
        mA.push(a1[i]);
        i++;
    }

    while (j < a2.length) {
        mA.push(a2[j]);
        j++;
    }

    
    return mA
}