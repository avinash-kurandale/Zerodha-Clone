import React from 'react';

function Hero() {
    return ( 
       <section className='container-fluid ' id='supportHero'>
   
        <div className='p-3 ' id='supportWrapper'>
            <h3>Support Portal</h3>
            <a href=''>Track Tickets</a>
        </div>
        <div className='row p-3 mt-5 mb-5' id='supportWrapper'>
               <div className='col-6 ps-2'>
                    <h3>Search for an answer or browse help topics to a ticket</h3>
                    <input placeholder='eg. how can i start a sip '/><br />
                    <a href=''>Track account openning</a>
                    <a href=''>Track segment</a>
                    <a href=''>Intraday Margins</a>
                    <a href=''>Kite User mannual</a>



                </div> 
                <div className='col-6' style={{ paddingLeft: '150px' }}>
                    <h3>Features</h3>
                     <a href=''>Track account openning</a>
                    <a href=''>Track activation</a>
                    
                </div> 
        </div>
       
       </section>
     );
}

export default Hero;