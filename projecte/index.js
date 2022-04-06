const addedProd = 0;

function buy(id) {
        const addedProd = products.find(element => element.id == id);
        cart.push(addedProd);
        console.log(addedProd);

}

function subtotal() {
        for (let i = 0; i < cartList.length; i++) {
                console.table(cartList[i].type);
               switch (carList.type) {
                       case 'grocery':
                               subtotal.grocery.value += cartList[i].price;
                               break;
                        case 'beauty':
                                subtotal.beauty.value += cartList[i].price;
                                break;
                        case 'clothes':
                                subtotal.clothes.value += cartList[i].price;
                                break;                        
                       default:
                               break;
               }
        }
}


