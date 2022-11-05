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
    "Buy my beats",
    "This project has 6 commits"
]

var index: number;
var lastNum: number = words.length + 1;

var canUse: boolean = false;


export function changeValue(){
    if (canUse) {
        var el = document.getElementById("para") as HTMLElement;
        index = Math.floor(Math.random() * words.length);
    
        // Makes sure it will not print same string twice or more
        if (index == lastNum){
            console.log("Same index");

            while (index == lastNum){
                index = Math.floor(Math.random() * words.length);
                if (index != lastNum){
                    el.innerHTML = words[index];
                    break;
                }
            }
        lastNum = index;
        }
        else{
            el.innerHTML = words[index];
            lastNum = index;
        }
    }else{
        console.log("document not initialized...")
        return;
    }
    
}

function init(){
    if (typeof window === "object"){
        document.addEventListener("DOMContentLoaded", function(){
            canUse = true;
        })
    }
}

init();