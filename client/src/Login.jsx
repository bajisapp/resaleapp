import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Login() {

  const [email, setEmail] = useState()
  const [password, setPasssword] = useState()
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("https://resaleapi.onrender.com/login", {email, password})
    .then(result => {console.log(result)
      if(result.data === "Success")
     {
      localStorage.setItem("userEmail", email);
      navigate('/')
     }
     else
     {
      navigate('/registeruser')
     }
})
    .catch(err => console.log(err))
 }
  

  return (
<div class=" text-center bg-reg"  >
  <div class="row bg-register">
 <div class="col-md-4 col-sm-0">
  <div style={{marginTop:'30%', marginLeft:'20%', marginRight:'20%'}}>

 <p>
"Welcome to ResaleApp - the ultimate platform for buying and selling pre-loved items!
 Whether you're looking to declutter your space or snag a great deal,
  ResaleApp has you covered. Here's what sets us apart:</p>
  </div>
         </div>
    <div class="col-md-4 col-sm-12">

          <form onSubmit={handleSubmit} className='form-control register-form'>
        <h6 className='heading-text' > - RESALE - <span> </span></h6>
        <div>
            <label class="form-label" >Email:</label>
            <input type='text ' class="form-control"  onChange={(e) => setEmail(e.target.value)} />
        </div>        

        <div>
            <label class="form-label" >Password:</label>
            <input type='text ' class="form-control" placeholder='**** ****' onChange={(e) => setPasssword(e.target.value)} />
        </div>
        <button className='btn btn-dark btn-sm'>Login</button>
        <p>Not Registered? <Link  to='/registeruser' style={{textdecoration: 'none',    color: '#ffc107'}} >Register</Link></p>
      </form>



      </div>

<div class="col-md-4 col-sm-0">

</div>
</div>
</div>
  )
}

export default Login
