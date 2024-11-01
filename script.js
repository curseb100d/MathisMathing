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
    const ifelse = document.getElementById("inputifelse");
    let displayifelsemessage;

    if (ifelse >= 18) {
        displayifelsemessage = "Party approve!";
    } else if (ifelse >= 16) {
        displayifelsemessage = "Are you trying to fool me?!";
    } else {
        displayifelsemessage = "You're young yet, go play!";
    }

    document.getElementById("outputifelse").textContent = displayifelsemessage;
}