import { useState, useEffect } from "react";
import "./coinGeckoData.css";
const CoinGecko = require('coingecko-api');







//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();


const CoinGeckoApi = () => {
//=============================================================================================================//
//=============================================================================================================//
    const [coinResults, setCoinResults] = useState([]);
    // const [searchValue, setSearchValue] = useState('')


//=============================================================================================================//
//=============================================================================================================//
    useEffect(()=>{
    
        func()
    },[])



//=============================================================================================================//
//=============================================================================================================// 
// 3. Make calls
var func = async() => {
    let data = await CoinGeckoClient.coins.all({'per_page': 100});
    setCoinResults(data.data)

    console.log(data.data)
};

const currencyObj = {
    style: "currency",
    currency: "USD"
}

//=============================================================================================================//
//=============================================================================================================//
    return (
        
        <div className="coin__info">

        {coinResults.map((coinInfo) => (

                <div 
                    key={coinInfo.id} 
                    className="coin__card"        
                >
                    <div className="card__rank">Rank: #{coinInfo.market_data.market_cap_rank} {<br/>}({coinInfo.symbol}) </div>
                    <div className="card__marketcap">{coinInfo.market_data.market_cap.usd.toLocaleString("en-US",currencyObj)}</div>
                    <img className="card__image" src={coinInfo.image.large} alt={coinInfo.name}/>
                    <div className="card__name">{coinInfo.name}</div>
                    <div className="card__price"> ${coinInfo.market_data.current_price.usd}</div>
                </div>
                


                
                ))}
                </div>

    );

};

export default CoinGeckoApi;
