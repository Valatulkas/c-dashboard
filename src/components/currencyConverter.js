import ExchangeRate from "./exchangeRates";

const CurrencyConverter = () => {

  const currencies = ['AVAX', 'BTC', 'ETH', 'TIME', 'USD']

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
                  <select className="currency-options" value={''} name="currency-option-1">
                    {currencies.map( i => (<option>{i}</option>))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Secondary Currency</td>
                <td>
                  <input type='number' name="currency-amount-2" value={''} />
                </td>
                <td>
                  <select className="currency-options" value={''} name="currency-option-2">
                    {currencies.map( i => (<option>{i}</option>))}
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