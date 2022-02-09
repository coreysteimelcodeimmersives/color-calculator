const prompt = require('prompt-sync')();

let decision = prompt("Would you like to contruct or deconstruct a color? Enter 'construct' or 'deconstruct': ");

if (decision === 'construct'){

    let color1 = prompt("For color 1 choose red, blue or yellow: ");

    let color2 = 'blue';

    if (color1 === 'red'){
        color2 = prompt("For color 2 choose blue or yellow: ");
    } else if (color1 === 'blue'){
        color2 = prompt("For color 2 choose red or yellow: ");
    } else if (color1 === 'yellow'){
        color2 = prompt("For color 2 choose red or blue: ");
    } else {
        console.log('error');
        return;
    }
    
    if (color1 === "red" && color2 === "blue" || color1 === "blue" && color2 === "red"){

        console.log("Red + blue makes: Purple");

    } else if (color1 === "red" && color2 === "yellow" || color1 === "yellow" && color2 === "red"){

        console.log("Red + yellow makes: Orange");

    } else if (color1 === "blue" && color2 === "yellow" || color1 === "yellow" && color2 === "blue") {

        console.log("Blue + yellow makes: Green");

    } else {
        console.log("error");
    }

} else if (decision === 'deconstruct'){

    let input = prompt("You can deconstruct 'purple', 'orange', or 'green'. Enter your color selection: ");

    if (input === 'purple'){

        console.log("Purple is made of: Red + blue");

    } else if (input === 'orange'){

        console.log("Orange is made of: Red + yellow");

    } else if (input === 'green') {

        console.log("Green is made of: Blue + yellow");

    } else {

        console.log("error");

    }

} else {

    console.log("Enter either 'construct' or 'deconstruct'. Please try again.");

}

// Stretch Goals

let color = prompt("Enter one secondary color (purple, organge, or green), or enter two different primary colors (red, blue, or yellow): ");


if (color.includes('red ') && color.includes('blue') || color.includes('red') && color.includes('blue ')){

    console.log("Red + blue makes: Purple");

} else if (color.includes('red ') && color.includes('yellow') || color.includes('red') && color.includes('yellow ')){

    console.log("Red + yellow makes: Orange");

} else if (color.includes('blue ') && color.includes('yellow') || color.includes('blue') && color.includes('yellow ')) {

    console.log("Blue + yellow makes: Green");

} else if (color === 'purple'){

    console.log("Purple is made of: Red + blue");

} else if (color === 'orange'){

    console.log("Orange is made of: Red + yellow");

} else if (color === 'green') {

    console.log("Green is made of: Blue + yellow");

} else {

    console.log("error");

}



