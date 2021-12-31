import CurrencyConverter from "./components/currencyConverter";
import NewsFeed from "./components/newsFeed";


const App = () => {
  return (
    <div className="app">
        <h1>DeFi Dashboard</h1>
        <div className="app-wrapper">
          <CurrencyConverter />
          <NewsFeed />
        </div>
    </div>
  );
}

export default App;