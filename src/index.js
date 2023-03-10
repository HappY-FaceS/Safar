const express = require('express');
const bodyParser = require('body-parser');


const {PORT}=require('./config/serverConfig');

const  setupAndStartServer =async()=>{
    // create express object

    const app = express();
    
    app.use(bodyParser.json()); // middleware
    app.use(bodyParser.urlencoded({extended: true})); // middleware


    app.listen(PORT,()=>{
        console.log(`Server started at ${PORT}`);
    });
}

setupAndStartServer();