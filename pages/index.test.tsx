import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

import { useDurationsContext } from "../state/DurationsProvider";
jest.mock("../state/DurationsProvider");

describe("Home", () => {
  beforeAll(() => {
    useDurationsContext.mockReturnValue({
      csr: [12],
      ssr: [13],
      ssg: [14],
    });
  });

  it("renders the homepage", () => {
    render(<Home />);

    // const heading = screen.getByRole("heading", {
    //   name: /welcome to next\.js!/i,
    // });
    // expect(heading).toBeInTheDocument();
  });
  it.todo("shall display duration of each rendering as initialized in context");
  it("shall present a first link to CSR page experience", () => {
    render(<Home />);
    expect(screen.getAllByRole("link")[0]).toHaveAttribute("href", "/CSR");
  });
  it("shall present a second link to SSR page experience", () => {
    render(<Home />);
    expect(screen.getAllByRole("link")[1]).toHaveAttribute("href", "/SSR");
  });

  it("shall present a third link to SSG page experience", () => {
    render(<Home />);
    expect(screen.getAllByRole("link")[2]).toHaveAttribute("href", "/SSG");
  });
});
