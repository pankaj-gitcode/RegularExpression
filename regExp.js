//Q.1. Write a regular expression that matches all valid IP addresses. A valid IP address consists of four sets of numbers (0-255) separated by dots. ex: 192.168.2.25, 172.156.178.2, 8.8.8.8, etc...

const extractIP = ()=>{
    const str = "1.1.1.1";
    const regEx = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/
    const res = regEx.test(str);
    const resMatch = str.match(regEx);

    return [{res, resMatch}];
}
// console.log(extractIP());

//                          ************************************************ 

//Q.2. Given a string containing a mix of letters and numbers, write a regular expression to extract all the numbers from the string. Ex: abCD1276 : extract numbers ===> 1276
const extractNum = ()=>{
    const str = "eWr5716b";
    const str2 = "abc123def456ghi789"
    const regEx = /^.*\d+.*$/;  // or /\d+/g so it'll search of all digits in str
    const regEx2 = /^.*(?=.*\d)\d+.*$/;
    const res = regEx2.test(str2);
    const resMatch = str.match(regEx2);
    return [{res, resMatch}];
}
// console.log(extractNum());


//                          ************************************************ 

//Q.3 Create a regular expression that matches valid phone numbers in the format (XXX) XXX-XXXX, where X is a digit from 0-9.  Ex: (199) 231-3212

const validPhone = ()=>{
    const str = "(199) 213-1423";
    const regEx = /^[()]\d{3}[()]\s\d{3}\W\d{4}$/; // or /^(\d{3}) \d{3}-\d{4}$/
    // for '('=>[()], for 199=>\d{3} bcs digits are 3 times, then ')'=>[()], ' '=>for whitespace '\s', for '213'=>\d 3timesi.e.{3}, for dash '-'==>\W:non-charWord, for '1423'==>\d this time 4times i.e.{4}
    const res = regEx.test(str);
    const resMatch = str.match(regEx);
    return [{res, resMatch}];
}
// console.log(validPhone());



//                          ************************************************ 

// Q.3 Write a regular expression to find and replace all occurrences of multiple spaces with a single space in a given string. Ex: str = "hello  there"   after replace double space "hello there"
const removeDoubleSpace = ()=>{
    const str = "Hello  there  this   is string";
    //let const str = "Hello there there is string"
    // search for single spaces 
    const regEx = /\s+/g;

    //now replace the str space with regEx
    const resReplace = str.replace(regEx, ' ');
    const res = resReplace.match(regEx);
    return [{resReplace, res}];
}
// console.log(removeDoubleSpace());



//                          ************************************************ 

//Q.4. Write a regular expression to match dates in the format DD-MM-YYYY, capturing the day, month, and year separately. Then, use the capturing groups to reformat the date into YYYY-MM-DD. 

const date = ()=>{
    const str = "23-05-2024";
    const regEx = /^\d{2}-\d{2}-\d{4}$/;
    const res = regEx.test(str);
    const resMatch = str.match(regEx);
    return [{res, resMatch}];
}
// console.log(date());



//                          **********************************************************
//                              BASIC REGGULAR EXPRESSION - Match a Specific Word
//                          **********************************************************

//Q.5.1 Write a regex to match the word "hello" in a string.
const matchWord = ()=>{
    const str1 = ['hello', 'hello', 'say hello', "no match here"];
    const str2 = "hello world"
    
    const regExp = /hello/g;
    const res = str1.forEach((elem)=>regExp.test(elem))
    return `MatchWord: ${JSON.stringify([{res}])}`
    // const res1 = regExp.test(str2)
    // return res1;
}
// console.log(matchWord());

//                          ************************************************
//                                      Matching Digits
//                          ************************************************

//Q.5.2. Write a regex to match any sequence of digits in a string. Example string: "abc123def456", "no digits here", "789only"

const matchDigit = ()=>{
    const str = "789only";
    const regEx = /^.*\d+.*$/  // .* : no matter how many chars,any symbol at start or end
    const res = regEx.test(str);
    const resMatch = str.match(regEx);
    return [{res, resMatch}];
}
// console.log(matchDigit());


//                          ******************************************************* 
//                                  Matching a specific Pattern: date pattern
//                          ******************************************************* 

