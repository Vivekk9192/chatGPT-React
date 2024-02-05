import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Vivek ChatGPT
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
             
            </ul>
          
        <button
              className="btn btn-primary"
              type="button"
              name="send"
              id="send"
            onClick={()=>{window.location.reload()}}
             
            >New chat <i className ="fa-solid fa-plus" style={{"padding-left":"7px"}}></i>
             
            </button>


          </div>
         
        </div>
      </nav>
    </>
  );
};

export default Navbar;
