let displayKeyboard = false;
let Capslock = false;
let text = "";

function handleClick(event) {
    if(!displayKeyboard)
        document.querySelector('.keyboard').classList.remove("keyboard--hidden")
    else
        document.querySelector('.keyboard').classList.add("keyboard--hidden")
    displayKeyboard = !displayKeyboard;
}

function handleKeyboardClick(event) {
    let buttonPressed = event.target.dataset.keyvalue || event.target.parentElement.dataset.keyvalue;
    if(buttonPressed) {
        if(buttonPressed === "CP"){
            Capslock = !Capslock;
            return;
        } 
        else if(buttonPressed === 'bksp'){
            text = text.slice(0, text.length-1);
            console.log("caught", text);
            
        }
        else if(buttonPressed === 'space') {
            text += " ";
        }
        else if(buttonPressed === 'enter') {
            text += "\n";
        } else {
            if(isNaN(buttonPressed) && Capslock )
                text += buttonPressed.toUpperCase();
            else
                text += buttonPressed;
        }
        document.querySelector('.textArea').value = text;
        document.querySelector('.textArea').focus();

    }
}

function handleChange(event) {
    text = event.target.value;
}