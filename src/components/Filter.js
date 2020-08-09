import React from "react";
const Filter = ({
  sortCarsBytimeLine,
  filterCarsBymodel,
  count,
  model,
  sort,
}) => {
  return (
    <div className="filter">
      <div className="filter-result">{count} Cars</div>
      <div className="filter-sort">
        Filter cars by timeline{" "}
        <select value={sort} onChange={sortCarsBytimeLine}>
          <option>select</option>
          <option value="Old">Old</option>
          <option value="New">New</option>
        </select>
      </div>
      <div className="filter-model">
        Filter cars by model{" "}
        <select value={model} onChange={filterCarsBymodel}>
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
