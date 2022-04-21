const divider = document.getElementById("imgdiv");
let myQuote = '';
setInterval(() => {
    if(window.matchMedia("(min-width: 522px)").matches){
    
        divider.src = "./images/pattern-divider-desktop.svg";
    }
    else{
        divider.src = "./images/pattern-divider-mobile.svg"
    }   
}, 500);

async function getQuote(){
    let quote = await fetch("https://api.adviceslip.com/advice");
    return quote.json();
}
async function mostrarQuote(){
    console.log("Quote!")
    myQuote = await getQuote();
    console.log(myQuote)
    document.getElementById("numeroQuote").innerHTML = "#"+myQuote.slip.id;
    document.getElementById("quote").innerHTML = '"'+myQuote.slip.advice+'"';
}