import React from 'react';
function Team() {
    return ( 
        <>
      <div className="container">
        <div className="row p-5 mb-2 mt-5">
          <h1 className=" text-center mt-5">
            People
          </h1>
        </div>

        <div className="row p-4 " style={ {lineHeight : "1.5" }} >
          <div className="col-6 p-6 text-center">
            <img src="media/images/nithinKamath.jpg" style={{borderRadius:"100%", width:"50%"}}/>
            <h4 className='mt-5'>nithin kamath</h4>
            <h6>Founder, CEO</h6>
          </div>
          <div className="col-6 p-6">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, 
              Zerodha has changed the landscape of the Indian broking industry.
            </p> 
            <p>
              He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p>
                Playing basketball is his zen.
            </p> 
            <p> 
              Connect on Homepage / TradingQnA / Twitter
            </p>
          </div>
        </div>
      </div>
    </>
     );
}

export default Team ;