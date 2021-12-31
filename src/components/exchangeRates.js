const ExchangeRate = ({exchangeRate, chosenPrimaryCurrency, chosenSecondaryCurrency}) => {
    return (
      <div className="exchange-rate">
        <h3>Exchange Rate</h3>
        <h4>{chosenPrimaryCurrency} to {chosenSecondaryCurrency}</h4>
        <h3>{exchangeRate}</h3>
      </div>
    );
}
  
export default ExchangeRate;