import React from "react";

function Navbar() {
  return (
    
      <nav class="navbar navbar-expand-lg bg-light border-bottom">
        <div class="container p-2">
          <a class="navbar-brand " href="#">

         <img src='media/images/logo.svg' style={{width:"15%"}} alt='home education' />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item ">
                <a class="nav-link active" aria-current="page" href="#">
                  Signup
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link active" aria-current="page" href="#">
                  About
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link active" aria-current="page" href="#">
                  Products
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link active" aria-current="page" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link active" aria-current="page" href="#">
                  Support
                </a>
              </li>
             
            </ul>
            
          </div>
        </div>
      </nav>
    
  );
}

export default Navbar;
