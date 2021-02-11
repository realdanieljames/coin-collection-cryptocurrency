
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
  const [allCoinINS, setAllCoinINS] = useState([])
  const [currencyType, setCurrencyType] = useState('usd')
  const [searchedCoins, setSearchedCoins] = useState([])



//=============================================================================================================//
//=============================================================================================================//
useEffect(()=>{

  getCryptoData()


  console.log(coinResults)
}, [])  


const getCryptoData = async(pageNumber) => {
  setLoading(true);
  
  //allows maximum 250 assets per use
  let data = await CoinGeckoClient.coins.all({per_page: coinsPerPage, page: pageNumber});

  //get all coin id's to use as search reference of available coins in database
  //gets all id's, name and symbols of all coins
  let allCoinsINS = await CoinGeckoClient.coins.list()

  let coinCardIds =[]

  allCoinsINS.data.map((value)=>{
    // console.log(value.id)
    coinCardIds.push(value.id)
    
  })

  setCoinResults(data.data)
  setAllCoinINS(allCoinsINS.data)

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
  getCryptoData(pageNumber)


}
//=============================================================================================================//
//=============================================================================================================//

  return (
    <div className="App">
      <div className="header">
        {/* <p className='header__logo'> COIN-CARD COLLECTION <br/>CRYPTOCURRENCY</p>  */}
        <p className='header__logo' > DIGI-CRYPTO <br/>COLLECTION</p> 

     
      </div>

        <CoinGeckoApi coinResults={coinResults} loading={loading} 
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          allCoinINS={allCoinINS}
          setCoinResults={setCoinResults}
          setSearchedCoins={setSearchedCoins}
          searchedCoins={searchedCoins}
        />
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
