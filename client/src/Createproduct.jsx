import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Select from "react-dropdown-select";

function Createproduct() {
  const userEmail = localStorage.getItem("userEmail");
  const [createdby, setCreatedby] = useState(localStorage.getItem("userEmail"))
  const [productcategory, setProductcategory] = useState()
  const [productname, setProductname] = useState()
  const [productprice, setProductprice] = useState()
  const [location, setLocation] = useState()
  const [status, setStatus] = useState()
  const [description, setDescription] = useState()
  const [itemdetails, setItemdetails] = useState()
  const [condition, setCondition] = useState()
  const [meetup, setMeetup] = useState()
  const [districts, SetDisctricts] = useState()
  const [file, setFile] = useState(null)


  const options = [
    { value: "electronics", label: "Electronics" },
    { value: "clothing", label: "Clothing" },
    { value: "Toysgames", label: "Toysgames" },
    { value: "HomeKitchen", label: "HomeKitchen" },
    { value: "MensFashion", label: "MenFashion" },
    { value: "WomensFashion", label: "WomenFashion" },
    // Add more options as needed
  ];

  const conditons = [
    { value: "New", label: "New" },
    { value: "Used", label: "Used" },
    // Add more options as needed
  ];

   const districtslist = [
    { value: "Aarani ஆரணி", label: "Aarani ஆரணி"},
    { value: "Tiruchirappalli திருச்சி", label: "Tiruchirappalli திருச்சி"},
    { value: "Ariyalur அரியலூர", label: "Ariyalur அரியலூர்"},
    { value: " Karur கருர", label: "Karur கருர்"},
    { value: "Nagappattinam நாகப்பட்டினம்", label: "Nagappattinam நாகப்பட்டினம்"},
    { value: "Perambalur பெரம்பலூர்", label: "Perambalur பெரம்பலூர்"},
    { value: "Pudukkottai புதுக்கோட்டை", label: "Pudukkottai புதுக்கோட்டை"},
    { value: "Thanjavur தஞ்சாவூர்", label: "Thanjavur தஞ்சாவூர்"},
    { value: "Tiruvarur திருவாருர்", label: "Tiruvarur திருவாருர்"},
    { value: "Mayiladuthurai மயிலாடுதுறை", label: "Mayiladuthurai மயிலாடுதுறை"}
   ]


                    
                    const navigate = useNavigate()

                    const Submit = (e) => {
                      e.preventDefault();
                      // Basic validation


    //if (!createdby || !productcategory || !productname || !description || !productprice || !condition || !itemdetails || !status || !districts || !meetup || !districts.value) {
    //  alert('Please fill in all the required fields or select list');
   //   return;
   // }
                      const formData = new FormData();

                      formData.append('file', file); // Use 'file' instead of 'imagename'  formData.append('createdby', createdby);
                      formData.append('createdby', userEmail);
                      formData.append('productcategory', productcategory);
                      formData.append('productname', productname);
                      formData.append('productprice', productprice);
                      formData.append('location', location);
                      formData.append('status', status);
                      formData.append('description', description);
                      formData.append('itemdetails', itemdetails);
                      formData.append('condition', condition);
                      formData.append('meetup', meetup);
                  
                      axios.post("http://localhost:3016/createProduct", formData)
                          .then(result => {
                              console.log(result);
                              alert('Submitted Successfully');
                              navigate('/homepage');
                          })
                          .catch(err => console.log(err));
                  };

                     const handleSelectChange = (e) => {
                      setProductcategory(e.target.value);
                    //  alert(productcategory)
                    };

              

                    const handleConditonChange = (e) => {
                      setCondition(e.target.value);
                    };

                    const handleDistrictsChange = (e) => {
                      setLocation(e.target.value);
                    };
                    const handleUpload = (e) => {
                      //  console.log(file);
                      const formatdata = new FormData()
                         formatdata.append('file', file)
                         axios.post('http://localhost:3016/upload', formatdata )
                         .then(res => console.log(res))
                         .catch(err => console.log(err))
                      }

  return (

<div class=" text-center"  >
  <div class="row bg-register create-product">
  <div class="col-md-2 col-sm-2"></div>
    <div class="col-md-8 col-sm-8">
    <h6>Welcome, {userEmail}!</h6>
      <form onSubmit={Submit} class="row g-3">
      <h6 className='heading-text' ><span>What are you lising today ? </span></h6>
      <div class="row">
      <div class="col-md-6">
        <input type='file' onChange={ e  => setFile(e.target.files[0])}/>
        <button onClick={handleUpload} style={{display:'none'}} >Upload</button>
        <label for="inputEmail4" class="form-label"><span className='text-important'>*</span>Created By</label>
            <input type='text' disabled value={createdby}  class="form-control" onChange={(e) => setCreatedby(e.target.value)} />
        </div>
        <div class="col-md-6">
            <label class="form-label" htmlFor='email'><span className='text-important'>*</span>Product Category:</label>
            <select class='form-select' value={productcategory} onChange={handleSelectChange}>
        <option value="">Select a category</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
        </div>
        </div>
        <div class="row">
      <div class="col-md-6">
            <label  class="form-label" htmlFor='mobile'><span className='text-important'>*</span>Product Title:</label>
            <input type='text ' class="form-control" onChange={(e) => setProductname(e.target.value)} />
        </div>
        <div class="col-md-6">
            <label class="form-label" htmlFor='password'><span className='text-important'>*</span>Description:</label>
            <textarea type='text ' class="form-control" onChange={(e) => setDescription(e.target.value)} rows="3" ></textarea>
        </div>
       
        </div>
        <div class="row">
        <div class="col-md-6">
            <label class="form-label" htmlFor='password'><span className='text-important'>*</span>Product Price:</label>
            <input type='text ' class="form-control" onChange={(e) => setProductprice(e.target.value)} />
        </div>
        <div class="col-md-6">
            <label class="form-label" htmlFor='password'><span className='text-important'>*</span>Condition:</label>
            <select class='form-select' value={condition} onChange={handleConditonChange}>
        <option value=""> - </option>
        {conditons.map((conditon) => (
          <option key={conditon.value} value={conditon.value}>
            {conditon.label}
          </option>
        ))}
      </select>
        </div>
  
 
        </div>

         <div class="row">
     
        <div class="col-md-6">
            <label class="form-label" htmlFor='password'><span className='text-important'>*</span>More Details:</label>
            <input type='text ' class="form-control" onChange={(e) => setItemdetails(e.target.value)} />
        </div>
        <div class="col-md-6">
            <label class="form-label" htmlFor='password'><span className='text-important'>*</span>Status:</label>
            <input type='text ' class="form-control" onChange={(e) => setStatus(e.target.value)} />
        </div>
        </div>

         <div class="row">


         <div class="col-md-6">
            <label class="form-label" htmlFor='password'><span className='text-important'>*</span>Location:</label>
            <select class='form-select' value={districts} onChange={handleDistrictsChange}>
        <option value=""> - </option>
        {districtslist.map((districts) => (
          <option key={districts.value} value={districts.value}>
            {districts.label}
          </option>
        ))}
      </select>
        </div>

        <div class="col-md-6">
            <label class="form-label" htmlFor='password'><span className='text-important'>*</span>Meet-up:</label>
            <input type='text ' class="form-control" onChange={(e) => setMeetup(e.target.value)} />
        </div>
        </div>
        <button className='btn btn-info' style={{marginTop:'25px'}}>Submit</button>
     
      </form>
  
    </div>


    <div class="col-md-2 col-sm-2">
    </div>
    </div>
    </div>
  )
}

export default Createproduct
