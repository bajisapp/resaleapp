const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')
const path = require('path')

const UserModel = require('./Models/Users')
const productmodel = require('./Models/Productlist')
const CustomerModel = require('./Models/Customer')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/public', express.static('public'));

mongoose.connect('mongodb+srv://dailyresale:QWER9876!@atlascluster.reoukbs.mongodb.net/dailyresale')
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define ProductModel before using it in the route handler

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/Images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage
})

app.post("/createProducts", (req, res) => {
    productmodel.create(req.body)
    .then(products => res.json(products))
    .catch(err => res.json(err))
})

app.post("/createProduct", upload.single('file'), (req, res) => {
    console.log('file name', req.file)
    const productData = { ...req.body, imagename: req.file.filename };
    productmodel.create(productData)
        .then(products => res.json(products))
        .catch(err => res.json(err));
});

app.post('/upload', upload.single('file'), (req, res) => {
   console.log('file name', req.file)
   productmodel.create({imagename: req.file.filename})
   .then(result => res.json(result))
   .catch(err => console.log(err))
})

app.post("/login", (req, res) => {
    const {email, password} = req.body;
    UserModel.findOne({email: email})
    .then(user => {
        if(user){
            if(user.password === password) {
                res.json("Success")
            } else {
                res.json("the password is incorrect")
            }
        } else {
            res.json("No record found")
        }
    })
})

app.post("/createUser", (req, res) => {
   UserModel.create(req.body)
   .then(users => res.json(users))
   .catch(err => res.json(err))
})

app.get("/getUser", (req, res) => {
    UserModel.find({})
   .then(users => res.json(users))
   .catch(err => res.json(err))
})

app.get("/getprods", (req, res) => {
    productmodel.find({})
    .then(products => res.json(products))
    .catch(err => res.json(err))
})

// to handle product details based on the product ID
app.get("/getprods/:_id", (req, res) => {
    const productId = req.params._id;
    productmodel.findById(productId)
      .then(product => res.json(product))
      .catch(err => res.json(err))
  });

 

app.get("/getCustomer", (req, res) => {
    CustomerModel.find({})
   .then(customer => res.json(customer))
   .catch(err => res.json(err))
})




app.listen(3016, () => {
    console.log('server is running baji')
})

//bajisapps2023@gmail.com
//QWER9876!

