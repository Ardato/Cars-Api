import React from "react";
import formatCurrency from "../util";

const Cars = ({ cars }) => {
  return (
    <div>
      <ul className="cars">
        {cars.map((car) => (
          <li key={car.model}>
            <div className="car">
              <a href={"#" + car._id}>
                <img src={car.image} alt={car.model}></img>
                <p>{car.model}</p>
                <p>Year : {car.Year}</p>
              </a>
              <div className="car-price">
                <div>Price:{formatCurrency(car.price)}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Cars;
