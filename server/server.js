const express = require('express')
const mongoose = require('mongoose')
const bodyParser= require('body-parser')
const cities = require('./routes/api/cities')



const app = express()
var router = express.Router();

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Routes 
app.use('/api/cities',cities);

router.get('/', function (req, res) {
  res.send('Hello World')
})

router.get('/test', function(req, res) {
  res.send('Yo soy la pagina de TEst') 
})
 
//Connect to Mongo
const db= require('./database/config/keys').mongoURI;
mongoose
.connect(db)
.then(() => console.log("MongoDB connected.."))
.catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Server started on port ' + port));





//Drive de coneccion actualizado
/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://miguelangel:<alma1234>@mytinerary-r5zim.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});*/