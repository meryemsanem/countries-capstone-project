/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Country({ country }) {
  const { name, flag } = country;
  return (
    <>
      <div className="countries-container">
        <NavLink
          to={`/details/${name}`}
          className="details-link"
          data-testid="details-link"
        >
          <div className="image">
            <img src={flag} alt="country" />
          </div>
          <h1 className="country-name">{name}</h1>
        </NavLink>
      </div>
    </>
  );
}

export default Country;

Country.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
  }).isRequired,
};
