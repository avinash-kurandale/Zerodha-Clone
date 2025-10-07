import React from 'react';

function CreateTicket() {
    return ( 
        <>
        <div className='container'>
            <div className='row p-5 mt-5 '>
                <h1 className='fs-2 text-center'>
                    To create a ticket, select a relevent topic
                </h1>
           
             <div className='col-4  mt-5 '>
                <h4 className=' text-muted'>
                    <i class="fa-solid fa-user-plus"></i>Account Opening
                </h4>
                <a href='' style={{textDecoration: "none" , lineHeight: "2"}}>Order History</a>< br/>
                <a href='' style={{textDecoration: "none" , lineHeight: "2"}}>Profile Settings</a>< br/>
                <a href='' style={{textDecoration: "none" , lineHeight: "2"}}>Market Insights</a>< br/>
                <a href='' style={{textDecoration: "none" , lineHeight: "2"}}>Fund Transfer</a>< br/>
                <a href='' style={{textDecoration: "none" , lineHeight: "2"}}>Trade Summary</a>< br/>
            </div>
            <div className='col-4  mt-5 '>
                <h4 className='text-muted'>
                    <i class="fa-solid fa-user"></i>Your Zerodha Account
                </h4>
                <a href='' style={{textDecoration: "none" , lineHeight: "2"}}>Account Opening</a>< br/>
                <a href='' style={{textDecoration: "none" , lineHeight: "2"}}>Login & Password</a>< br/>
                <a href='' style={{textDecoration: "none" , lineHeight: "2"}}>Trade & Orders</a>< br/>
                <a href='' style={{textDecoration: "none" , lineHeight: "2"}}>Fund Transfer</a>< br/>
                <a href='' style={{textDecoration: "none" , lineHeight: "2"}}>Profile Update</a>< br/>
            </div>
            <div className='col-4  mt-5'>
                <h4 className='text-muted'>
                   <i class="fa-solid fa-chart-simple"></i> Your Zerodha Account
                </h4>
                <a href='' style={{textDecoration: "none" , lineHeight: "2"}}>Reports & Statements</a>< br/>
                <a href='' style={{textDecoration: "none" , lineHeight: "2"}}>Margins & Limits</a>< br/>
                <a href='' style={{textDecoration: "none" , lineHeight: "2"}}>KYC & Verification</a>< br/>
                <a href='' style={{textDecoration: "none" , lineHeight: "2"}}>App & Platform Help</a>< br/>
                <a href='' style={{textDecoration: "none" , lineHeight: "2"}}>General Enquiries</a>< br/>
            </div>
        </div>
         </div>
        </>
     );
}

export default CreateTicket;