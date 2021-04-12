import React, { useState, useEffect } from "react";
import { Link,} from "react-router-dom";

const Country = () => {
  const [country, setCountry] = useState([]);
  

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(
        "./countriesAll.json"()
      );
      const country = await response.json();
      setCountry(country);
    };

    fetchCountryData();
  }, []);

  return (
    <>
      <Link to="/" className="back-btn-light">
        <i className="fas.fa.arrow-left"></i>
        Back Home
      </Link>

      <section className="country">
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
          } = c;
          return (
            <article key={numericCode}>
              <div className="flag">
                <img src={flag} alt={name[0].name} />
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
                    languages: <span>{languages}</span>
                  </h5>
                </div>
                <h3>Border Countries: {borders}</h3>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Country;
