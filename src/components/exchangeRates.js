const ExchangeRate = ({exchangedData}) => {
    return (
      <div className="exchange-rate">
        <h3>Exchange Rate</h3>
        <h4>{exchangedData.primaryCurrency} to {exchangedData.secondaryCurrency}</h4>
        <h3>{exchangedData.exchangeRate}</h3>
      </div>
    );
}
  
export default ExchangeRate;