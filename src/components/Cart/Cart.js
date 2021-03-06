import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total =cart.reduce( (total,prd)=> total + prd, 0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
    }

let shipping =0;
if(total >35){
    shipping = 0;
}
else if (total > 15){
        shipping = 4.99;
}
else if(total > 0){
    shipping = 4.99;
}
return (
        <div>
            <h4>Order summary:</h4>
            <p>Items Orderd:{cart.length}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p>Total Price:{total + shipping}</p>
        </div>
    );
};

export default Cart; 