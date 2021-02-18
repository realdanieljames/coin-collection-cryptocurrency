
import {useState, useEffect} from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CoinGeckoApi from './components/coinGeckoAPI/coinGeckoData'
import Navbar from './components/navbar/Navbar'
import Search from './components/search/Search'
import Pagination from './components/pagination/Pagination';
import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import MyCollection from './components/myCollection/MyCollection';
import MyWatchlist from './components/myWatchlist/MyWatchlist';
import Shop from './components/shop/Shop'


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

  // const { token, setToken } = useToken();



//=============================================================================================================//
//=============================================================================================================//
useEffect(()=>{

  getCryptoData()


  // console.log(coinResults)
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

//Change page
const paginate = async (pageNumber)=>{
  getCryptoData(pageNumber)


}
//=============================================================================================================//
//=============================================================================================================//

  return (
    // <div>



  




      



   <Router> 



        <Navbar/>

        <Route path="/collection" >
            <MyCollection />
          </Route>

          <Route path="/watchlist">
            <MyWatchlist />
          </Route>

          <Route path="/shop">
            <Shop />
          </Route>



          <Route path="/"> 
            <CoinGeckoApi 
              coinResults={coinResults} 
              loading={loading} 
              setSearchValue={setSearchValue}
              searchValue={searchValue}
              allCoinINS={allCoinINS}
              setCoinResults={setCoinResults}
              setSearchedCoins={setSearchedCoins}
              searchedCoins={searchedCoins}
              coinsPerPage={coinsPerPage}
              pageNumber={pageNumber}
            />

            <Pagination 
              coinsPerPage={coinsPerPage} 
              totalCoins={allCoinINS.length} 
              paginate={paginate}
              pageNumber={pageNumber}
            />
          </Route>
         

          

      </Router>

  
  );
}

export default App;
