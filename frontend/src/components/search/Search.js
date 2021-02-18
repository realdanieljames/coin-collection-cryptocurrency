import {useEffect, useState} from 'react'
import './Search.css'
import CoinGeckoApi from '../coinGeckoAPI/coinGeckoData'
const CoinGecko = require('coingecko-api');






// func()
const Search =  ({ searchValue, setSearchValue, setCoinResults, coinResults, loading, allCoinINS, currencyType, setCurrencyType, setSearchedCoins, searchedCoins}) => {


const idData = []
const nameData = []
const symbolData = []

{/* =============================================================================================================*/}
{/* =============================================================================================================*/}
  


    const handleSearchInput =  async(inputValue)=>{
    

      setSearchValue(inputValue)
      // setCoinResults(coinResults)
      // console.log(inputValue)


      // const getEach =
        allCoinINS.map(value =>{
    
        idData.push(value.id)
        // nameData.push(value.name)
        // symbolData.push(value.symbol)
        

        })
{/* =============================================================================================================*/}
{/* =============================================================================================================*/}
  

        const filteredSearch = idData.filter(value => value.includes(inputValue))
        // console.log(filteredSearch)
        const CoinGeckoClient = new CoinGecko();

        let market =  await CoinGeckoClient.coins.markets({ vs_currency: currencyType, ids: filteredSearch})
        // console.log(market)

        
        const filteredSearchArray =[]
        
      market.data.map((value)=>{

        if(value.market_cap === null){
          let acceptedCoin = value
          
    
          return acceptedCoin

        }

            
            let coinCard = {
              id: value.id,
              name: value.name,
              symbol: value.symbol,
              market_cap_rank:value.market_cap_rank,
              market_cap: value.market_cap,
              circulating_supply: value.circulating_supply,
              image: value.image,
              current_price: value.current_price

            }
            
            
            filteredSearchArray.push(coinCard)

          
        })
        // console.log(filteredSearchArray)
        setSearchedCoins(filteredSearchArray)
        // setCoinResults(filteredSearchArray)
        
      }
  
    //  setCoinResults(coinResults)
      //  console.log(acceptedCoin)
      // }
      // )/


    

      const searchBar = 
      // <div className="search__element">
      <nav className="search__element">

      <input 
          className="search__input"
          type="text"
          placeholder=" Search Cryptocurrencies"
          value={searchValue}
          onChange={(e)=> handleSearchInput(e.target.value)}
          />
      {/* <button 
        className="search__button"
        // onClick={handleSearchButton}
        >Search
      </button>     */}
      {/* // </div> */}

 </nav>
    

    const currencyObj = {
      style: "currency",
      currency: "usd",
      // currencyDisplay: 'code'
  }

        const searchIdentifiers =  
        

        <div className="coin__info">

        {searchedCoins.filter(coinInfo =>

          coinInfo.id.includes(searchValue) ||
            coinInfo.id.toUpperCase().includes(searchValue)
          || 
          coinInfo.symbol.includes(searchValue) || coinInfo.symbol.toUpperCase().includes(searchValue)
          ||
          coinInfo.name.includes(searchValue) || coinInfo.name.toUpperCase().includes(searchValue))
          .map(filteredCoin=>(
            <div 
            key={filteredCoin.id} 
            className="coin__card"        
        >
            {/* <div className="card__rank">Rank: #{filteredCoin.market_data.market_cap_rank} {<br/>}( {filteredCoin.symbol.toUpperCase()} ) </div>
            <div className="card__marketcap">{filteredCoin.market_data.market_cap.usd.toLocaleString("en-US")}</div>
            <img className="card__image" src={filteredCoin.image.large} alt={filteredCoin.name}/>
            <div className="card__name">{filteredCoin.name}</div>
            <div className="card__price"> ${filteredCoin.market_data.current_price.usd}</div> */}

                    <div className="card__rank">{"_ "}Rank: #{filteredCoin.market_cap_rank} {<br/>} _<strong> ( {filteredCoin.symbol.toUpperCase()} )</strong> </div>
                    <div className="card__marketcap">MCap: {filteredCoin.market_cap.toLocaleString("en-US",currencyObj )}</div>
                    <div className="card__circulating__supply">Circulating Supply: {<br/>} {Number(filteredCoin.circulating_supply).toLocaleString("en-US")} <strong> {filteredCoin.symbol.toUpperCase()}</strong></div>
                    

                    <img className="card__image" src={filteredCoin.image} alt={filteredCoin.name}/>
                    <div className="card__name">{filteredCoin.name}</div>
                    <div className="current__price">  Price</div>
                    <div className="card__price"> USD:  {"  "}{filteredCoin.current_price} 
                    {/* <hr/>  */}
                    {/* BTC: ₿{filteredCoin.current_price.btc} */}
                    {/* <hr/>  */}
                    {/* ETH: {filteredCoin.current_price.eth} */}
                    {/* <hr/>  */}

                    </div>
        </div>


          ))
        
        }
          </div>
          



    return (


        <div>
          {searchBar}

            
                  <div>
                  {searchValue.length !== 0 ?
                      <div>
                        <div className="search__length">
                          {searchedCoins.length} matching Results
                        </div>
                      {searchIdentifiers}
                      </div>
                    :
                    <div>
                    </div>
                  }
                  </div>  
      </div>  

      
    )
    }

export default Search;