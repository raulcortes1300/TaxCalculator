import { render } from "@testing-library/react";
import { TaxProvider } from "../../context/TaxContext";
import AnnualIncomeInput from "./AnnualIncomeInput.component";

describe("AnnualIncomeInput", () => {
  it("renders the component", () => {
    const { getByLabelText } = render(
      <TaxProvider>
        <AnnualIncomeInput />
      </TaxProvider>
    );

    const taxResult = getByLabelText("Annual Income:");
    expect(taxResult).toBeInTheDocument();
  });
});
