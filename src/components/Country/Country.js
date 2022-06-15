import React, { useEffect, useState } from 'react';
import Count from '../Count/Count';
import './Country.css'

const Country = () => {
    const [countrys, setCountrys] = useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountrys(data))
    
    },[])

    return (
        <div className='row '>
            
            
            {
                countrys.map(country =><Count country={country}></Count>)
            }
        </div>
    );
};

export default Country;