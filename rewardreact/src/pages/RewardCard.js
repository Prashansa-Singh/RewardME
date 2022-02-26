import { Container, CssBaseline, Grid, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Item from "@mui/material/ListItem";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import BackArrowIcon from "../res/back arrow.png";
import BinIcon from "../res/trash icon.png";
import Barcode from "../res/Bar Code.png";
import CheckBoxIcon from "../res/check box.png";
import ProgressBar from "../res/Progress Bar.png";
import RedeemRewardRed from "../res/Redeem Reward (RED).png";
import RedeemRewardGrey from "../res/Redeem Reward Grey.png";
import CardBack from "../res/Wallet - Funky Cone Back.png";

import { useParams, Link } from "react-router-dom";

export default class RewardCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TopBar />
        <CssBaseline />
        <Container maxWidth="sm">
          <CardToScan />
        </Container>
        <Container>
          <BasicCard />
        </Container>
      </React.Fragment>
    );
  }
}

function TopBar() {
  const anchor = "left";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <React.Fragment key={anchor}>
            <Link to={"/wallet"}>
              <img
                src={BackArrowIcon}
                alt="Back Arrow Icon"
                style={{
                  width: 36,
                  height: 36,
                  position: "absolute",
                  top: 20,
                  left: 20,
                }}
              />
            </Link>
            <img
              src={BinIcon}
              alt="Bin Icon"
              style={{
                width: 20,
                height: 20,
                position: "absolute",
                top: 25,
                left: 370,
              }}
            />
          </React.Fragment>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function CardToScan() {
  const theme = useTheme();
  const { slug } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/card-info", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  var stuff;
  if (!isLoading) {
    stuff = data[slug]["cardBackImg"];
  } else {
    stuff = "";
  }

  return (
    <Grid item xs={12}>
      <Item>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component="img" image={stuff} alt="" />
          </CardActionArea>
        </Card>
      </Item>
    </Grid>
  );
}

function BasicCard() {
  const { slug } = useParams();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/card-info", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  var promoMsg;
  var progressBar;
  var reward;

  if (!isLoading) {
    promoMsg = data[slug]["promoMsg"];
    progressBar = data[slug]["progress"];
    reward = data[slug]["reward"];
  } else {
    promoMsg = "";
    progressBar = "";
    reward = "";
  }

  return (
    <Grid item xs={12}>
      <Item>
        <Card sx={{ minWidth: 345, minHeight: 350 }}>
          <CardContent>
            <Typography
              variant="h6"
              align="center"
              fontFamily={"Meeriweather"}
              fontWeight="400"
            >
              RewardME Promotion
            </Typography>
            <Typography
              variant="subtitle2"
              align="left"
              fontFamily={"Meeriweather"}
            >
              {promoMsg}
            </Typography>
            <img
              src={progressBar}
              style={{
                width: 320,
                height: 55,
                position: "absolute",
                left: 30,
                top: 110,
              }}
            />
            <img
              src={reward}
              style={{
                width: 155,
                height: 33,
                position: "absolute",
                left: 115,
                top: 180,
              }}
            />
            <img
              src={Barcode}
              style={{
                width: 366,
                height: 99,
                position: "absolute",
                left: 10,
                top: 250,
              }}
            />
          </CardContent>
        </Card>
      </Item>
    </Grid>
  );
}
