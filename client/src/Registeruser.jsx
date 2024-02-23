import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Registeruser() {

    const [email, setEmail] = useState('')
        const [mobile, setMobile] = useState()
            const [password, setPasssword] = useState()
                const [username, setUsername] = useState('')
                    const [location, setLocation] = useState()

                    const navigate = useNavigate()

                     const Submit = (e) => {
                        e.preventDefault();

                        const trimmedUsername = username.trim();
                        const trimmedemail = email.trim();
                    //    if (!email || !mobile || !password || !username || !location ) {
                     //     alert('Please fill in all the required fields or select list');
                    //      return;
                    //    }
                   // Check if the trimmed username is empty
  if (trimmedUsername === '') {
    alert('Username cannot be empty');
    return;
  }

  if (trimmedemail === '') {
    alert('Email cannot be empty');
    return;
  }
                        axios.post("http://localhost:3016/createUser", {email, mobile, password, username,  location})
                        .then(result => {console.log(result)
                        navigate('/homepage')
                    })
                        .catch(err => console.log(err))
                     }

  return (

<div class=" text-center bg-reg"  >
  <div class="row bg-register">
 <div class="col-md-4 col-sm-0">

    </div>
    <div class="col-md-4 col-sm-12">
 
      <form onSubmit={Submit} className='form-control register-form'>
      <h6 className='heading-text' >RESALE <span> </span></h6>
      <span className='text-singup'>Create a new account:</span>
        <div>
        <label for="inputEmail4" class="form-label"><span className='text-important'>*</span>User Name:</label>
            <input type='text '  class="form-control" onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
            <label class="form-label" htmlFor='email'><span className='text-important'>*</span>Email:</label>
            <input type='text ' class="form-control" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
            <label  class="form-label" htmlFor='mobile'><span className='text-important'>*</span>Mobile:</label>
            <input type='text ' class="form-control" onChange={(e) => setMobile(e.target.value)} />
        </div>
        <div>
            <label class="form-label" htmlFor='password'><span className='text-important'>*</span>Password:</label>
            <input type='text ' class="form-control" onChange={(e) => setPasssword(e.target.value)} />
        </div>
        <button className='btn btn-dark btn-sm' style={{marginTop:'25px'}}>Sign Up</button>
        <p>Already have account?  <Link  to='/login' style={{textdecoration: 'none',    color: '#ffc107'}} >Login</Link></p>
      </form>
  
    </div>

    <div class="col-md-4 col-sm-0">

    </div>
    </div>
    </div>
  )
}

export default Registeruser
