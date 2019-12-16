//importa libreria express
const express = require('express')
//importa libreria de mongoose para manejar base datos NoSQL Mongo
const mongoose = require('mongoose')
//importa body-parser, parseador
const bodyParser= require('body-parser')

//Archivos de ruta
const cities = require('./routes/api/cities')
const itinerary = require('./routes/api/itinerary')
const users = require('./routes/api/users')

//Importa libreria passport
const passport= require('passport')

//Maneja Cors
const cors= require('cors')

//inicializa constante app como server Express
const app = express()

//Se le indica al server que utiliza cors
app.use(cors())

//Declaracion de variable de enrutador del servidor
var router = express.Router();

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Sirve una carpeta de archivos estaticos de forma publica
app.use(express.static('public'));

//Routes, Se le indica al servidor que usa los archivos de enrutamiento importados arriba 
app.use('/api/cities',cities);
app.use('/api/itinerary',itinerary);
app.use('/api/users',users)
 
//Base de datos MONGO
//Se declara varible con la clave de la base de datos
const db= require('./database/config/keys').mongoURI;
//Conecta con la base de datos Mongo
mongoose
.connect(db)
.then(() => console.log("MongoDB connected.."))
.catch(err => console.log(err));

//Declaracion de variable como puerto a utilizar para el servidor. 
//Se indica que utilize el puerto declarado en las varibles de entorno o en su defecto el puerto 5000
const port = process.env.PORT || 5000;

//Declaracion de puerto de escucha para el servidor
app.listen(port, () => console.log('Server started on port ' + port));

//Se importa archivo de configuracion de passport, el cual contiene las estrategias.
require("./passport"); //passport configuration

//passport middleware, se indica que utiliza passport
app.use(passport.initialize()); 

