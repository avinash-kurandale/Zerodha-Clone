import React from 'react';


function Brokerage() {
    return ( 
        <>
        <div className='container  text-muted border-top'>
            <div className='row   mt-5'>
                <div className='col-8 '>
                    <h2>Brokerage Calculator</h2>
                    <ul>
                        <li>Buy 50 shares of TCS at ₹3,500 with 0.03% brokerage</li>
                        <li>Sell 100 shares of Infosys at ₹1,600 with flat ₹20 brokerage</li>
                        <li>Buy 25 shares of HDFC Bank at ₹1,550 with 0.02% brokerage</li>
                        <li>Sell 200 shares of Reliance at ₹2,450 with 0.05% brokerage</li>
                        <li>Buy 75 shares of ITC at ₹450 with ₹15 per order brokerage</li>
                    </ul>
                </div>
                <div className='col-4'>
                    <h2>List of Charger</h2>
                </div>
            </div>
        </div>
        </>
        
     );
}

export default Brokerage;