// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')


let how_many = input('Write how many cups of coffee you will need:\n')
console.log(`For ${how_many} cups of coffee you will need:`)
console.log(`${how_many * 200} ml of water`)
console.log(`${how_many * 50} ml of milk`)
console.log(`${how_many * 15} g of coffee beans`)
