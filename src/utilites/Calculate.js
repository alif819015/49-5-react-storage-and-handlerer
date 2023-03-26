const add =(first, second) =>{
return first + second;
}

const subtraction = (first, second) =>{
    return first - second;
}

const multiply = (first, second) =>{
    return first * second;
}

const divide = (first, second) =>{
    return first / second;
}

//  const numbers = [20, 45, 6, 76, 43, 66];
//  const sumReduce = (previous, current) => previous + current;
//  const total = numbers.reduce(sumReduce,0)

// const items = [
//     {id: 1, number: 'alta', price: 100},
//     {id: 1, number: 'alta', price: 100},
//     {id: 1, number: 'alta', price: 100},
//     {id: 1, number: 'alta', price: 100},
//     {id: 1, number: 'alta', price: 100}
// ]
// const itemSumReducer = (previous, current) => previous + current.price;
// const itemTotal = items = items.reduce(itemSumReducer,0);

const getTotalPrice = products =>{
    const reduce = (previous, current) => previous + current.price;
    const total = products.reduce(reduce,0);
    return total;
}

export {add, 
    subtraction, 
    multiply, 
    divide, 
    getTotalPrice as getTotal};
