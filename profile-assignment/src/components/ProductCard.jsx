import React from "react";

function ProductCard(props) {
  return (
    
    <div className="h-[28rem] w-[18.5rem] flex flex-col justify-center items-center bg-[#ccc5b9] rounded-lg border border-white gap-y-1" >

        <div className="h-[65%] w-[85%] " >
            <img src={props.productImage} alt="" className="h-full w-full rounded-md border-2 border-[#403d39]" />
        </div>

        <div className="h-[15%] w-[95%] text-lg mx-1 text-[#283618] font-semibold flex justify-center items-center">
            {props.productName}
        </div>

        <div className="h-[10%] w-full text-xl text-black font-semibold flex justify-between items-center">
            <div className=" mx-5">
                {props.productPrice} <span className="text-green-600 font-extrabold">$</span>
            </div>

            <div className="mx-5">
            <button className="h-7 w-14 bg-black transition-all text-white delay-75 ease-in hover:bg-gray-800 font-semibold text-xs rounded-md text-center" onClick={props.addButtonClicked} >
                Add
            </button>
            </div>
        </div>

    </div>

  );
}

export default ProductCard;