//.Q.5.3 👉🏻  Write a regex to match a date in the format dd-mm-yyyy. Ex:  "23-05-2024", "date: 12-12-2020", "invalid date"
const matchDate = ()=>{
    const str = "12-12-2020";
    const str1 = "invalid date";
    const regEx = /^\d{2}-\d{2}-\d{4}$/;
    const res = regEx.test(str);
    const resMatch = str.match(regEx);
    return [{res, resMatch}];
}
// console.log(matchDate());


//                          *********************************************************
//                              Intermediate Regular Expressions: email Validation
//                          *********************************************************

//Q.6.1. 👉🏻Email Validation: Write a regex to validate an email address. Ex: "user@example.com", "user.name+tag+sorting@example.com", "invalid@com"

const emailValidation = ()=>{
    const str = "user.name+tag+sorting@example.com";
    const str1= "user12.kl@mail";

    const regEx = /^[A-Za-z\d+-_.]+\@[A-Za-z\d]+\.[A-Za-z\d]{2,}$/; //{2}=> bcs TopLevelDomain is always atleast 2digit not single .in,.com,not->.c
    const res = regEx.test(str);
    const resMatch = str.match(regEx);
    return [{res, resMatch}];
}
// console.log(emailValidation());



//                          ************************************************
//                               Extracting Text Inside Parentheses [^..]
//                          ************************************************

//Q.6.2. Write a regex to extract text inside parentheses.Ex: "extract (this text)", "another (example) here", "no parentheses"
const extractText = ()=>{
    const str = "extract (this text)";
    const regEx = /\([^)]+\)/g
    const res = regEx.test(str);
    const resMatch = str.match(regEx);
    return [{res, resMatch}];
}
// console.log("Extract: ",extractText())


//                          ************************************************
//                               Matching Hexadecimal Colors
//                          ************************************************
//Q.6.3 Write a regex to match hexadecimal color codes.Ex: "#ff5733", "#C0C0C0", "not a color"
const hexadecimalMatch = ()=>{
    const str = "#ff5733 hello";
    const regEx = /\#[A-fa-f\d]{6}/g //Q: whay A-F or a-f only not A-Za-z
    const res = regEx.test(str);
    const resExec = regEx.exec(str);
    const resMatch = str.match(regEx);
    return [{res, resExec, resMatch}];
}
// console.log(hexadecimalMatch());


//          ----------| Advanced Regular Expressions |------------------

//                          ********************************
//                               Phone Number Validation
//                          *********************************

//Q.7.1. Write a regex to validate a phone number in the format (xxx) xxx-xxxx.Ex: "(123) 456-7890", "(098) 765-4321", "invalid phone"

const phoneNumValidation = ()=>{
    const str = "(123) 456-7890 kjkjkj";
    const str1 = "invalid phone";

    const regEx = /\(\d{3}\)\s\d{3}-\d{4}/g;
    const res = regEx.test(str);
    const resMatch = str.match(regEx);
    const resExec = regEx.exec(str);

    return [{res, resMatch, resExec}]
}
// console.log(phoneNumValidation())


//                          ************************************************
//                                      Password Validation
//                          ************************************************

//.q.7.2. Write a regex to validate a password with at least one lowercase letter, one uppercase letter, one digit, and one special character, and a minimum length of 8 characters. Ex: "Aa1@bcdef", "WeakPass1", "Str0ng#Pass!"
//check for lower/Upper-Case, digits, specl. symb. if avl. throught the string: (?=.*[A-za-z])...

const passwordValidation = ()=>{
    const str1 = "Aa1@bcdef";
    const str2 = "WeakPass1"; const str3 = "Str0ng#Pass!";
    const strArr = ["Aa1@bcdef","WeakPass1&", "Str0ng#Pass!"];
    
    const regEx1 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[~!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,16}$/;
    const regEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()])[A-Za-z\d~!@#$%^&*()]{8,16}$/;

    const res = strArr.map(elem=>{
        const resTest = regEx.test(elem);
        const resExec = regEx.exec(elem);
        const resMatch = elem.match(regEx);
        console.log([resTest, resExec, resMatch])
        return [{resTest, resExec, resMatch}];
    })
    return res;
}
console.log("Password-Validation: ", passwordValidation());









//                          ************************************************
//                               Extracting Text Inside Parentheses
//                          ************************************************













//                          ************************************************
//                               Extracting Text Inside Parentheses
//                          ************************************************














//                          ************************************************
//                               Extracting Text Inside Parentheses
//                          ************************************************