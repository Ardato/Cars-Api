import React, { useState, useEffect } from "react";
import axios from "axios";
import Cars from "./components/Cars";
import Filter from "./components/Filter";

const App = () => {
  useEffect(() => {
    axios.get("/api/cars").then((response) => {setCars(response.data);setFilteredData(response.data)})
       
    

    
  }, []);



  const [cars, setCars] = useState([]);
  const [model, setModel] = useState("");
  const [sort, setSort] = useState("");
  const [year, setYear] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const sortCarsByYear = (event) => {
    const sort = event.target.value;
    //console.log(event.target.value);
    setSort(sort);
    setCars(
      cars.sort((a, b) =>
        sort === "Old"
          ? a.Year > b.Year
            ? 1
            : -1
          : sort === "New"
          ? a.Year < b.Year
            ? 1
            : -1
          : a._id < b._id
          ? 1
          : -1
      )
    );
  };

  const filterCarsBymodel = (event) => {
    console.log(event.target.value);
    if (event.target.value === "") {
      setModel(event.target.value);
      setCars(cars);
    } else {
      setModel(event.target.value);
      setFilteredData(
        cars.filter(
          (car) => car.availableModel.indexOf(event.target.value) >= 0
        )
      );
    }
  };

  const filterCarsByYear = (event) => {
    if (event.target.value === "") {
      setYear(event.target.value);
      setCars(cars);
    } else {
      setYear(event.target.value);
      setFilteredData(
        cars.filter((car) => car.year.indexOf(event.target.value) >= 0)
      );
    }
  };

  return (
    <div className="grid-container">
      <header>
        <a href="/">Search cars by model and year</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              filteredData={filteredData.length}
              filterCarsBymodel={filterCarsBymodel}
              sortCarsByYear={sortCarsByYear}
              filterCarsByYear={filterCarsByYear}
            ></Filter>
            <Cars filteredData={filteredData}></Cars>
          </div>
          {/* <div className="sidebar">Cart Cars</div> */}
        </div>
      </main>
      <footer>All right is reserved.</footer>
    </div>
  );
};

export default App;
