// nickname: FAT ARROW FUNCTIONS

function coffee() {
    console.log("coffee is life!")
}

let coffee = () => {
    console.log('coffee is cool');
}

coffee();



var cats = (kitten, puppy) => {
    console.log(`I have ${kitten} cat(s) and ${puppy} dog(s)`)
}

cats(3, 35);

let fatArrows = (x) => console.log(x);

fatArrows('this is a function');

let namingMachine = (fname, lname) => (fname, lname);

console.log(namingMachine('tom', "hiddleston"));

let score = "winner";

function upperCase(big) {
    return big.toUpperCase(;)
}

function lowerCase(small) {
    return small.toLowerCase();
}

console.log(upperCase(score));
console.log(lowercase(score));

