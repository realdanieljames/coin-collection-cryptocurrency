
import CoinGeckoApi from './coinGeckoAPI/coinGeckoData'
import Search from './search/Search'
import './App.css';



function App() {


  return (
    <div className="App">
      <div className="header">
        <p className='header__logo'> COIN-CARD COLLECTION <br/>CRYPTOCURRENCY</p> 
        <Search/>
      </div>

      <div>
        {/* <CoinGeckoApi /> */}
      </div>



    </div>
  );
}

export default App;
