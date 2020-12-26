import { useState, useEffect } from 'react';
import './cmcData.css';
import cmcAPIKey from './cmcAPIKey';


import axios from 'axios'





const url = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest'
    
    const CmcAPIData = () => {
        const [coinResults, setCoinResults] = useState([])
        
        const fetchCoinList = async() => {
            try {
                const response = await axios.get(url, {
                    headers: { 'X-CMC_PRO_API_KEY': cmcAPIKey }
                })
                // let coinsArray = response.data.data
                // setCoinResults(coinsArray)
                // const images = `https://data.messari.io/asset-images/${coinsArray.id}`
                // setImageResults(images)
                console.log(response)
            } catch (error) {
                console.error(error);
            }
        }
        fetchCoinList()

                    
                    
                    return (
                        
                        <div className = "coin__info"> 
        {coinResults.map(coinInfo => ( 
            <button key = { coinInfo.id } className = "coin__name"> 
                    { coinInfo.name } 
                </button>
            ))
        } 
    


        </div>  
    )
}


export default CmcAPIData;