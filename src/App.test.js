import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  console.log("666666")
  console.log(screen.debug());
  // const linkElement = screen.getByText("learn react");
  // console.log(linkElement);
  // expect(linkElement).toBeInTheDocument();
});
