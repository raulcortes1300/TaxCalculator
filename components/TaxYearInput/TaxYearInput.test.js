import { render } from "@testing-library/react";
import { TaxProvider } from "../../context/TaxContext";
import TaxYearInput from "../TaxYearInput/TaxYearInput.component";

describe("TaxYearInput", () => {
  it("renders the component", () => {
    const { getByLabelText } = render(
      <TaxProvider>
        <TaxYearInput />
      </TaxProvider>
    );

    const taxYearInput = getByLabelText("Tax Year:");
    expect(taxYearInput).toBeInTheDocument();
  });
});
