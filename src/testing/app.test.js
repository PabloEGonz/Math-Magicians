import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../components/Home';
import Calculator from '../components/Calculator';
import Quote from '../components/quote';

describe('Test if the 3 sections render', () => {
  test('Renders Calculator', () => {
    render(<Calculator />);
    expect(screen.getByText(/math/)).toBeInTheDocument();
  });

  test('Renders Home page', () => {
    render(<Home />);
    expect(screen.getByText(/Welcome/)).toBeInTheDocument();
  });
  test('Renders Home page', () => {
    render(<Quote />);
    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });
});
