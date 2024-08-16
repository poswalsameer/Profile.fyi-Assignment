import React from 'react'
import { useContext } from 'react'
import cartContext from '../contexts/CartContext'

function CartLayout(props) {


  const {cartItems, setCartItems} = useContext(cartContext);

  return (
    <div className='h-36 w-[55rem] bg-[#ccc5b9] rounded-xl border border-white flex flex-row justify-around items-center' >

        <div className='h-[80%] w-[14%] rounded-sm bg-red-400 mx-5'>
            
            <img src={props.productImage} alt="Image of the product" className='h-full w-full rounded-md border-2 border-[#403d39]' />
        </div>

        <div className=' h-full w-[70%] flex justify-center items-center text-2xl text-[#283618] font-semibold'>
            {props.productName}
            {/* product name */}
        </div>

        <div className='h-10 w-[15%] flex justify-center items-center mx-5'>
            <button className='h-full w-[28%] bg-slate-600 text-white font-extrabold rounded-l-lg' onClick={props.removeFunction}>-</button>
            <div className='h-full w-[50%] flex justify-center items-center font-bold bg-slate-100 text-black'>{props.count}</div>
            <button className='h-full w-[28%] bg-slate-600 text-white font-extrabold rounded-r-lg' onClick={props.addFunction}>+</button>
        </div>
      
    </div>
  )
}

export default CartLayout
