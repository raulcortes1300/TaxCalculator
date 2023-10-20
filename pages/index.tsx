import { TaxProvider } from "../context/TaxContext";

import TaxCalculator from "../components/TaxCalculator/TaxCalculator.component";

export default function Home() {
  return (
    <TaxProvider>
      <TaxCalculator />
    </TaxProvider>
  );
}
