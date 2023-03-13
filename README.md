# Safar : An Application for booking flight Tickets & services related to AirTravel
-> This Project is solely for the backend API development & integrations related to the different services 

# Safar-Search-flights-Service : This repo is search services and API related to whole backend Project

[DESIGN DOC](https://docs.google.com/document/d/18Az_VeNbd9sjkZpcMkdjBM1kimqoFTH1mbOeB14Z0Ow/edit?usp=sharing)


## Project Setup:
 - clone the project on your local ( git clone ... )
 - Execute `npm install` on the same path as of your root directory of the downloaded project
 - Create a `.env` file in the root directory and add the following environment variable.
    - `PORT=3000`
 - Inside the `src/config` folder , create a new file `config.json` and then add the following piece of json

 ```
 "development": {
    "username": <Your_DB_LOGIN_NAME>,
    "password": <Your_DB_PASSWORD>,
    "database": "Flights_Search_DB_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }

 ```

 - Once you've added your DB config as listed above,go to the src folder from your terminal and excute the command `npx sequelize db:create`
 and then execute 

 `npx sequelize db:migrate`
