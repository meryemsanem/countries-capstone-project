import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const url = 'https://restcountries.com/v3.1/all';

const initialState = {
  countries: [],
  loading: false,
  error: '',
};

const getData = (data) =>
  data.map((countries) => ({
    countryID: uuidv4(),
    name: country.name.common,
    officialName: country.name.official,
    capital: country.capital,
    language: country.languages,
    region: country.region,
    currency: country.currencies,
    timezone: country.timezones,
    continent: country.continents,
    flag: country.flags.png,
    area: country.area,
    population: country.population,
  }));

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    try {
      const res = await axios.get(url);
      const { data } = res;
      return getData(data);
    } catch (error) {
      throw Error(error);
    }
  }
);

export const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => ({
        ...state,
        loading: true,
      }))
      .addCase(fetchCountries.fulfilled, (state, action) => ({
        ...state,
        loading: false,
        countries: action.payload,
      }))
      .addCase(fetchCountries.rejected, (state, action) => ({
        ...state,
        loading: false,
        error: action.error.message,
      }));
  },
});

export default countriesSlice.reducer;
