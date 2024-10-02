import React from "react";

const Card = ({item}) => {

  const {imageUrl, name, description, price} = item;
  

  return (
    
    <div className="w-56 h-72 bg-blue-100 rounded-md">
      <div className="flex justify-center">
        <div className="w-52 h-40 bg-red-300 mt-2">
          <img src={imageUrl} alt="" className="object-cover w-full h-full" />
        </div>
      </div>

      <div className="p-2 font-mono font-semibold">
        <h3>{name}</h3>
        <h3 className="overflow-hidden line-clamp-2 min-h-12">{description}</h3>
        <div className="flex justify-between pr-1 mt-3">
          <h3>₹{price}</h3>
          <button className="bg-green-500 w-16 rounded-full text-white text-md font-normal">Buy</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
