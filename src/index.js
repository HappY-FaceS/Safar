const express = require('express');
const bodyParser = require('body-parser');
const City = require('./models/index');
const {PORT}=require('./config/serverConfig');



const ApiRoutes = require('./routes/index');

const db = require('./models/index');
// const {City, Airport} = require('./models/index');

const  setupAndStartServer =async()=>{
    // create express object

    const app = express();
    
    app.use(bodyParser.json()); // middleware
    app.use(bodyParser.urlencoded({extended: true})); // middleware

    app.use('/api', ApiRoutes); // city API route


    app.listen(PORT, async ()=>{
        console.log(`Server started at ${PORT}`);
        /**
        if(process.env.SYNC_DB) {
            db.sequelize.sync({alter: true});
        }
         */
    });
}

setupAndStartServer();