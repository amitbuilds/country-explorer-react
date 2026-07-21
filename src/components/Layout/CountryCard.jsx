import { NavLink } from "react-router-dom";

export const CountryCard = ({country}) =>{
  const {flags , name, population , region , capital} = country;
  return (
    <li className="country-card card">
      <div className="container-card">
        <div className="flag-container">
          <img src={flags.svg} alt={flags.alt || "Flag"} />
        </div>

        <div className="countryInfo">
          <p className="countryInfo-title">
            {name.length > 10 ? name.slice(0,10) + "...": name}
          </p>
          <p>
            <span className="card-description">Population:</span>
            <span className="card-value">{population ? population.toLocaleString() : "N/A"}</span>
          </p>
          <p>
            <span className="card-description">Region:</span> 
            <span className="card-value">{region}</span>
          </p>
          <p>
            <span className="card-description">Capital:</span> 
            <span className="card-value">{capital ? capital : "N/A"}</span>
          </p>
          <NavLink to={`/country/${name}`}>
            <button className="read-more-btn">Read More</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};
