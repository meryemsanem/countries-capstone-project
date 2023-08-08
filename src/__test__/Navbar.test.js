import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import Navbar from '../components/Navbar';

describe('Navbar Component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Navbar />);
    expect(asFragment()).toMatchSnapshot();
  });
});
