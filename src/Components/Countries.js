import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//filters the information from the raw data onto the UI
const data = "https://restcountries.eu/rest/v2/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    const response = await fetch(data);
    const countries = await response.json();
    setCountries(countries);
  };
  useEffect(() => {
    fetchCountryData();
  }, []);

//Removes country from the UI if the user clicks the button, a new country takes it's place
  const removeCountry = (numericCode) => {
    const newCountry = countries.filter(
      (country) => country.numericCode !== numericCode
    );
    setCountries(newCountry);
  };
  return (
    <>
      <section className="grid">
        {countries.map((country) => {
          const {
            numericCode,
            name,
            nativeName,
            population,
            region,
            capital,
            flag,
            subRegion,
            topLevelDomain,
            languages,
          } = country;
          return (
            <article key={numericCode}>
              <div>
                <img src={flag} alt={name} />
                <div className="flags">
                  <h3 className="country-name">{name}</h3>
                  <h5>
                    Native Name: <span>{nativeName}</span>
                  </h5>
                  <h5>
                    Population: <span>{population}</span>
                  </h5>
                  <h5>
                    Region: <span>{region}</span>
                  </h5>
                  <h5>
                    Sub Region: <span>{subRegion}</span>
                  </h5>
                  <h5>
                    Capital: <span>{capital}</span>
                  </h5>
                  <h5>Top Level Domain: <span>{topLevelDomain}</span>
                  </h5>
                  <h5>
                    <Link to={`/countries/${name}`} className="btn-learn">
                      Learn More
                    </Link>
                  </h5>

                  <div className="buttons">
                    <button
                      className="btn"
                      onClick={() => removeCountry(numericCode)}
                    >
                      {" "}
                      Remove Country
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
