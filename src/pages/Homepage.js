import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaSortAlphaDown } from 'react-icons/fa';
import { fetchCountries } from '../redux/countries/countriesSlice';
import Country from '../components/Country';
import './styles/Homepage.css';

function Countries() {
  const { data, loading, error } = useSelector((state) => state.country);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [sortedCountries, setSortedCountries] = useState([]);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const searchCountries = data.filter((country) => country.name.toLowerCase()
    .includes(search.toLowerCase()));

  useEffect(() => {
    const sortedData = [...searchCountries].sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();
      return sortOrder === 'asc'
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
    setSortedCountries(sortedData);
  }, [searchCountries, sortOrder]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  if (loading) {
    return (
      <div>
        <h2 className="loading">Loading...</h2>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <h2 className="error">{error}</h2>
      </div>
    );
  }
  return (
    <>
      <div className="main-container">
        <div className="countries">
          <div className="search">
            <input
              type="text"
              value={search}
              placeholder="Search Country"
              onChange={handleSearch}
              className="search-area"
            />
            <button type="submit" onClick={handleSort}>
              Sort
              {' '}
              {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
              <FaSortAlphaDown className="sort-icon" />
            </button>
          </div>
        </div>
        <div className="countries-container">
          {sortedCountries.map((country) => (
            <Country key={country.countryID} country={country} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Countries;
