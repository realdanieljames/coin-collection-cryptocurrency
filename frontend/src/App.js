
import {useState, useEffect} from 'react'
import CoinGeckoApi from './coinGeckoAPI/coinGeckoData'
import Search from './search/Search'
import Pagination from './pagination/Pagination';

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
  const [allCoinINS, setAllCoinResults] = useState([])



//=============================================================================================================//
//=============================================================================================================//
useEffect(()=>{

  getCryptoData()


}, [])  

console.log(coinResults)

const getCryptoData = async() => {
  setLoading(true);
  let data = await CoinGeckoClient.coins.all({'per_page': coinsPerPage, page: pageNumber});
  let allCoinsINS = await CoinGeckoClient.coins.list()
  // console.log(allCoinsINS)
  setCoinResults(data.data)
  setAllCoinResults(allCoinsINS.data)
  setLoading(false)

};


//=============================================================================================================//
//=============================================================================================================//
//get current posts per page
// const indexOfLastPost = pageNumber *  coinsPerPage;
// const indexOfFirstPost = indexOfLastPost -  coinsPerPage;
// const currentCoins = coinResults.slice(indexOfFirstPost,indexOfLastPost)


//Change page
const paginate = async (pageNumber)=>{
  setLoading(true);
  let data = await CoinGeckoClient.coins.all({'per_page': coinsPerPage, page: pageNumber});
  setCoinResults(data.data)

console.log(pageNumber)
  setPageNumber(pageNumber)
  setLoading(false)

}
//=============================================================================================================//
//=============================================================================================================//

  return (
    <div className="App">
      <div className="header">
        <p className='header__logo'> COIN-CARD COLLECTION <br/>CRYPTOCURRENCY</p> 
        <Search setSearchValue={setSearchValue}  allCoinINS={allCoinINS}/> 
      </div>


        {/* <div> */}


        {/* <Search  coinResults={coinResults} setCoinResults={setCoinResults} loading={loading} searchValue={searchValue} setSearchValue={setSearchValue}/> */}
        {/* </div> */}
<div>

</div>
        <CoinGeckoApi coinResults={coinResults} loading={loading} />
        {/* <CoinGeckoApi coinResults={currentCoins} loading={loading} /> */}
        {/* <SearchResults /> */}
        <Pagination 
          coinsPerPage={coinsPerPage} 
          totalCoins={allCoinINS.length} 
          paginate={paginate}
          pageNumber={pageNumber}
        />




    </div>
  );
}

export default App;
