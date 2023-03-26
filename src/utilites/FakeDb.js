// use local storage to manage cart data
const addToDb = id => {
    let shoppingCard = {};

    // get the shopping card from localStorage
    const storedCart = localStorage.getItem('shopping-card');
    if(storedCart){
        shoppingCard = JSON.parse(storedCart);
    }
    else{
        shoppingCard = {};
    }


    // add quantity
    const quantity = shoppingCard[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCard[id] = newQuantity;
        // const newQuantity = parseInt(quantity) + 1;
        // localStorage.setItem(id, newQuantity);
    }
    else {
        shoppingCard[id] = 1;
        // localStorage.setItem(id, 1);
    }
    localStorage.setItem('shopping-card', JSON.stringify(shoppingCard));
}

const removeFromDb = id =>{
const storedCart = localStorage.getItem('shopping-card');
if(storedCart){
    const shoppingCard = JSON.parse(storedCart);
if(id in shoppingCard){
    delete shoppingCard[id];
    localStorage.setItem('shopping-card', JSON.stringify(shoppingCard));
}
    
}
}

const deleteShoppingCard = ()=>{
    localStorage.removeItem('shopping-card');
}

export {
     addToDb, 
     removeFromDb, 
     deleteShoppingCard 
    }