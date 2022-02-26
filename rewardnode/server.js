/**
 * server code
 *
 * run: npm run devStart
 * to run the code in server.js
 * */

const express = require("express");
const cors = require("./cors");
const app = express();

app.options("*", cors);
app.use(cors);

console.log("server starts");

app.listen(8080, () => {
  console.log("app lunched");
});


/**
 * http methods: get, post, put, delete, patch
 * root
 * */

app.get("/", (request, response) => {
  response.json('Welcome to RewardME!');
});


/**
 * user functionalities
 * routing, locolhost:8080/users/
 */

const userRouter = require('./routes/users')
app.use('/users', userRouter)

