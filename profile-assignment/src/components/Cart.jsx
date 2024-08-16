import React, { useContext, useState, useEffect } from "react";
import cartContext from "../contexts/CartContext";
import CartLayout from "./CartLayout";

function Cart(props) {
  const { cartItems } = useContext(cartContext);
  const { setCartItems } = useContext(cartContext);

  const [cartPrice, setCartPrice] = useState(0);

  useEffect(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    if (savedCartItems) {
        setCartItems(JSON.parse(savedCartItems));
    }
  }, [setCartItems]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addButtonClicked = (id) => {
        
        const productId = cartItems.findIndex(item => item.id === id);

        if (productId !== -1) {
            setCartItems(cartItems.map((item, index) => {
              if (index === productId) {
                return { ...item, count: item.count + 1 };
              }
              return item;
            }));
        }
    }

    const removeButtonClicked = (id) => {

        const productId = cartItems.findIndex(item => item.id === id);

        if (productId !== -1) {
            setCartItems(cartItems.map((item, index) => {
              if (index === productId && item.count > 0) {
                return { ...item, count: item.count - 1 };
              }
              return item;
            }));
        }

    }

   

  return (
    <>
      {cartItems.length === 0 ? (
        <div>The cart is empty right now</div>
      ) : (
        <>
          <div className=" h-[80%] w-full flex flex-col justify-center items-center gap-y-16 gap-x-16">

            {cartItems.map((cartItem) => (
              <div key={cartItem.id}>
                <CartLayout
                  productImage={cartItem.image}
                  productName={cartItem.name}
                  count={cartItem.count}
                  addFunction = { () => addButtonClicked(cartItem.id) }
                  removeFunction = { () => removeButtonClicked(cartItem.id) }
                />
              </div>
            ))}

          </div>
        </>
      )}
    </>
  );
}

export default Cart;
