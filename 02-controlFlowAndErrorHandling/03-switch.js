// Switch case

let friend = 'zach';

switch (friend) {
    case 'zach':
    console.log('let\'s go play ultimate') //must use backslash when using single quotes and apostophe
    break; //breaks are neccesary for switch case
    case 'ing':
    console.log('so are you taking me to Belgium')
    break;
    case 'adam':
    console.log('baby stuff')
    break;
    default: //optional as catch all
    whatever
    console.log(`you, $(friend), are not my friend.`)
}

let dessert = "iceCream"

switch (dessert) { //add.lowerCase() to auto make all capitals lower case
    case 'pie':
    console.log("pie pie me oh my")
    break;
    case 'cake':
    console.log("cake is great")
    break;
    case "iceCream" : 
    console.log("I scream for Ice Cream")
    break;
    default:
    console.log('not on the menu')
}

let range = -8

switch (true) {
    case (range < 0 && range > -10):
        console.log('worked')
        break;
        case range >0 || range <= -10:
        console.log('also worked')
        break;
}