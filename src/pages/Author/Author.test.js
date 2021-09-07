import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import {Author} from './Author';

test('renders learn react link', () => {
  render(<Author />);
  const linkElement = screen.getByText(/автор/i);
  expect(linkElement).toBeInTheDocument();
});
