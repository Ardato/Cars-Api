import React from "react";
import data from "./data.json";
import Cars from "./components/Cars";
import Filter from "./components/Filter";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cars: data.cars,
      model: "",
      sort: "",
    };
  }
  sortCarsBytimeLine = (event) => {
      
    const sort = event.target.value;
    //console.log(event.target.value);
    this.setState((state) => ({
       sort,
      cars: this.state.cars
        .slice()
        .sort((a, b) =>
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
        ),
    }));
  };
  filterCarsBymodel = (event) => {
    console.log(event.target.value)
    if (event.target.value === "") {
      this.setState({ model: event.target.value, cars: data.cars });
    } else {
      this.setState({
        model: event.target.value,
        cars: data.cars.filter(
          (car) => car.availableModel.indexOf(event.target.value) >= 0
        ),
      });
    }
  };
  render() {
    return (
      
      <div className="grid-container">
        <header>
          <a href="/">Search cars by model and year</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.cars.length}
                model={this.state.model}
                sort={this.state.sort}
                filterCarsBymodel={this.filterCarsBymodel}
                sortCarsBytimeLine={this.sortCarsBytimeLine}
              ></Filter>
              <Cars cars={this.state.cars}></Cars>
            </div>
            {/* <div className="sidebar">Cart Items</div> */}
          </div>
        </main>
        <footer>All right is reserved.</footer>
      </div>
      
    );
  }
}

export default App;
