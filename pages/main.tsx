let words: string[] = [
    "JavaScript sucks!",
    "I love typescript!",
    "My name is jack",
    "Hello",
    "You have clicked me...",
    "There is nothing special about this button...",
    "Try again.",
    "Hello, World!",
    "Visit my website: <span>http://www.jackb1434.com</span>",
    "AUGHHHHHHHHHHHHHHHH",
    "Buy my beats"
]


var index: number;
var lastNum: number = words.length + 1; 


export function changeValue(){

    index = Math.floor(Math.random() * words.length);
    
    
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