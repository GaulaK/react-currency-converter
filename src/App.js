import { useState } from "react";
import "./App.css";
import rates from "./assets/data/Rates";

function App() {
  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const [firstCurrency, setFirstCurrency] = useState("EUR");
  const [secondCurrency, setSecondCurrency] = useState("EUR");

  const handleFirstValueChange = (event) => {
    const value = event.target.value;
    setFirstValue(value);
    setSecondValue(
      ((value * rates[secondCurrency]) / rates[firstCurrency]).toFixed(2)
    );
  };
  const handleSecondValueChange = (event) => {
    const value = event.target.value;
    setSecondValue(value);
    setFirstValue(
      ((value * rates[firstCurrency]) / rates[secondCurrency]).toFixed(2)
    );
  };

  const handleFirstCurrencyChange = (event) => {
    const value = event.target.value;
    setFirstCurrency(value);
  };

  const handleSecondCurrencyChange = (event) => {
    const value = event.target.value;
    setSecondCurrency(value);
  };

  const tabRates = Object.keys(rates);

  console.log(rates);
  return (
    <div className="App">
      <div className="container">
        <h1>💵 Converter 💵</h1>
        <div>
          <input
            type="text"
            name="firstValue"
            value={firstValue}
            onChange={handleFirstValueChange}
          ></input>
          <select value={firstCurrency} onChange={handleFirstCurrencyChange}>
            {tabRates.map((rate, index) => {
              return (
                <option key={index} value={rate}>
                  {rate}
                </option>
              );
            })}
          </select>
        </div>
        <div>
          <input
            type="text"
            name="secondValue"
            value={secondValue}
            onChange={handleSecondValueChange}
          ></input>
          <select value={secondCurrency} onChange={handleSecondCurrencyChange}>
            {tabRates.map((rate, index) => {
              return (
                <option key={index} value={rate}>
                  {rate}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default App;
