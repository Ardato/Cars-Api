import React from "react";
import formatCurrency from "../util";
import Zoom from "react-reveal/Zoom"

const Cars = ({filteredData}) => {
  return (
    <div>
       <Zoom  cascade ={true}> 
      <ul className="cars">
        {filteredData.map((car) => (
          <li key={car.model}>
            <div className="car">
              <a href={"#" + car._id}>
                <img src={car.image} alt={car.model}></img>
                <p>{car.model}</p>
                <p>Year : {car.year}</p>
              </a>
              <div className="car-price">
                <div>Price:{formatCurrency(car.price)}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
      </Zoom>
    </div>
  );
};
export default Cars;
