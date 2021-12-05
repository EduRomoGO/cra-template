import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders banner", () => {
  render(<App />);
  const banner = screen.getByRole("banner");

  expect(banner).toBeInTheDocument();
});
