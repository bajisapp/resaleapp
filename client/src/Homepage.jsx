import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Homepage() {

  const [users, setUsers] = useState([])
  const [products, setProducts] = useState([])
  const userEmail = localStorage.getItem("userEmail");


useEffect(() => {
  axios.get('http://localhost:3016/getUser')
  .then(result => setUsers(result.data))
  .catch(err => console.log(err))
})

useEffect(() => {
  axios.get('http://localhost:3016/getprods')
  .then(products => setProducts(products.data))
  .catch(err => console.log(err))
})

  return (
    <div class="bg-content"  >
       {userEmail ? (
        <h6>Welcome, {userEmail}!</h6>
      ) : (
        <h6 className="emptyUserEmail">Welcome! Guest</h6>
      )}
      <table style={{display:'none'}}>
        <thead>
        <th>
          test
        </th>
        <th>
          test
        </th>
        <th>
          test
        </th>
        <th>
          test
        </th>
        <th>
          test
        </th>
        </thead>
        <tbody>
          {
            users.map((user) => {
              return <tr>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.password}</td>
                <td>{user.username}</td>
                <td>{user.location}</td>
              </tr>
            })
          }
        </tbody>
        <tbody>
          {
            products.map((product) => {
              return <tr>
                <td>{product.createdby}</td>
                <td>{product.productcategory}</td>
                <td>{product.productname}</td>
                <td>{product.productprice}</td>
                <td>{product.location}</td>
                <td>{product.status}</td>
                <td>{product.descrption}</td>
                <td>{product.itemdetails}</td>
                <td>{product.condition}</td>
                <td>{product.meetup}</td>
              </tr>
            })
          }
        </tbody>
      </table>
      <div className="container">
      <div class="row">
          {
            products.map((product) => {
              const firstThreeLetters = product.createdby;
              return <div class='card' style={{width: '18rem', marginRight: '20px', marginTop:'10px'}}>
                  <div className="user-details">
      <div className="user-avatar">
        <span>{firstThreeLetters.slice(0, 1)}</span>
      </div>
      {userEmail ? (
        <span>{firstThreeLetters}</span>
      ) : (
        <span className="emptyUserEmail"># # #</span>
      )}
   {/* <span>{firstThreeLetters}</span>  */}

    </div>

               
               <div class="card-body">
               <img src={`http://localhost:3016/public/Images/` + product.imagename } class="card-img-top card-bimg"  alt="..." />
               <h6 class="card-title">{product.productname}</h6>               
              <div> <span>{product.productcategory}</span> </div>
               <span class='productprice' style={{    color: '#F44336'}}>Price: {product.productprice}</span>
          
                <span style={{display:'none'}}>{product.status}</span>
                <p class="card-text">{product.descrption}</p>
                <span style={{display:'none'}}>{product.itemdetails}</span>
                <span>Condition: {product.condition}</span>
              <div>  <span>Meet-up: {product.meetup}</span> </div>

              <div>  <span style={{}} >Location : {product.location}</span></div>
              
                  <div>   
                  <Link to={`/details/${product._id}`} className="btn btn-success btn-sm">   View details
                  </Link>           
                  </div>

                </div>
              </div>
            })
          }
        </div>
      
        </div>
        </div>
  )
}




export default Homepage
