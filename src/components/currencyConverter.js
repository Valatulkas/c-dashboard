import { useState } from "react";
import ExchangeRate from "./exchangeRates";
import axios from "axios";

const CurrencyConverter = () => {

  const currencies = ['AVAX', 'BTC', 'ETH', 'TIME', 'USD'];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('USD');
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('AVAX');
  const [amount, setAmount] = useState(1);
  const [exchangeRate, setExchangeRate] = useState(1);
  const [result, setResult] = useState(0);

  console.log(amount);

  const convert = () => {
    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {to_currency: chosenSecondaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', from_currency: chosenPrimaryCurrency},
      headers: {
        'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
      }
    };

    axios.request(options).then((response) => {
      console.log(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
      setExchangeRate(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
      setResult(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] * amount);
    }).catch((error) => {
      console.error(error);
    });
  }

    return (
      <div className="currency-converter">
        <h2>Currency Converter</h2>
        <div className="input">
          <table>
            <tbody>
              <tr>
                <td>Primary Currency</td>
                <td>
                  <input type='number' name="currency-amount-1" value={amount} 
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </td>
                <td>
                  <select className="currency-options" value={chosenPrimaryCurrency} name="currency-option-1"
                    onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                  >
                    {currencies.map( (i, _index) => (<option key={_index}>{i}</option>))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Secondary Currency</td>
                <td>
                  <input type='number' name="currency-amount-2" value={result} disabled/>
                </td>
                <td>
                  <select className="currency-options" value={chosenSecondaryCurrency} name="currency-option-2"
                    onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                  >
                    {currencies.map( (i, _index) => (<option key={_index}>{i}</option>))}
                  </select>
                </td>
              </tr>
            </tbody>
          </table>

          <button className="convert" onClick={convert}>Convert</button>
        </div>

        <ExchangeRate 
          exchangeRate = {exchangeRate}
          chosenPrimaryCurrency = {chosenPrimaryCurrency}
          chosenSecondaryCurrency = {chosenSecondaryCurrency}
        />
      </div>
    );
}
  
export default CurrencyConverter;