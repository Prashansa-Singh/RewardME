/***
 *   RewardME app/api
 *
 * */

const express = require('express');
const {request, response} = require("express");
const cors = require('./cors');

const app = express();
app.options('*', cors);
app.use(cors)

let http = require('http');
let port = 9876;


/**
 * testing api functions
 * using localhost9876
 *
 *  * request: incoming data
 *  * response: outgoing data
 *
 *  use Fetch API to fetch
 *  https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 *
 *  APIs:
 *  - Authentication
 *  - Get cards
 *
 *  Visualise routes
 *  open two terminal commands and navigate both into `rewardnode`
 *  also open a browser
 *  - terminal1 type in: node app.js
 *      this spawn up the app/server and start the listening
 *  - terminal2 type in: curl localhost:9876/test
 *      an url address specified
 *  - type in localhost:9876 on the browser
 *
 *
 * fetch data with React by making an HTTP request to here (api)
 *
 * */

app.listen(port, () => {

    console.log("app lunched\n" +
        "CORS-enabled for localhost:3000");

})


app.get('/', (request, response) => {

    response.send("RewardME APP");

});


app.get('/test', (request, response) => {

    response.send("Hello Ed");

});

