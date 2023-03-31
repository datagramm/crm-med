const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const userRoutes = require('../routers/userRoutes')
const databaseSetup = require('./databaseSetup')
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, '/view');
app.use(express.static(static_path));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



const corsOption = {
 origin: "http://localhost:8080",
    methods: "*",
    credentials: true,
}
app.use(cors(corsOption))
app.use('/', userRoutes);
app.get('/', (req,res) => {
    res.sendFile(path + 'index.html')
})


databaseSetup.connectToDataBase()


app.listen(port, () => {
    console.log(`server is running at ${port}`)
})