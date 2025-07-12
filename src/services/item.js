// Características e casos de uso dos itens


// calcula o subtotal do item corretamente e mostra seus atributos
async function attributesItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    }
}

export default attributesItem;