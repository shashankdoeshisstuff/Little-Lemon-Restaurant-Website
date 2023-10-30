import { fireEvent, render, screen } from '@testing-library/react';
import Main from './components/Global/Main';
import BookingForm from './components/Pages/BookingForm';

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
 */

test('test for initializeTimes initial expected value', () => {
  render(<BookingForm/>);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const initialTime = screen.getByRole('select');
  fireEvent.change(initailTime, { target: { value: "16:00" }})


})