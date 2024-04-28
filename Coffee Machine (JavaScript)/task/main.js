const input = require('sync-input');

let water = 400;
let milk = 540;
let beans = 120;
let cups = 9;
let money = 550;
let action = '';

const remaining = () => {
    console.log(`The coffee machine has:
    ${water} ml of water
    ${milk} ml of milk
    ${beans} g of coffee beans
    ${cups} of disposable cups
    $${money} of money\n`)
}

const buy = () => {
    let chose = parseInt(input('\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n'));
    if (chose === 1) {
        if (water >= 250 && beans >= 15 && cups >= 1) {
            water -= 250
            beans -= 16
            cups -= 1
            money += 4
            console.log(`I have enough resources, making you a coffee!\n`)
        } else if (water < 250) {
            console.log(`Sorry, not enough water!`)
        } else if (beans < 15) {
            console.log(`Sorry, not enough beans!`)
        } else if (cups < 1) {
            console.log(`Sorry, not enough cups!`)
        }
    } else if (chose === 2) {
        if (water >= 350 && milk >= 75 && beans >= 20 && cups >= 1) {
            water -= 350
            milk -= 75
            beans -= 20
            cups -= 1
            money += 7
            console.log(`I have enough resources, making you a coffee!\n`)
        } else if (water < 350) {
            console.log(`Sorry, not enough water!`)
        } else if (milk < 75) {
            console.log(`Sorry, not enough milk!`)
        } else if (beans < 20) {
            console.log(`Sorry, not enough beans!`)
        } else if (cups < 1) {
            console.log(`Sorry, not enough cups!`)
        }
    } else if (chose === 3) {
        if (water >= 200 && milk >= 100 && beans >= 12 && cups >= 1) {
            water -= 200
            milk -= 100
            beans -= 12
            cups -= 1
            money += 6
            console.log(`I have enough resources, making you a coffee!\n`)
        } else if (water < 200) {
            console.log(`Sorry, not enough water!`)
        } else if (milk < 100) {
            console.log(`Sorry, not enough milk!`)
        } else if (beans < 12) {
            console.log(`Sorry, not enough beans!`)
        } else if (cups < 1) {
            console.log(`Sorry, not enough cups!`)
        }
    } else if (chose === 4) {
        console.log(`Back to main menu!\n`)
    } else {
        console.log(`Wrong input!\n`)
    }
}

const fill = () => {
    let water_fill = parseInt(input('\nWrite how many ml of water do you want to add:\n'))
    let milk_fill = parseInt(input('Write how many ml of milk do you want to add:\n'))
    let beans_fill = parseInt(input('Write how many grams of coffee beans do you want to add:\n'))
    let cups_fill = parseInt(input('Write how many disposable cups of coffee do you want to add:\n\n'))
    water += water_fill
    milk += milk_fill
    beans += beans_fill
    cups += cups_fill
}

const take = () => {
    console.log(`\nI gave you $${money}\n`)
    money = 0
}



while (action.toLowerCase() !== 'exit') {
    let action = input('Write action (buy, fill, take, remaining, exit):\n');
    if (action.toLowerCase() === 'remaining') {
        remaining()
    } else if (action.toLowerCase() === 'buy') {
        buy()
    } else if (action.toLowerCase() === 'fill') {
        fill()
    } else if (action.toLowerCase() === 'take') {
        take()
    } else if (action.toLowerCase() === 'exit') {
        break;
    }
}
