import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
function DetailsPage() {

  const userEmail = localStorage.getItem("userEmail");
    const [product, setProduct] = useState(null);
    const { _id } = useParams();

    useEffect(() => {
     // const _id = match.params._id;

      axios.get(`http://localhost:3016/getprods/${_id}`)
          .then(response => setProduct(response.data))
          .catch(err => console.log(err));
  }, [_id]);
  
  return (
    <div  class="bg-content"  >
      {userEmail ? (
        <h6>Welcome, {userEmail}!</h6>
      ) : (
        <h6 className="emptyUserEmail">Welcome! Guest</h6>
      )}

{product && (
                <div>
           <img src={`http://localhost:3016/public/Images/` + product.imagename } class="card-img-top card-dimg"  alt="..." />
               <h6 class="card-title">{product.productname}</h6>               
              <div> <span>{product.productcategory}</span> </div>
               <span class='' style={{    }}> <b style={{color: '#F44336'}}>Price: {product.productprice} </b> | Status : {product.status}</span> 
          

               <div style={{border:'1px solid #ddd', padding:'20px;'}}>
                 <p><b>Description: - </b><br></br>{product.itemdetails}</p>
                </div>
                <span>Condition: {product.condition}</span>
                <div>  <span style={{}} >Location : {product.location}</span></div>
              <div>  <span>Meet-up: {product.meetup}</span> </div>
           
                  <div>    
                  <div>
                    <Link className="" to='/homepage'><span style={{color:'#434040', textDecoration:'uderline'}}>Home</span> </Link> </div>
                  <Link className="btn btn-danger btn-sm" to='/homepage'>Chat </Link>        
                  </div>
                
                </div>
            )}
    </div>
  )
}

export default DetailsPage

