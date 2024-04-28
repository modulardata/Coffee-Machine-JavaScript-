const input = require('sync-input')

let _water = parseInt(input('Write how many ml of water the coffee machine has:\n'))
let _milk = parseInt(input('Write how many ml of milk the coffee machine has:\n'))
let _beans = parseInt(input('Write how many grams of coffee beans the coffee machine has:\n'))
let _cups = parseInt(input('Write how many cups of coffee you will need:\n'))


const maximumPossibleCups = (_water, _milk, _beans, _cups) => {
    let water = _water
    let milk = _milk
    let beans = _beans
    let cups = _cups
    let waterPerCup = 200
    let milkPerCup = 50
    let beansPerCup = 15
    let cupsPerCup = 1
    let machineHasCupsWithMilk = 0
    let cupsOfCoffeeWithMilk = 0

    while (water >= waterPerCup && milk >= milkPerCup && beans >= beansPerCup && cups >= cupsPerCup) {
        cupsOfCoffeeWithMilk += cupsPerCup
        cups -= cupsPerCup
        water -= waterPerCup
        milk -= milkPerCup
        beans -= beansPerCup
    }

    while (water >= waterPerCup && beans >= beansPerCup && milk >= milkPerCup) {
        machineHasCupsWithMilk += cupsPerCup
        cups -= cupsPerCup
        milk -= milkPerCup
        water -= waterPerCup
        beans -= beansPerCup
    }


    if (machineHasCupsWithMilk) {
        console.log(`Yes, I can make that amount of coffee (and even ${machineHasCupsWithMilk} more than that)`)
    } else if (cupsOfCoffeeWithMilk === 1) {
        console.log('Yes, I can make that amount of coffee')
    } else if (machineHasCupsWithMilk === cupsOfCoffeeWithMilk) {
        console.log('Yes, I can make that amount of coffee ')
    } else {
        console.log(`No, I can make only ${cupsOfCoffeeWithMilk} cups of coffee`)
    }

    // let cupsOfCoffeeWithMilkLeft = machineHasCupsWithMilk - cupsOfCoffeeWithMilk
    // console.log("-> machineHasCupsWithMilk", machineHasCupsWithMilk);
    // console.log("-> cupsOfCoffeeWithMilkLeft", cupsOfCoffeeWithMilkLeft);
    // console.log(`${cupsOfCoffeeWithMilk} cup(s) of coffee`)

}


maximumPossibleCups(_water, _milk, _beans, _cups)
