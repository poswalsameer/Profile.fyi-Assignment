import React, { useContext, useState, useEffect } from "react";
import cartContext from "../contexts/CartContext";
import CartLayout from "./CartLayout";
import toast, { Toaster } from "react-hot-toast";

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

  // Calculate the total price whenever cartItems changes
  useEffect(() => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.count, 0);
    setCartPrice(total);
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

    const checkoutButtonClicked = () => {

      toast("Thanks for shopping!", {
        duration: 1000,
        position: "top-center",
      });

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

            <div className="flex flex-col justify-center items-center gap-y-5">

              <div className="bg-[#ccc5b9] w-56 h-12 rounded-lg flex justify-center items-center gap-x-2 text-black font-bold" >
                <div className="text-black font-semibold">Cart Value:</div> 
                
                <div>
                  {cartPrice.toFixed(2)} <span className="text-green-600 font-extrabold">$</span> 
                </div>
              </div>

              <button className="bg-black border border-[#ccc5b9] w-32 h-9 rounded-lg text-[#ccc5b9]" 
              onClick={checkoutButtonClicked}
              >
                Checkout
              </button>
              <Toaster />

            </div>

          </div>
        </>
      )}
    </>
  );
}

export default Cart;
