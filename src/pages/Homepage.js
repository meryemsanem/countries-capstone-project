import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../redux/countries/countriesSlice';
import Country from '../components/Country';

function Countries() {
  const { data, loading, error } = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const searchCountries = data.filter((country) => 
    country.name.toLowerCase().includes(search.toLowerCase()));

  if (loading) {
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h2>{error}</h2>
      </div>
    );
  }
  return (
    <>
      <div className="container">
        <div className="countries">
          <div className="search">
            <input
              type="text"
              value={search}
              placeholder="Search Country"
              onChange={handleSearch}
              className="search-area"
            />
          </div>
        </div>
        <div className="countries-container">
          {searchCountries.map((country) => (
            <Country key={country.countryID} country={country} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Countries;
