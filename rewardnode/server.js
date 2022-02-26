/**
 * server code
 *
 * run: npm run devStart
 * to run the code in server.js
 *
 * */

const express = require("express");
const cors = require('./cors');
const app = express();

const cardNames = [
    {
        id: 1,
        name: "Tim's socks",
        img: "https://www.nab.com.au/content/dam/nabrwd/personal/banking/images/nab-rewards-platinum-card.png",
    },
    {
        id: 2,
        name: "Peppercorns",
        img: "https://www.creditcard.com.au/wp-content/uploads/2011/11/cba-awards-credit-card.png",
    },
    {
        id: 3,
        name: "Baka mitai",
        img: "https://www.debitcards.com.au/wp-content/uploads/2013/08/westpac-choice-debit-card.png",
    },
];

app.options('*', cors);
app.use(cors);

console.log("server starts");

app.listen(8080, () => {
    console.log("app lunched")
})


app.get('/', (request, response) => {
    response.json(cardNames);
})
