import * as cartFunctions from "./services/cart.js";
import attributesItem from "./services/item.js";
const cart = [];

console.log("\n🛒 SHOPPE CART")

const item1 = await attributesItem("smartphone", 2899.90, 2);
const item2 = await attributesItem("notebook", 3799.90, 1);
const item3 = await attributesItem("umbrela", 9.90, 1);
const item4 = await attributesItem("pants", 99.90, 4);

await cartFunctions.addItem(cart, item1);
await cartFunctions.addItem(cart, item2);
await cartFunctions.addItem(cart, item3);
await cartFunctions.addItem(cart, item4);

await cartFunctions.deleteItem(cart, "umbrela");
await cartFunctions.removeItem(cart, "pants")
await cartFunctions.listCart(cart);
await cartFunctions.totalItems(cart)
