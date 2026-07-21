import { useEffect, useState, useTransition } from "react";
import { useParams, NavLink } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import { Loader } from "../UI/Loader";

export const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryIndData(params.id);
        if (res.status === 200 && res.data.length > 0) {
          setCountry(res.data[0]);
        }
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    });
  }, [params.id]);

  if (isPending) return <Loader />;

  return (
    <section className="card-country-details container">
      {country ? (
        <div className="container-card grid grid-two-cols">
          <div className="country-image">
            <img
              src={country.flags.svg}
              alt={country.flags.alt || "Country flag"}
              className="flag"
            />
          </div>
          <div className="country-content">
            <p className="card-title"> {country.name} </p>

            <div className="infoContainer">
              <p>
                <span className="card-description"> Native Name: </span>
                {country.nativeName || country.name}
              </p>
              <p>
                <span className="card-description"> Population: </span>
                {country.population ? country.population.toLocaleString() : "N/A"}
              </p>
              <p>
                <span className="card-description"> Region: </span>
                {country.region}
              </p>
              <p>
                <span className="card-description"> Sub Region: </span>
                {country.subregion || "N/A"}
              </p>
              <p>
                <span className="card-description"> Capital: </span>
                {country.capital ? country.capital : "N/A"}
              </p>
              <p>
                <span className="card-description"> Top Level Domain: </span>
                {country.topLevelDomain && country.topLevelDomain.length > 0 ? country.topLevelDomain[0] : "N/A"}
              </p>
              <p>
                <span className="card-description"> Currencies: </span>
                {country.currencies && country.currencies.length > 0
                  ? country.currencies.map((cur) => cur.name).join(", ")
                  : "N/A"}
              </p>
              <p>
                <span className="card-description"> Languages: </span>
                {country.languages && country.languages.length > 0
                  ? country.languages.map((lang) => lang.name).join(", ")
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p className="error-message">Country details not found.</p>
      )}
      <div className="country-card-backBtn">
        <NavLink to="/country" className="backBtn">
          <button>Go Back</button>
        </NavLink>
      </div>
    </section>
  );
};