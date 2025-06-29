import React from 'react';

function Stats() {
    return ( 
        <div className='container mt-5 mb-5' >
            <div className='row'>
                <div className='col-6 row-6 p-3'>
                        <div className='mt-5 mb-5 '>
                            <div>
                                <h1 className='fs-1 mb-5'>Trust with confidence</h1>

                                <h3 className='fs-4'>Customer-first always</h3>
                                <p className='text-muted'>That's why 1.3+ crore customers trust Zerodha with ₹3.5+
                                     lakh crores worth of equity investments.
                                </p>

                                <h3 className='fs-4'>No spam or gimmicks</h3>
                                <p className='text-muted'>
                                    No gimmicks, spam, "gamification", or annoying push notifications. 
                                    High quality apps that you use at your pace, the way you like.
                                </p>
                                <h3 className='fs-4'>The Zerodha universe</h3>
                                <p className='text-muted'>
                                    Not just an app, but a whole ecosystern. Our investments 
                                    in 30+ fintech startups offer you tailored services specific 
                                    to your needs.
                                </p>
                                <h3 className='fs-4'>Do better with money</h3>
                                <p className='text-muted'>
                                    With initiatives like Nudge and Kill Switch, we don't
                                     just facilitate transactions, but actively help you do better
                                      with your money.
                                </p>


                            </div>
                        </div>
                </div>
                <div className='col-6 row-6 p-5'>
                    <img src='media\images\ecosystem.png'  alt='ecosystem img' style={{width:"90%"}}></img>

                    <div className='text-center'>

                        <a href="#" className="mx-5" style={{ textDecoration: "none" }}>
                        Explore our product{" "}
                        <i className="fa-solid fa-arrow-right" style={{ color: "#74C0FC" }}></i>
                        </a>

                        <a href='' style={{textDecoration: "none"}}>Try Kit</a>

                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;