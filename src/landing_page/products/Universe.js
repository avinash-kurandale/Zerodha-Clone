import React from 'react';

function Universe() {
    return ( 
        <div className='container mt-5 text-center'>
            <div className='row p-5 text-center'>
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/smallcaseLogo.png' />
                    <p className='text-small text-muted'>our assets management venture that is creating simple and 
                        transparent index fund to help you save for your goal </p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/sensibullLogo.svg' />
                     <p className='text-small text-muted'>options tradinfg platform that lets you create strategics analyze positions and examine 
                        data points like open interest , FLL/Dll and more</p>
                </div>
                <div className='col-4 p-3 mt-5'>
                    <img src='media/images/streakLogo.png' style={{width:"40%", height:"40%"}}/>
                     <p className='text-small text-muted'>Systematic trading platform that allows you to create
                         and backtest strategies without coding</p>
                </div>
                 <div className='col-4 p-3 mt-5'>
                    <img src='media/images/zerodhaFundhouse.png' style={{width:"40%", height:"40%"}} />
                     <p className='text-small text-muted'>Systematic trading platform that allows you to create
                         and backtest strategies without coding</p>
                </div>
                 <div className='col-4 p-3 mt-5'>
                    <img src='media/images/goldenpiLogo.png' />
                     <p className='text-small text-muted'>Systematic trading platform that allows you to create
                         and backtest strategies without coding</p>
                </div>
                 <div className='col-4 p-3 mt-5'>
                    <img src='media/images/dittoLogo.png' style={{width:"40%", height:"40%"}} />
                     <p className='text-small text-muted'>Systematic trading platform that allows you to create
                         and backtest strategies without coding</p>
                </div>
            </div>

        </div>
     );
}

export default Universe;