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
  response.json("Welcome to RewardME!");
});

/**
 * user functionalities
 * routing, locolhost:8080/users/
 */

const userRouter = require("./routes/users");
app.use("/users", userRouter);

/* 
Leo's garbage that he needs to get frontend working
~~~~~~PLS DON'T DELETEEEEEE~~~~~~
 */

const walletInfo = [
  {
    id: 1,
    name: "funky_cone",
    img: "https://cdn.discordapp.com/attachments/947107717972107314/947110114333175818/Funky_Cone.png",
  },
  {
    id: 2,
    name: "eds_authentic_tea",
    img: "https://cdn.discordapp.com/attachments/947107717972107314/947110115247546429/Ed_s_Authentic_Tea_Front.png",
  },
  {
    id: 3,
    name: "castros_burgers",
    img: "https://cdn.discordapp.com/attachments/947107717972107314/947110114765205514/Castro_s_Burger_Front.png",
  },
];

app.get("/wallet-info", (request, response) => {
  response.json(walletInfo);
});

const cardInfo = {
  funky_cone: {
    cardBackImg:
      "https://cdn.discordapp.com/attachments/947107717972107314/947110115532746752/Funky_Cone_Back.png",
    promoMsg:
      "Purchase another Funky Cone and get another with any free toppings",
    barcode:
      "https://cdn.discordapp.com/attachments/946567129677856788/947107249178943548/Bar_Code.png",
    progress:
      "https://cdn.discordapp.com/attachments/947107717972107314/947125150858489866/4_ticks.png",
    reward:
      "https://cdn.discordapp.com/attachments/947107717972107314/947124877977079818/Redeem_Reward_Grey.png",
  },
  eds_authentic_tea: {
    cardBackImg:
      "https://cdn.discordapp.com/attachments/947107717972107314/947110115037814875/Ed_s_Authentic_Tea_Back.png",
    promoMsg:
      "Purchase any 3 more beverages to get a free Special Ed's Tea Gift Pack",
    barcode:
      "https://cdn.discordapp.com/attachments/946567129677856788/947107249178943548/Bar_Code.png",
    progress:
      "https://cdn.discordapp.com/attachments/947107717972107314/947125150669766696/Progress_Bar.png",
    reward:
      "https://cdn.discordapp.com/attachments/947107717972107314/947124877977079818/Redeem_Reward_Grey.png",
  },
  castros_burgers: {
    cardBackImg:
      "https://cdn.discordapp.com/attachments/947107717972107314/947110114547073094/Castro_s_Burger_Back.png",
    promoMsg:
      "You are eligible for a 30% off discount for making 6 Supreme Castro Burger purchase ",
    barcode:
      "https://cdn.discordapp.com/attachments/946567129677856788/947107249178943548/Bar_Code.png",
    progress:
      "https://cdn.discordapp.com/attachments/947107717972107314/947125150460027011/Full_ticks_progress.png",
    reward:
      "https://cdn.discordapp.com/attachments/947107717972107314/947124878153248798/Redeem_Reward_RED.png",
  },
};

app.get("/card-info", (request, response) => {
  response.json(cardInfo);
});
