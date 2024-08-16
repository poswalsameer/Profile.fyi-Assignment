import React from 'react'
import cartContext from './CartContext'

function CartContextProvider({children}) {

    const [cartItems, setCartItems] = React.useState([]);

    //   useEffect(() => {
    //     localStorage.setItem("cartItems", JSON.stringify(cartItems));
    //   }, [cartItems]);

    return (
    
        <cartContext.Provider value={{cartItems, setCartItems}}>
            {children}
        </cartContext.Provider>

    )
}

export default CartContextProvider
