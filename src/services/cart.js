
// Arquivo para as ações do carrinho: adicionar, deletar, remover e totalizar itens.

// Adicionar itens ao carrinho
async function addItem(userCart, item){
    userCart.push(item);
}

// Remover itens do carrinho
async function deleteItem(userCart, name){
    const index = userCart.findIndex((item)=> item.name === name);
    if(index !== -1) {
        userCart.splice(index, 1);
    }
}


// Remove uma quantidade do item que está no carrinho
async function removeItem(userCart, item){
    // deletar caso for menor ou igual a 0 ou menor que o limite do carrinho
    
    const indexFound = userCart.findIndex((product)=> product.name === item.name)
    
    if(userCart[indexFound].quantity > 1){
       userCart[indexFound].quantity--
       await item.subtotal();
       return
    }

    if(userCart[indexFound].quantity == 1){
        userCart.splice(indexFound, 1);
    }

    if(indexFound == -1 ){
        console.log("Item não encontrado");
    
    }
}

async function listCart(userCart){
    console.log("\nShoppe Cart List");
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} | $${item.price} | ${item.quantity}x | Substotal: ${item.subtotal()} `)
    })
}

// Calcula o total de itens do carrinho

async function totalItems(userCart, index){
    const result = userCart.reduce((total, item)=> total + item.subtotal(), 0);
    console.log(`\nTOTAL: ${result}`);
}

export {
    addItem, totalItems, deleteItem, removeItem, listCart
}
