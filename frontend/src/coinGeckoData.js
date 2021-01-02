import { useState, useEffect } from "react";
import "./coinGeckoData.css";





//1. Import coingecko-api
const CoinGecko = require('coingecko-api');

//2. Initiate the CoinGecko API Client
const CoinGeckoClient = new CoinGecko();


const CoinGeckoApi = () => {
    const [coinResults, setCoinResults] = useState([]);


    useEffect(()=>{
    
        func()
    },[])


    
// 3. Make calls
var func = async() => {
    let data = await CoinGeckoClient.coins.all();
    setCoinResults(data.data)

    console.log(data.data)
};


    return (
        <div className="coin__info">
        {coinResults.map((coinInfo) => (
            <button 
            style={{
                backgroundImage: `url(${coinInfo.image.large})`
            }}
                key={coinInfo.id} 
                className="coin__card" 
                
            >
                {/* <img src={coinInfo.image.small}/> */}
                {coinInfo.market_data.market_cap_rank}
                {coinInfo.name}
            </button>
        ))}
        </div>
    );
};

export default CoinGeckoApi;
