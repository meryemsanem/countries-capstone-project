import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BiArrowBack } from 'react-icons/bi';

function Details() {
  const { name } = useParams();
  const { data } = useSelector((state) => state.country);
  const countryDetails = data.find((country) => country.name === name);
  const navigation = useNavigate();

  if (!countryDetails) {
    return (
      <div>
        <h2>Country not found</h2>
        <button
          type="button"
          onClick={() => navigation('/')}
          className="back-btn"
        >
          <BiArrowBack />
        </button>
      </div>
    );
  }

  return (
    <div className="details-container">
      <div className="details-country">
        <div className="background">
          <button
            type="button"
            onClick={() => navigation('/')}
            className="back-btn"
          >
            <BiArrowBack />
          </button>
        </div>
      </div>
      <div className="container">
        <img src={countryDetails.flag} alt={countryDetails.name} />
        <h2 className="country-name-details">{countryDetails.name}</h2>
        <h3 className="country-details-off">
          Official Name: {countryDetails.officialName}
        </h3>
        <h4 className="country-details">
          Capital City: {countryDetails.capital}
        </h4>
        <h4 className="country-details">
          Continent: {countryDetails.continent}
        </h4>
        <h4 className="country-details">
          Population: {countryDetails.population}
        </h4>
        <h4 className="country-details">Area: {countryDetails.area}</h4>
        <h4 className="country-details">Timezone: {countryDetails.timezone[0]} </h4>
      </div>
    </div>
  );
}

export default Details;
