import { useState, useEffect } from "react";
import "./coinGeckoData.css";




const CoinGeckoApi = ({coinResults, loading}) => {
    if (loading){
        return <div className="loader">Loading...</div>
    }
    console.log(coinResults)
    //=============================================================================================================//
    //=============================================================================================================//


    const currencyObj = {
        style: "currency",
        currency: "usd",
        currencyDisplay: 'code'
    }
    
    
    




//=============================================================================================================//
//=============================================================================================================//
    return (

        // resultRender

        
        <div className="coin__info">

        {coinResults.map((coinInfo) => (

                <div 
                    key={coinInfo.id} 
                    className="coin__card"        
                >
                    <div className="card__rank">Rank: #{coinInfo.market_data.market_cap_rank} {<br/>} ( {coinInfo.symbol.toUpperCase()} ) </div>
                    <div className="card__marketcap">MCap: {coinInfo.market_data.market_cap.usd.toLocaleString("en-US",currencyObj)}</div>
                    <img className="card__image" src={coinInfo.image.large} alt={coinInfo.name}/>
                    <div className="card__name">{coinInfo.name}</div>
                    <div className="current__price">  Price</div>
                    <div className="card__price">$ {coinInfo.market_data.current_price.usd}</div>
                </div>
                


                
                ))}
                </div>

    );

};

export default CoinGeckoApi;
