import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {LogIn} from './LogIn';

test('renders learn react link', () => {
  render(<LogIn />);
  const linkElement = screen.getByText(/автор/i);
  expect(linkElement).toBeInTheDocument();
});
