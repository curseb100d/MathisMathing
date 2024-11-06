// switch-case.html
function displaySwitchCase(){
    const pokemon_trainer = document.getElementById('inputPokemonTrainer').value.toLowerCase();
    let displaymessage;

    switch (pokemon_trainer) {
        case 'ash':
            displaymessage = "He's Ash!";
            break;
        case 'brock':
            displaymessage = "He's Brock!";
            break;
        case 'misty':
            displaymessage = "She's Misty!";
            break;
        default:
            displaymessage = "You did not input yet";
    }

    document.getElementById('outputmessage').textContent = displaymessage;
}

// if-else.html
function displayIfElse(){
    const ifelse = document.getElementById("inputifelse").value;
    let displayifelsemessage;

    if(ifelse <= 12){
        displayifelsemessage = "You're still young, go, play outside";
    } else if(ifelse <= 17){
        displayifelsemessage = "Are you trying to fool me?";
    } else {
        displayifelsemessage = "Party Approve!";
    }

    document.getElementById("outputifelse").textContent = displayifelsemessage;
}

function displayTernary(){
    var ternary = document.getElementById("inputternary").value;
    let displayTernaryMessage;

    displayTernaryMessage = (ternary == 1) ? true : false;

    document.getElementById("outputTernary").innerHTML = displayTernaryMessage;
}