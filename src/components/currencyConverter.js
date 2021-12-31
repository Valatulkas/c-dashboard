import { useState } from "react";
import ExchangeRate from "./exchangeRates";
import axios from "axios";

const CurrencyConverter = () => {

  const currencies = ['AVAX', 'BTC', 'ETH', 'TIME', 'USD', 'XRP'];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('USD');
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('AVAX');
  const [amount, setAmount] = useState(1);
  const [result, setResult] = useState(0);
  const [exchangedData, setExchangedData] = useState({
    primaryCurrency: 'USD',
    secondaryCurrency: 'AVAX',
    exchangeRate: 0
  })

  console.log(amount);

  const convert = () => {
    const options = {
      method: 'GET',
      url: 'http://localhost:8000/convert',
      params: {to_currency: chosenSecondaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', from_currency: chosenPrimaryCurrency},
    };

    axios.request(options).then((response) => {
      console.log(response.data)
      setResult(response.data * amount)
      setExchangedData({
        primaryCurrency: chosenPrimaryCurrency,
        secondaryCurrency: chosenSecondaryCurrency,
        exchangeRate: response.data
      })
    }).catch((error) => {
      console.error(error);
    });
  }

    return (
      <div className="currency-converter">
        <h2>Converter</h2>
        <div className="input">
          <table>
            <tbody>
              <tr>
                <td>From</td>
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
                <td>To</td>
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
          exchangedData = {exchangedData}
        />
      </div>
    );
}
  
export default CurrencyConverter;