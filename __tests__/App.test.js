import { render, screen } from '@testing-library/react';
import App from '../src/index';

test('renders hello react heading', () => {
  render(<App />);
  const heading = screen.getByText(/hello, react!/i);
  expect(heading).toBeInTheDocument();
});