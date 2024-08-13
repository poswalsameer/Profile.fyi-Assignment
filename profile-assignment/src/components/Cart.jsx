import React, {useState} from 'react'
import CartLayout from './CartLayout';

function Cart(props) {

    const [cartItems, setCartItems] = useState([]);

    return (
        <>
            {cartItems.length !== 0 ? (
                <div>The cart is empty right now</div>
            ) : (
                <>
                
                    <div className='h-full w-full flex flex-col justify-center items-center' >

                        <CartLayout />

                    </div>
                    

                </>
            )}
        </>
    );
}

export default Cart
