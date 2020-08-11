import React from "react";
const Filter = ({
  sortCarsByYear,
  filterCarsBymodel,
  count,
  filterCarsByYear,
}) => {
  return (
    <div className="filter">
      <div className="filter-result">{count} Cars</div>
      <div className="filter-sort">
        Sort by Year{" "}
        <select onChange={sortCarsByYear}>
          <option value="">ALL</option>
          <option value="Old">Old</option>
          <option value="New">New</option>
        </select>
      </div>
      <div className="filter-by-year">
        Filter by Year{" "}
        <select onChange={filterCarsByYear}>
          <option value="">ALL</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2011">2011</option>
        </select>
      </div>

      <div className="filter-model">
        Filter cars by model{" "}
        <select onChange={filterCarsBymodel}>
          <option value="">ALL</option>
          <option value="OPEL">Opel</option>
          <option value="SEAT">seat</option>
          <option value="SUBARU">subaru</option>
          <option value="HONDA">honda</option>
          <option value="TOYOTA">toyota</option>
          <option value="FERRARI">ferrari</option>
          <option value="HYUNDAI">hyundai</option>
          <option value="MAZDA">Mazda</option>
          <option value="MERCEDES">mercedes</option>
          <option value="Suzuki">Suzuki</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
