import { NavLink } from "react-router-dom";

export const CountryCard = ({country}) =>{
  const {flags , name, population , region , capital} = country;
  return (
    <li className="country-card card">
      <div className="container-card bg-white-box">
        <img src={flags.svg} alt={flags.alt || "Flag"} />

        <div className = "countryInfo">
          <p className="countryInfo">{name.length > 10 ? name.slice(0,10) + "...": name}

          </p>
          <p>
            <span className="card-description">Population:</span>
            {population ? population.toLocaleString() : "N/A"}
          </p>
          <p>
            <span className="card-description">Region:</span> {region}
          </p>
          <p>
            <span className="card-description">Capital:</span> {capital ? capital : "N/A"}
          </p>
          <NavLink to={`/country/${name}`}>
            <button>Read More</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
