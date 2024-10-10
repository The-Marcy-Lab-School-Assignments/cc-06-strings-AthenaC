//write your code here
// 1
const reverseString = (str) => {
    let reversed = "";
    for (i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
};
reverseString("hello");  //"olleh"
reverseString("oo")     //"oo"
reverseString("")       //""

// 2
const reverseZigZagString = (str) => {
    let reversed = "";
    for (i = str.length - 1; i >= 0; i--) {
        i % 2 === 0 ? reversed += str[i].toUpperCase() : reversed += str[i].toLowerCase();
    }
    return reversed;
};
console.log(reverseZigZagString("helloo")); //"oOlLeH"
reverseZigZagString("Fellows")    //"sWoLlEf"
reverseZigZagString("Code Challenge ")  //"eGnElLaHc EdOc"