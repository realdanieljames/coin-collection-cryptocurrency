
import {useState, useEffect} from 'react'
import CoinGeckoApi from './coinGeckoAPI/coinGeckoData'
import Search from './search/Search'
import PageNumbers from './pageNumbers/PageNumbers';

import './App.css';
const CoinGecko = require('coingecko-api');




//=============================================================================================================//
//=============================================================================================================//
const CoinGeckoClient = new CoinGecko();



function App() {

  const [loading, setLoading] = useState(false);
  const [coinResults, setCoinResults] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [coinsPerPage, setCoinsPerPage] = useState(100)



//=============================================================================================================//
//=============================================================================================================//
useEffect(()=>{
  const getCryptoData = async() => {
    setLoading(true);
    let data = await CoinGeckoClient.coins.all({'per_page': coinsPerPage, page: pageNumber});
    let allCoins = await CoinGeckoClient.coins.list();
    console.log(allCoins)
    setCoinResults(data.data)
    // setCoinResults(allCoins.data)
    setLoading(false)

  };
  getCryptoData()
}, [])  
// console.log(coinResults)
console.log(coinResults)




//=============================================================================================================//
//=============================================================================================================//

//=============================================================================================================//
//=============================================================================================================//

  return (
    <div className="App">
      <div className="header">
        <p className='header__logo'> COIN-CARD COLLECTION <br/>CRYPTOCURRENCY</p> 
      </div>


        <div>


        {/* <Search  coinResults={coinResults} setCoinResults={setCoinResults} loading={loading} searchValue={searchValue} setSearchValue={setSearchValue}/> */}
        </div>
<div>

</div>
        <CoinGeckoApi coinResults={coinResults} loading={loading} />
        {/* <SearchResults /> */}
        <PageNumbers pageNumber={pageNumber}/>




    </div>
  );
}

export default App;
