let food = ['pecan pie','shrimp', 'quesadilla', 'cheese cake', 'hotdog'];

for(f in food) {
    //console.log(food[f])
}


food.push('pizza')

food.splice(1,1, 'bananas'); 
//first num where to start, seconnd splice number tells how many to cut, third number replaces 

console.log(food)

food.splice(4,1)
console.log(food)

food.pop();
console.log(food)