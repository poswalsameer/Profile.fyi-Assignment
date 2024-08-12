import React from "react";

function ProductCard() {
  return (
    
    <div className="h-96 w-72 flex flex-col justify-center items-center bg-red-500 border-black rounded-2xl " >

        <div className="h-[70%] w-[90%] " >
            <img src="tshirt.jpg" alt="" className="h-full w-full rounded-xl" />
        </div>

        <div className="h-[15%] w-full text-2xl font-bold flex justify-center items-center">
            Product Name
        </div>

        <div className="h-[10%] w-full text-base font-semibold flex justify-between items-center">
            <div className=" mx-5">
                Product Price
            </div>

            <div className="mx-5">
            <button className="h-7 w-14 bg-black font-semibold text-xs rounded-md text-center">
                Add
            </button>
            </div>
        </div>

    </div>

  );
}

export default ProductCard;
