const prompt = require('prompt-sync')();

let decision = prompt("This program contructs and deconstructs colors. Would you like to contruct or deconstruct a color? Enter 'construct' or 'deconstruct': ");

if (decision === 'construct'){

    let input = prompt("You can construct 'red + blue', 'red + yellow', or 'blue + yellow'. Enter your construction selection: ");

    if (input === 'red + blue'){

        console.log("Red + blue makes: Purple");

    } else if (input === 'red + yellow'){

        console.log("Red + yellow makes: Orange");

    } else if (input === 'blue + yellow') {

        console.log("Blue + yellow makes: Green");

    } else {
        console.log("error");
    }

} else if (decision === 'deconstruct'){

    let input = prompt("You can deconstruct 'purple', 'orange', or 'green'. Enter your deconstruction selection: ");

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

let color = prompt("Select a color, 'purple', 'orange', 'green', or a color combination, 'red blue', 'red yellow', 'blue yellow' : ");


if (color === 'red blue'){

    console.log("Red + blue makes: Purple");

} else if (color === 'red yellow'){

    console.log("Red + yellow makes: Orange");

} else if (color === 'blue yellow') {

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



