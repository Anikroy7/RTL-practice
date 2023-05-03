import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Button has a initial color red", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /blue/i });
  expect(button).toHaveStyle("background-color:red");
});

test("button has a initial text change to blue", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /blue/i });
  expect(button).toHaveTextContent("Change To Blue");
});

test("button background will chaneged when it clicked", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /blue/i });
  fireEvent.click(button);
  expect(button).toHaveStyle("background-color:blue");
});

test("buttton text will changed when it clicked", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /blue/i });
  fireEvent.click(button);
  expect(button).toHaveTextContent("Change To Red");
});
