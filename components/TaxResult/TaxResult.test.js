import { render } from "@testing-library/react";
import { TaxProvider } from "../../context/TaxContext";
import TaxResult from "./TaxResult.component";

describe("TaxResult", () => {
  it("renders the component", () => {
    const { getByText } = render(
      <TaxProvider>
        <TaxResult />
      </TaxProvider>
    );

    const taxResult = getByText("Results:");
    expect(taxResult).toBeInTheDocument();
  });
});
