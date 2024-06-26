import React, { useState, useEffect } from 'react';

function Top() {
    const [cryptoArr, setCryptoArr] = useState([]);

    useEffect(()=>{
       const fetchData = async () =>{
        try{
            const response = await fetch ('https://api.coinlore.net/api/tickers/');
            const data = await response.json();
            setCryptoArr(data.data.slice(0, 10));
        }catch (error){
            console.error('Error fetching data:', error);
        }
        };
        fetchData();
    },[]);

    return (
        <div className='top-container'>
            <h1>Top 10 Global Crypto Coins</h1>
            <div className='display-container'>
                {cryptoArr.map((crypto) =>(
                        <div key={crypto.id}className='coin-container'>
                        <p className='rank-para'>Rank #{crypto.rank}</p>
                        <h3 className='coin-symbol'>{crypto.name} ({crypto.symbol})</h3>
                        <p className='price-para'>Price: {crypto.price_usd}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Top