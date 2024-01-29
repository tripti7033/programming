const str1 = 'listenx';
const str2= 'silent';
if(areAnagram( str1.toLowerCase(), str2.toLowerCase())){
    console.log('anagrms');
}
else{
    console.log('no');
}

function areAnagram( str1, str2) {
    const clean1 = str1.split('').filter(char => char !=' ').sort().join('');
    const clean2 = str2.split('').filter(char => char !=' ').sort().join('');
    
    if(clean1.length !== clean2.length){
        return false;
    }
    // const re1 = clean1.split('').sort().join('')
    // const re2 = clean2.split('').sort().join('')

    return clean1 === clean2

}