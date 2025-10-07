import React from 'react';

function RightSection({ 
        productName,
        productDescription,
        learnMore,
        imageURL,
    
    }) {
    return ( 
        <div className='container  border-bottom mb-3 mt-5'>
            <div className='row'>
                <div className='col-6 p-2 '>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore} >Learn More</a>

                </div>

                
                <div className='col-6 p-2 mt-2'>
                    <img src={imageURL} className="p-5"/>
                </div>
            </div>
        </div>
       
     );
}

export default RightSection;