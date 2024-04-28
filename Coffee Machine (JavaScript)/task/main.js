const input = require('sync-input');

let water = 400;
let milk = 540;
let beans = 120;
let cups = 9;
let money = 550;

console.log(`The coffee machine has:
${water} ml of water
${milk} ml of milk
${beans} g of coffee beans
${cups} of disposable cups
$${money} of money\n`);

let action = input('Write action (buy, fill, take):\n');

if (action.toLowerCase() === 'buy') {
    let chose = parseInt(input('What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n'));
    if (chose === 1) {
        if (water >= 250 && beans >= 15 && cups >= 1) {
            water -= 250
            beans -= 16
            cups -= 1
            money += 4
            // console.log(`I have enough resources, making you a coffee!`)
        }
    } else if (chose === 2) {
        if (water >= 350 && milk >= 75 && beans >= 20 && cups >= 1) {
            water -= 350
            milk -= 75
            beans -= 20
            cups -= 1
            money += 7

        }
    } else if (chose === 3) {
        if (water >= 200 && milk >= 100 && beans >= 12 && cups >= 1) {
            water -= 200
            milk -= 100
            beans -= 12
            cups -= 1
            money += 6
            // console.log(`I have enough resources, making you a coffee!`)
        }
    }
} else if (action.toLowerCase() === 'fill') {
    let water_fill = parseInt(input('Write how many ml of water do you want to add:\n'))
    let milk_fill = parseInt(input('Write how many ml of milk do you want to add:\n'))
    let beans_fill = parseInt(input('Write how many grams of coffee beans do you want to add:\n'))
    let cups_fill = parseInt(input('Write how many disposable cups of coffee do you want to add:\n'))
    water += water_fill
    milk += milk_fill
    beans += beans_fill
    cups += cups_fill

} else if (action.toLowerCase() === 'take') {
    console.log(`I gave you $${money}`)
    money = 0
}


console.log(`\nThe coffee machine has:
${water} ml of water
${milk} ml of milk
${beans} g of coffee beans
${cups} of disposable cups
$${money} of money`);
