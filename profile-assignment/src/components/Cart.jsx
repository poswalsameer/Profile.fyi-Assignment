import React, {useState} from 'react'

function Cart(props) {

    const [cartItems, setCartItems] = useState([]);

    return (
        <>
            {cartItems.length === 0 ? (
                <div>The cart is empty right now</div>
            ) : (
                <>
                
                    

                </>
            )}
        </>
    );
}

export default Cart
