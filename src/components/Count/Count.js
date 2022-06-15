import React from 'react';
import './Count.css'

const Count = (props) => {
    const {flags,name,translations} = props.country
   
    return (
        
            <div className='col-lg-3 ms-5 m-3 primary rounded p-5'>
                
                <img className='' src={flags.png} alt="" />
                <div><h3 className=''>{name.common}</h3></div>
                <div><p className=''>Name: {translations.nld.official}</p><br />
                <button className='btn btn-success'> Submite</button>
                </div>
               
                
            </div>
            
      
    );
};

export default Count;