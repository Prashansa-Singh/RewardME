/***
 *   RewardME app/api
 *
 * */

const express = require('express');
const {request, response} = require("express");
const app = express();


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
 * */

app.listen(9876, () => {

    console.log("Hi John!");

})


app.get('/', (request, response) => {

    response.send("Hello Teebana");

});


app.get('/test', (request, response) => {

    response.send("Hello Ed");

});
