import React from 'react';

function Awards() {
    return (  
        <div className='container mt-5 mb-5'>
            <div className='row '>
                <div className='col-6 p-5'>
                    <img src='media/images/largestBroker.svg' alt='home Award' />
                    
                </div>
                <div className='col-6  mb-5 text-center p-5'>
                    <h1>Largest stock broker in India</h1>
                    <p className='mb=5 mt-3'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity
                         investments and contribute to 15% of daily retail exchange volumes in India.</p>

                    <div className='row mb-4 '>
                        <div className='col-6'>
                            <ul>
                                <li>Zero Brokerage</li>
                                <li>Fast Execution</li>
                                <li>Real-time Charts</li>
                                
                            </ul>
                        </div>
                        <div className='col-6'>
                            <ul>
                                <li>Secure Platform</li>
                                <li>User Friendly</li>
                                <li>Instant Support</li>
                            </ul>

                        </div>
                        
                    </div>    

                    
                    <img src='media/images/pressLogos.png' alt='press icons' style={{width:"90%"}}/> 
                    

                </div>
            </div>
        </div>
    );
}

export default Awards;