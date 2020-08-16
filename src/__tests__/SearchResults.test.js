import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<SearchResults />);

    expect(asFragment()).toMatchSnapshot();
  });
});
