import React from "react";
import Card from "./Card";
import ShowCard from "./ShowCard";
import { useState } from "react";
import SellProd from "./SellProd";

const BuySell = ({ prod, addProduct }) => {
  //   const [show, setshow] = useState(false);

  const [activeComponent, setActiveComponent] = useState(null);

  const handleCardBuy = () => {
    setActiveComponent("buy");
  };

  const handleCardSell = () => {
    setActiveComponent("sell");
  };

  return (
    <div className="mt-32">
      <div className="flex justify-center gap-10 mb-20 ">
        <button
          onClick={() => handleCardBuy(prod)}
          className="w-60 h-14 bg-green-300 rounded-full font-mono font-bold text-2xl"
        >
          Buy
        </button>

        <button
          onClick={() => handleCardSell()}
          className="w-60 h-14 bg-red-300 rounded-full font-mono font-bold text-2xl"
        >
          Sell
        </button>
      </div>

      {activeComponent === "buy" && <ShowCard prod={prod} />}
      {activeComponent === "sell" && <SellProd addProduct={addProduct} />}
    </div>
  );
};

export default BuySell;
