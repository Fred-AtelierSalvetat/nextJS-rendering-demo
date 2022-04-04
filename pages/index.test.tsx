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
  it.todo("shall present a link to CSR page experience");
  it.todo("shall present a link to SSR page experience");
  it.todo("shall present a link to SSG page experience");
});
