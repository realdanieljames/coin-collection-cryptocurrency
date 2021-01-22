// import {useState} from 'react'
// import Search from './Search'
// import CoinGeckoApi from '../coinGeckoAPI/coinGeckoData'



// const SearchResults =  ({handleSearchInput})=>{

//     const [searchValue, setSearchValue] = useState('')
//     const[coinResults, setCoinResults] = useState([]);


//     // <div className="coin__info">
//     // {coinResults.filter(coinInfo =>
//     //     coinInfo.id.includes(searchValue) || coinInfo.symbol.includes(searchValue)).map(filteredCoin=>(
//     //         <div 
//     //             key={filteredCoin.id} 
//     //             className="coin__card"        
//     //         >
//     //         <div className="card__rank">Rank: #{filteredCoin.market_data.market_cap_rank} {<br/>}( {filteredCoin.symbol.toUpperCase()} ) </div>
//     //         {/* <div className="card__marketcap">{filteredCoin.market_data.market_cap.usd.toLocaleString("en-US",currencyObj)}</div> */}
//     //         <img className="card__image" src={filteredCoin.image.large} alt={filteredCoin.name}/>
//     //         <div className="card__name">{filteredCoin.name}</div>
//     //         <div className="card__price"> ${filteredCoin.market_data.current_price.usd}</div>
//     //     </div>
//     //     ))
//     // }
//     // </div>






// return (
    
    
//     // <div className="search__element">
//     //     <input 
//     //         className="search__input"
//     //         type="text"
//     //         placeholder="Search cryptocurrencies"
//     //         value={searchValue}
//     //         onChange={(e)=> handleSearchInput(e.target.value)}
//     //         />
//     //     <button 
//     //       className="search__button"
//     //       onClick={handleSearchButton}
//     //       >Search
//     //     </button>     
    
    
//     <div className="coin__info">
//         {searchValue.length === 0? 
//               <div>
//                 <CoinGeckoApi/>
//               </div> 
//               :
//               <div className="coin__card">
//                 {SearchResults}
//               </div>
//       }
//       </div>

// // </div> 


// )
// }
// export default SearchResults;