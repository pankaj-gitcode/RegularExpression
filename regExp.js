//Q.1. Write a regular expression that matches all valid IP addresses. A valid IP address consists of four sets of numbers (0-255) separated by dots. ex: 192.168.2.25, 172.156.178.2, 8.8.8.8, etc...

const extractIP = ()=>{
    const str = "1.1.1.1";
    const regEx = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
    const res = regEx.test(str);
    const resMatch = str.match(regEx);

    return [{res, resMatch}];
}
// console.log(extractIP());

//Q.2. Given a string containing a mix of letters and numbers, write a regular expression to extract all the numbers from the string. Ex: abCD1276 : extract numbers ===> 1276
const extractNum = ()=>{
    const str = "eWr5716";
    const str2 = "abc123def456ghi789"
    const regEx = /\d+/;  // or /\d+/g so it'll search of all digits in str
    const res = regEx.test(str2);
    const resMatch = str2.match(regEx);
    return [{res, resMatch}];
}
console.log(extractNum());

