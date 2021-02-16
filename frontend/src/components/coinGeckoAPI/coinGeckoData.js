import { useState, useEffect } from "react";
import "./coinGeckoData.css";
import Search from '../search/Search'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';



const CoinGeckoApi = ({coinResults, loading, setCoinResults, searchValue,setSearchValue, allCoinINS, setSearchedCoins, searchedCoins, coinsPerPage, pageNumber}) => {
    if (loading){
        return <div className="loader">Loading...</div>
    }

    //=============================================================================================================//
    //=============================================================================================================//

    const currencyObj = {
        style: "currency",
        currency: "usd",
        // currencyDisplay: 'code'
    }

console.log(coinResults)
console.log(searchedCoins)
console.log(searchValue)
console.log(searchValue.length)

//=============================================================================================================//
//=============================================================================================================//
// setCoinResults(coinResults)
    return (


        
        <div>
            <nav className="router__tabs">
                <div className="my__collection__tab">
                    My Collection
                </div>
                <div  className="my__watchlist__tab">
                    My Watchlist
                </div>
            
            <Search 
                coinResults={coinResults}
                setSearchValue={setSearchValue}
                searchValue={searchValue}
                allCoinINS={allCoinINS}
                setCoinResults={setCoinResults}
                setSearchedCoins={setSearchedCoins}
                searchedCoins={searchedCoins}
                />
            </nav>
             {/* </div> */}

            {searchValue.length === 0 ?        
                
                
                <div className="coin__info">
            {/* <div>  
            <div> */}
            {/* <div className="search__length"> showing Top {coinsPerPage} of Page {pageNumber} </div>  */}
                    {coinResults.map((coinInfo) => (
                    <div 
                    key={coinInfo.id} 
                    className="coin__card"        
                    >
                        {/* <div className="favorite__icon"> {FavoriteBorderIcon}</div> */}
                        <div className="card__rank">{"_"}Rank: #{coinInfo.market_data.market_cap_rank} {<br/>} <strong> ( {coinInfo.symbol.toUpperCase()} )</strong> </div>
                        <div className="card__marketcap"> MCap: {coinInfo.market_data.market_cap.usd.toLocaleString("en-US",currencyObj)}</div>
                        <div className="card__circulating__supply">Circulating Supply:{<br/>} {Number(coinInfo.market_data.circulating_supply).toLocaleString("en-US")} <strong> {coinInfo.symbol.toUpperCase()}</strong></div>
                        
                        {/* <div className="card__marketcap">MCap: {coinInfo.market_data.market_cap.usd.toLocaleString("en-US",currencyObj)}</div> */}
                        <img className="card__image" src={coinInfo.image.large} alt={coinInfo.name}/>
                        <div className="card__name">{coinInfo.name}</div>
                        <div className="current__price">  Price</div>
                            <div className="card__price"> USD:  {"  "}{coinInfo.market_data.current_price.usd.toLocaleString("en-US",currencyObj)} 
                            <hr/> 
                            BTC: ₿{coinInfo.market_data.current_price.btc}
                            <hr/> 
                            ETH: {coinInfo.market_data.current_price.eth}
                            <hr/>    
                            </div>      
                    
                    
                    </div>
                    

                    
                    ))}
                </div>
                    :
                    
                    <div>
        

            </div>

/* </div> */

            }   
            </div>

    )

}

export default CoinGeckoApi;
