import { useState, useEffect } from "react";
import "./coinGeckoData.css";
import Search from '../search/Search'




const CoinGeckoApi = ({coinResults, loading, setCoinResults, searchValue,setSearchValue, allCoinINS, setSearchedCoins, searchedCoins}) => {
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

            <Search 
                coinResults={coinResults}
                setSearchValue={setSearchValue}
                searchValue={searchValue}
                allCoinINS={allCoinINS}
                setCoinResults={setCoinResults}
                setSearchedCoins={setSearchedCoins}
                searchedCoins={searchedCoins}
                />
             {/* </div> */}

            {searchValue.length === 0 ?
              
                
                
                <div className="coin__info">
                
                {coinResults.map((coinInfo) => (
                    
                    <div 
                    key={coinInfo.id} 
                    className="coin__card"        
                    >
                <div className="card__rank">{"_ "}Rank: #{coinInfo.market_data.market_cap_rank} {<br/>} <strong> ( {coinInfo.symbol.toUpperCase()} )</strong> </div>
                <div className="card__marketcap"> MCap: {coinInfo.market_data.market_cap.usd.toLocaleString("en-US",currencyObj)}</div>
                <div className="card__circulating__supply">Circulating Supply:{<br/>} {Number(coinInfo.market_data.circulating_supply).toLocaleString("en-US")} <strong> {coinInfo.symbol.toUpperCase()}</strong></div>
                
                <div className="card__marketcap">MCap: {coinInfo.market_data.market_cap.usd.toLocaleString("en-US",currencyObj)}</div>
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
                
                
                {/* <div className="card__rank">{"_ "}Rank: #{coinInfo.market_cap_rank} {<br/>} _<strong> ( {coinInfo.symbol.toUpperCase()} )</strong> </div>
                <div className="card__marketcap">MCap: {coinInfo.market_cap}</div>
                <div className="card__circulating__supply">Circulating Supply:{<br/>} {Number(coinInfo.circulating_supply).toLocaleString("en-US")} <strong> {coinInfo.symbol.toUpperCase()}</strong></div>
                
                <div className="card__marketcap">MCap: {coinInfo.market_cap}</div>
                <img className="card__image" src={coinInfo.image} alt={coinInfo.name}/>
                <div className="card__name">{coinInfo.name}</div>
                <div className="current__price">  Price</div>
                <div className="card__price"> USD:  {"  "}{coinInfo.current_price} 
                <hr/> 
                {/* BTC: ₿{coinInfo.current_price.btc} */}
                {/* <hr/>  */}
                {/* ETH: {coinInfo.current_price.eth} */}
                {/* <hr/>  */}
                
                {/* </div>   */}
                
                
                
                </div>
                
                
                
                
                ))}
                </div>
                :

            <div>
        
            </div>
            }   
                </div>
// </div>
    );

};

export default CoinGeckoApi;
