import React from 'react';
import {Link} from "react-router-dom"

function NotFoundPage() {
    return ( 
        <div className='container p-5'>
            <div className='row text-center'>
               
                <h1 className='mt=5'>404 Not Found</h1>
                <p>
                  Soory, the page you are looking for does not exist.
                </p>
               <Link to="/" className="p-2 btn btn-primary fs-5" style={{ width: "20%", margin: "0 auto" }}>
                Go Home
                </Link>
            </div>

        </div>
     );
}

export default NotFoundPage;