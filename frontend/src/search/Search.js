import {useState} from 'react'
import CoinGeckoApi from '../coinGeckoAPI/coinGeckoData'



console.log(CoinGeckoApi)
const Search = ({func}) => {
    const [searchValue, setSearchValue] = useState('')


  const handleSearchInput = (inputValue)=>{

    // if()
    console.log(inputValue)

    setSearchValue(inputValue)
  }
  

  const handleSearchButton =(e)=>{
    console.log(e.target.value)
  }

    return (

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
              onClick={handleSearchButton}
              >Search
            </button>
        </div> 
    )
}

export default Search;