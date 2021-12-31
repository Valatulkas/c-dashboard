import CurrencyConverter from "./components/currencyConverter";
import NewsFeed from "./components/newsFeed";


const App = () => {
  return (
    <div className="app">
        <NewsFeed />
        <CurrencyConverter />
    </div>
  );
}

export default App;