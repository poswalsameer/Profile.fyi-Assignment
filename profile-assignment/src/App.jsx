import { useEffect } from 'react';
import { useState } from 'react';
import './App.css'
import ProductCard from './components/ProductCard'
import axios from 'axios';
import { Link } from 'react-router-dom';

function App() {

  const storeAPI = 'https://fakestoreapi.com/products';

  const [products, setProducts] = useState([]);

  useEffect( () => {

    axios.get(storeAPI)
      .then( (response) => (
        setProducts(response.data)
        // console.log(response.data)
        ) );

  }, [] )

  return (
    <>
      <div className='h-full w-full flex flex-col justify-center items-center' >

        <div className=' h-[80%] w-full grid grid-cols-4 place-content-center place-items-center gap-y-10 gap-x-5' >

            <div>
              <ProductCard />
            </div>

            <div>
              <ProductCard />
            </div>

            <div>
              <ProductCard />
            </div>

            <div>
              <ProductCard />
            </div>

            <div>
              <ProductCard />
            </div>

            <div>
              <ProductCard />
            </div>

            <div>
              <ProductCard />
            </div>

            <div>
              <ProductCard />
            </div>

        </div>

        <button className='h-10 w-44 bg-red-500 m-16 rounded-lg font-semibold '>
            
            <Link to="cart">
              GO TO CART
            </Link>
            

        </button>


      </div>
    </>
  )
}

export default App
