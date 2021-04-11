import React from "react";

{/*searchbar left when the user types in to search a country*/}
const Filter = () => {
  return (
    <section className="filter">
      <form className="form-control">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country"
        />
      </form>

{/*Drop down bar right when the user selects a country*/}
      <div className="region-filter">
        <select name="select" id="select" className="select">
          <option value="Filter by Region"> Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="America">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Europe">Oceania</option>

        </select>
      </div>
    </section>
  );
};

export default Filter;
