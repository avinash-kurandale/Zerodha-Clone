import React from 'react';
function Hero() {
    return ( 
        <>
        <div className='container'>
            <div className='text-center mt-5 p-3'>
            <h1>Technology</h1>
            <h3 className='text-muted mt-3 fs-5'>sleek , modern and intuitive trading platform</h3>
            <p className='mt-2'>
                cheak out our
                <a href="" style={{textDecoration: "none"}}>
                    investment offering
                    <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                    
                </a>
            </p>
        </div>
        </div>
        </>
     );
}

export default Hero;
