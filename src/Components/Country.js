import React, { useState, useEffect } from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom/cjs/react-dom.development";
import { Link, useParams } from "react-router-dom";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        `https://restcountries.eu/rest/v2/name/${name}`()
      );
      const country = await response.json();
      setCountry(country);
    };

    fetchCountryData()
  }, []);

  <h1>Country Data</h1>
  return (
    <>
      <section className="country">
      <Link to="/" className="back-btn-light">
        <i className="fas.fa.arrow-left"></i>
        Back Home
      </Link>
        {country.map((c) => {
          const {
            numericCode,
            flag,
            name,
            nativeName,
            population,
            region,
            subregion,
            capital,
            topLevelDomain,
            currencies,
            languages,
            borders,
          } = c
          return (
            <article key={numericCode}>
              <div className="country-inner">
              <div className="flag">
                <img src={flag} alt={name} />
              </div>
              <div className="country-details">
                <div>
                  <h2>{name}</h2>
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
                    Sub Region: <span>{subregion}</span>
                  </h5>
                  <h5>
                    Capital: <span>{capital}</span>
                  </h5>
                </div>
                <div>
                  <h5>
                    Top Level Domain: <span>{topLevelDomain}</span>
                  </h5>
                  <h5>
                    Currencies: <span>{currencies}</span>
                  </h5>
                  <h5>
                    Languages: <span>{languages}</span>
                  </h5>
                </div>
              </div>
              </div>
              <div className="borders">
                <h3>Border Countries:</h3>
                {borders.map((border) => {
                  return (
                    <ul key={border}>
                      <li>{border}</li>
                    </ul>
                  );
                })}
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Country;
