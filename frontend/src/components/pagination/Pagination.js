import React from 'react'
import './Pagination.css'
 const Pagination = ({coinsPerPage, totalCoins, paginate, pageNumber}) => {


    const pageNumbers =[];

    for(let i = 1; i <=Math.ceil(totalCoins / coinsPerPage); i++){
        pageNumbers.push(i)
    } 
    return (
        <nav>
            <div  className="page__control">
                {pageNumbers.map(number => (
                    <div key={number} className="page__number">
                        <button onClick={()=> paginate(number)}  className="page__link">
                            {number}
                        </button>
                    </div>
                ))}
            </div>
        </nav>
    )
}

export default Pagination