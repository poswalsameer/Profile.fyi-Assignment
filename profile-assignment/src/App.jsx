import { useEffect } from 'react';
import { useState } from 'react';
import './App.css'
import ProductCard from './components/ProductCard'
import axios from 'axios';
import { Link } from 'react-router-dom';

function App() {

  const storeAPI = 'https://fakestoreapi.com/products';

  const productNames = ["Laptop Backpack", "Slim Fit T-shirts", "Men's Jacket", "Men's Innerwear", "Chain Bracelet", "MicroPave", " White Gold Plated Ring", "Gold Plated Stainless Steel Earrings", "Portable External Hard Drive ", "1TB Internal SSD - SATA III", "Silicon Power 256GB SSD", "WD 4TB Gaming Drive", "Acer SB220Q bi 21.5 inches Full HD Monitor", "Samsung 49-Inch 144Hz Gaming Monitor", "BIYLACLESEN Women's 3-in-1 Snowboard Jacket ", " Women's Removable Hooded Faux Leather Jacket", "Women Windbreaker", " Women's Solid Short Sleeve Boat Neck V", "Opna Women's Short Sleeve Moisture", "Womens T Shirt Casual Cotton" ]

  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect( () => {

    axios.get(storeAPI)
      .then( (response) => (
        // response.data.title = productNames[response.data.id - 1]
        setProducts(response.data)
       ) )
  
  }, [] )

  console.log(products);

  const addButtonClicked = ( product ) => {
    console.log("The product item clicked is: ", product);
    setCartItems([...cartItems, { id: product.id, name: productNames[product.id - 1], price: product.price } ])

  }

  // TILL NOW, THE STATE IS GETTING UPDATED AND CART ITEMS ARE SHOWING UP IN THE CONSOLE
  console.log("All the values in the cart: ", cartItems);

  return (
    <>
      <div className='h-full w-full flex flex-col justify-center items-center' >

        <div className=' h-[80%] w-full grid grid-cols-4 place-content-center place-items-center gap-y-16 gap-x-32' >

            { products.map( ( product ) => (

                <div key={product.id}>
                  <ProductCard productImage={product.image} productName={productNames[product.id - 1]} productPrice={product.price} addButtonClicked={() => addButtonClicked(product)}  />
                </div>

            ) ) }

        </div>

        <Link to="cart">
          <button className='h-10 w-40 bg-white transition-all delay-75 ease-in hover:bg-gray-300 text-black m-16 rounded-lg text-sm font-bold '>
              GO TO CART
          </button>
        </Link>


      </div>
    </>
  )
}

export default App
