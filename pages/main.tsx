let words: string[] = [
    "JavaScript sucks!",
    "I love typescript!",
    "My name is jack",
    "Hello",
    "You have clicked me...",
    "There is nothing special about this button...",
    "Try again.",
    "Hello, World!",
    "Visit my website: http://www.jackb1434.com",
    "AUGHHHHHHHHHHHHHHHH",
    "Buy my beats"
]

var lastNum: number;
var index: number;


export function changeValue(){

    index = Math.floor(Math.random() * words.length);
    console.log("Current Index: " + index);
    console.log("The last known number: " + lastNum);
    
    // Makes sure it will not print same string twice or more
    if (index == lastNum){
        console.log("Same index");

        while (index == lastNum){
            index = Math.floor(Math.random() * words.length);
            if (index != lastNum){
                document.getElementById("para").innerHTML = words[index];
                break;
            }
        }
        lastNum = index;
    }
    else{
        document.getElementById("para").innerHTML = words[index];
        lastNum = index;
    }
}