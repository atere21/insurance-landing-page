import React from "react";
import { productCard } from "../utils/productsCard";
import line from "../assets/line.png";

const Products = () => {
  return (
    <div className=" min-w-[400px] bg-center mt-20 bg-[#f8fcfe] text-black bg-no-repeat flex justify-center items-center flex-col pt-10 pb-12">
      <img src={line} alt="line" />
     <div className="min-w-[500px] px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-black text-center lg:text-left lg:ml-4 mb-1 sm:mb-2 mx-2">
        Our Products
      </h2>
      <p className="text-black text-xl justify-center mx-auto p-4 flex  ">Our Products help you live with confidence</p>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 bg-[#f8fcfe]  mx-auto justify-center ">
        {productCard.map((card, idx) => (
          <div key={idx} className="rounded-lg h-[280px] w-[280px] cursor-pointer border  bg-white p-4 m-2  ">
            <img src={card.icon} alt={card.title} className="w-8 h-8 mt-4" />
            <h3 className="text-xl font-semibold pt-8">{card.title}</h3>
            <p className="text-sm">{card.body}</p>
            <button onClick={() => window.location.href = card.link} 
            className="bg-transparent hover:scale-105 duration-300 p-2 mx-auto justify-center flex hover:bg-blue-600 hover:text-white
            rounded-md border border-blue-600 text-blue-600 min-w-[200px] mt-8">
              Buy now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
