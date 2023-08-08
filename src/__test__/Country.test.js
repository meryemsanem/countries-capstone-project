import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Country from '../components/Country';

describe('Country Component', () => {
  const mockCountry = {
    name: 'Test Country',
    flag: 'test-flag-url',
  };

  it('renders correctly', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <Country country={mockCountry} />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
