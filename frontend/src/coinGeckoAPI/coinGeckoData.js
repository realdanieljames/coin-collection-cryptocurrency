import { useState, useEffect } from "react";
import Search from '../search/Search'
import "./coinGeckoData.css";
const CoinGecko = require('coingecko-api');






//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();


const CoinGeckoApi = () => {
    //=============================================================================================================//
    //=============================================================================================================//
    const [coinResults, setCoinResults] = useState([]);
    // const [searchValue, setSearchValue] = useState('')
    console.log(Search.length)

//=============================================================================================================//
//=============================================================================================================// 
// 3. Make calls
const func = async() => {
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
    useEffect(()=>{
    
        func()
    },[])


    const resultRender = 
    <div className="coin__info">
    {coinResults.map((coinInfo) => (

            <div 
                key={coinInfo.id} 
                className="coin__card"        
            >
                <div className="card__rank">Rank: #{coinInfo.market_data.market_cap_rank} {<br/>}( {coinInfo.symbol.toUpperCase()} ) </div>
                <div className="card__marketcap">{coinInfo.market_data.market_cap.usd.toLocaleString("en-US",currencyObj)}</div>
                <img className="card__image" src={coinInfo.image.large} alt={coinInfo.name}/>
                <div className="card__name">{coinInfo.name}</div>
                <div className="card__price"> ${coinInfo.market_data.current_price.usd}</div>
            </div>
            


            
            ))}
            </div>

//=============================================================================================================//
//=============================================================================================================//
    return (

        resultRender

        
        // <div className="coin__info">

        // {coinResults.map((coinInfo) => (

        //         <div 
        //             key={coinInfo.id} 
        //             className="coin__card"        
        //         >
        //             <div className="card__rank">Rank: #{coinInfo.market_data.market_cap_rank} {<br/>}( {coinInfo.symbol.toUpperCase()} ) </div>
        //             <div className="card__marketcap">{coinInfo.market_data.market_cap.usd.toLocaleString("en-US",currencyObj)}</div>
        //             <img className="card__image" src={coinInfo.image.large} alt={coinInfo.name}/>
        //             <div className="card__name">{coinInfo.name}</div>
        //             <div className="card__price"> ${coinInfo.market_data.current_price.usd}</div>
        //         </div>
                


                
        //         ))}
        //         </div>

    );

};

export default CoinGeckoApi;
