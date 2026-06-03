// let Allbtn = document.querySelectorAll(`.btn`);      // NodeList
let calc = document.querySelector(`.calc`)
let screen = document.querySelector(`.screen`);
let storeSection = document.querySelector(`.storedval`);

let StoredVal = 0;
let operator = "+";              // Initialize to `+` for first value
let resetScreen = false;

calc.addEventListener("click", (e) => 
{
    
    if(e.target.tagName != "BUTTON")
    {
        return;
    }

    if(resetScreen)
    {
        screen.innerText = "";
        resetScreen = false;
    }
    

    switch(e.target.innerText)
    {

        case "C" : screen.innerText = "";
                    StoredVal = 0;
                    operator = "+"
                    break;

        case "+" : 
        case "-" : 
        case "x" : 
        case "/" : operation();
                    operator = `${e.target.innerText}`;
                    resetScreen = true;
                    break;

        case "=" :  operation();
                    screen.innerText = StoredVal;
                    operator = "+";
                    resetScreen = true;
                    break;

        default :  screen.innerText += e.target.innerText;
                    
    }    

})

const operation = () =>
{
    if(operator == "+")
    {
        StoredVal += Number(screen.innerText);

    }
    else if(operator == "-")
    {
        StoredVal -= Number(screen.innerText);

    }
    else if(operator == "x")
    {
        StoredVal *= Number(screen.innerText);
    }
    else if(operator == "/")
    {
        StoredVal /= Number(screen.innerText);
    }
}