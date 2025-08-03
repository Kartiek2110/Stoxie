import React from "react";
import { render, screen, describe, it, expect } from "@testing-library/react";
import Hero from "../src/Landing/Home/Hero";

describe("Hero component", () => {
  it("renders the hero section", () => {
    render(<Hero />);
    const heroElement = screen.getByText(/Invest in everything/i);
    expect(heroElement).toBeInTheDocument();
  });
});
