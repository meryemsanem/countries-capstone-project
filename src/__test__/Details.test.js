import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Details from '../pages/Details';

const mockStore = configureMockStore([]);

const initialState = {
  country: {
    data: [
      {
        name: 'Test Country',
        flag: 'test-flag-url',
        officialName: 'Official Test Country',
        capital: 'Test Capital',
        continent: 'Test Continent',
        population: 'Test Population',
        area: 'Test Area',
        timezone: ['Test Timezone'],
      },
    ],
  },
};

describe('Details Component', () => {
  it('renders correctly', () => {
    const store = mockStore(initialState);

    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Details />
        </BrowserRouter>
      </Provider>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
