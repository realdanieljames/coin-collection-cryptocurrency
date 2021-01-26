import {useEffect, useState} from 'react'
import './Search.css'
import CoinGeckoApi from '../coinGeckoAPI/coinGeckoData'
import SearchResults from './SearchResults'
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();



// func()
const Search = ({coinResults, loading, searchValue, setSearchValue, setCoinResults}) => {
    // const [searchValue, setSearchValue] = useState('')
    // const[coinResults, setCoinResults] = useState([])


    const handleSearchInput = async (inputValue)=>{
      setSearchValue(inputValue)
      // let data =  await CoinGeckoClient.coins.all();
      let allCoins = await CoinGeckoClient.coins.list();
      setCoinResults(allCoins.data)
    }

    // return (
    //   <div className="search__element">
    //         <input 
    //             className="search__input"
    //             type="text"
    //             placeholder="Search cryptocurrencies"
    //             value={searchValue}
    //             onChange={(e)=> handleSearchInput(e.target.value)}
    //             />
    //         <button 
    //           className="search__button"
    //           // onClick={handleSearchButton}
    //           >Search
          
    //         </button>     
    //         <SearchResults handleSearchInput={handleSearchInput}/>
    //         </div>
    // )

        
    // }
      const searchBar = 
      <div className="search__element">
      <input 
          className="search__input"
          type="text"
          placeholder="Search cryptocurrencies"
          value={searchValue}
          onChange={(e)=> handleSearchInput(e.target.value)}
          />
      <button 
        className="search__button"
        // onClick={handleSearchButton}
        >Search
      </button>    
      </div>

    

        const searchIdentifiers =  
        <div className="coin__info">

        {coinResults.filter(coinInfo =>
          coinInfo.id.includes(searchValue) ||  coinInfo.id.toUpperCase().includes(searchValue)
          || coinInfo.symbol.includes(searchValue) || coinInfo.symbol.toUpperCase().includes(searchValue)
          || coinInfo.name.includes(searchValue) || coinInfo.name.toUpperCase().includes(searchValue))
          .map(filteredCoin=>(
            <div 
            key={filteredCoin.id} 
            className="coin__card"        
        >
            <div className="card__rank">Rank: #{filteredCoin.market_data.market_cap_rank} {<br/>}( {filteredCoin.symbol.toUpperCase()} ) </div>
            {/* <div className="card__marketcap">{filteredCoin.market_data.market_cap.usd.toLocaleString("en-US",currencyObj)}</div> */}
            <img className="card__image" src={filteredCoin.image.large} alt={filteredCoin.name}/>
            <div className="card__name">{filteredCoin.name}</div>
            <div className="card__price"> ${filteredCoin.market_data.current_price.usd}</div>
        </div>


          ))
        
        }
          </div>
          



  

  // const handleSearchButton =(e)=>{
  //   console.log(searchValue)


  // }

    return (

        //<div className="search__element"> */}
        //     <input 
        //         className="search__input"
        //         type="text"
        //         placeholder="Search cryptocurrencies"
        //         value={searchValue}
        //         onChange={(e)=> handleSearchInput(e.target.value)}
        //         />
        //     <button 
        //       className="search__button"
        //       onClick={handleSearchButton}
        //       >Search
        //     </button>     
        <div>
          {searchBar}

            {/* <div className="coin__info"> */}
            {searchValue.length === 0? 
                  <div>
                    <CoinGeckoApi/>
                  </div> 
                  :
                  <div>
                    {searchIdentifiers}
                  </div>
          }
          </div>
  
      // </div>  

      
    )
    }

export default Search;