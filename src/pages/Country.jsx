import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import { CountryCard } from "../components/Layout/CountryCard";
import { Loader } from "../components/UI/Loader";

export const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryData();
        setCountries(res.data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    });
  }, []);

  if (isPending) return <Loader />;

  return (
    <section className="country-section container">
      <ul className="grid grid-four-cols">
        {countries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={curCountry.name || index} />;
        })}
      </ul>
    </section>
  );
};