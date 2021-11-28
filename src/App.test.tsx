import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const banner = screen.getByRole("banner");

  expect(banner).toBeInTheDocument();
});
