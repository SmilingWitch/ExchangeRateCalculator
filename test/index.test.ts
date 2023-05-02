import { expect } from "chai";
import Home  from "../src/pages/index";

describe("Home component", () => {
  it("should convert currency correctly", async () => {
    // Instantiate the Home component and manually set state.
    const home =  Home() as any;
    home.setAmount(100);
    home.setFromCurrency("usd");
    home.setToCurrency("inr");

    // Call the convertCurrency function.
    await home.convertCurrency();

    // Assert the results.
    const convertedAmount = home.getConvertedAmount();
    const exchangeRate = home.getExchangeRate();

    // These assertions are just examples; replace them with actual expected values.
    expect(convertedAmount).to.be.greaterThan(0);
    expect(exchangeRate).to.be.greaterThan(0);
  });
});