import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

function Navbar() {

  const [userEmail, setUserEmail] = useState(localStorage.getItem('userEmail'));
  const location = useLocation();
  const navigate = useNavigate()
  
  const handleSignOut = () => {
       // Remove user information from localStorage
       localStorage.removeItem('userEmail');
       // Update state to trigger a re-render
       setUserEmail(null);
       // Redirect to the login page or homepage
       navigate('/login');
  }

  useEffect(() => {
    // Update userEmail state when the component mounts or when the route changes
    setUserEmail(localStorage.getItem('userEmail'));
  }, [location.pathname]);


  return (

    
    <div>

<nav class="navbar navbar-expand-lg bg-light navbar-fixed-top fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{color:'#fff', fontSize:'16px'}}>RESALE <span style={{color:'#fff', fontSize:'16px'}}></span> </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to='/homepage' aria-current="page" >Home</Link>
          </li>
          {userEmail && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to='/createproduct'>Create-Product</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/productlist'>Product-List</Link>
              </li>
            </>
          )}
          {userEmail ? (
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => handleSignOut()}>
                Sign Out
              </a>
            </li>
          ) : (
            <li className="nav-item">
              <Link to="/registeruser" className="nav-link">
                Register/Login
              </Link>
            </li>
          )}
        </ul>
    </div>
  </div>
</nav>



    </div>
  )
}

export default Navbar
