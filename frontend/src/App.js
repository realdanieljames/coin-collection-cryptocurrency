
import {useState} from 'react'
import CoinGeckoApi from './coinGeckoAPI/coinGeckoData'
import Search from './search/Search'
import './App.css';
import SearchResults from './search/SearchResults';



function App() {



  return (
    <div className="App">
      <div className="header">
        <p className='header__logo'> COIN-CARD COLLECTION <br/>CRYPTOCURRENCY</p> 
      </div>


        <Search />
        {/* <SearchResults /> */}
        {/* <CoinGeckoApi /> */}




    </div>
  );
}

export default App;
