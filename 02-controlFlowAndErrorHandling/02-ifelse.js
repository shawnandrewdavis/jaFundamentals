// If Else Statements

let money = false
if (money)  {
    console.log('starbucks')
} else {
    console.log('make coffee')
}

let weather = 75

if (weather < 70) {
    console.log('wear coat')
}else {
    console.log('No jacket')
}


let str = 'sebAstian'

if (str[0] === str[0].toUpperCase()) {
let firstLetter = str[0] + str.slice(1).toLowerCase()
console.log(firstLetter)
}else {
let otherLetters = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
console.log(otherLetters)
}

let newStr = `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`
console.log(newStr)



//Else If Statements

let weather = 40

if(weather > 70) {
    console.log('wear a shirt')
}else if (weather <= 70 && weather > 50) {
console.log ('wear a light jacket')
} else {
    console.log('stay inside')
}

let age = 33
if (age <= 17){
    console.log('too young to do anything')
} else if (age >= 18) {
    console.log('you can vote')
}else if (age = 21 && age > 24) {
    console.log('you can drink')
}else console.log('you can rent a car')

let age = 30
let young = 'Sorry, you\'r too young to do anything'
let vote = 'Yay! You can vote!'
let drink = 'Yay! You can drink!'
let rent = 'Yay! You can rent a car!'

if (age > 0 && age < 120){
if (age >= 25) {
    console.log(rent, drink, vote)
} else if (age >= 21) {
    console.log(drink, vote)
} else if (age >= 18) {
    console.log(age >= 18)
} else {
    console.log(young)
  }
} else {
    console.log('pick real age')
}
