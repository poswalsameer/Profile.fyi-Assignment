import React from 'react'

function CartLayout() {
  return (
    <div className='h-40 w-full bg-slate-400 flex flex-row justify-around items-center' >

        <div className='h-[80%] w-[10%] rounded-sm bg-red-400 mx-5'>
            {/* image */}
        </div>

        <div className=' h-full w-[70%] flex justify-center items-center text-2xl text-black font-semibold'>
            NAME OF THE PRODUCT
            {/* product name */}
        </div>

        <div className='h-10 w-[15%] flex justify-center items-center mx-5'>
            <button className='h-full w-[25%] bg-green-600 text-white' >+</button>
            {/* quantity */}
            <div className='h-full w-[50%] flex justify-center items-center font-bold bg-blue-300 text-black'>1</div>
            <button className='h-full w-[25%] bg-green-600 text-white'>-</button>
        </div>
      
    </div>
  )
}

export default CartLayout
