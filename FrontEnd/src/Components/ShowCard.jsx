import React from "react";
import Card from "./Card";
import axios from "axios";

const ShowCard = ({ prod }) => {
  
    

  return (

      <div className="flex gap-16 justify-center flex-wrap mt-24 ">
        {
          prod.map((item, index) => (
            <Card key={index} item={item} />
          )) // map through the array and create a Card component for each item, passing the item as a prop
        }
      </div>
    
  );
};

export default ShowCard;
