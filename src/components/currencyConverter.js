import { useState } from "react";
import ExchangeRate from "./exchangeRates";

const CurrencyConverter = () => {

  const currencies = ['AVAX', 'BTC', 'ETH', 'TIME', 'USD'];
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('USD');
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('AVAX');

  console.log(chosenPrimaryCurrency);

    return (
      <div className="currency-converter">
        <h2>Currency Converter</h2>
        <div className="input">
          <table>
            <tbody>
              <tr>
                <td>Primary Currency</td>
                <td>
                  <input type='number' name="currency-amount-1" value={''} />
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
                  <input type='number' name="currency-amount-2" value={''} />
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
        </div>

        <ExchangeRate />
      </div>
    );
}
  
export default CurrencyConverter;