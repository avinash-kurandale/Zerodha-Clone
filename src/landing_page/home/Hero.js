import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return (  
        <div className='container '>
            <div className='row text-center'>
                <img src="/media/images/homeHero.png" alt="Home Hero" className='b-5' style={{ width: "80%", height: "auto", margin: "0 auto" }}  />
                <h1 className='mt-1'>Invest in everything</h1>
                <p>
                    online platform to invest in stocks,derivatives,mutual fund, and more
                </p>
               <Link to="/Signup" className="p-2 btn btn-primary fs-5" style={{ width: "20%", margin: "0 auto" }}>
                Signup Now
                </Link>
            </div>

        </div>
    );
}

export default Hero;