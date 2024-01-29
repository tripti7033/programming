function duplicate(str) { //str = 'hello world
    let result = '';
    let stored= {}

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if(!stored[char]) {
            result += char;
            stored[char] = true;
        }
    }
     return result

}
const str = 'Hello World'
console.log(duplicate(str.toLowerCase()));