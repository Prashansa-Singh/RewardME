import { Container, CssBaseline, Grid, Paper } from "@mui/material";
import React from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { CardActionArea } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Item from "@mui/material/ListItem";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import BackArrowIcon from "../res/back arrow.png";
import BinIcon from "../res/trash icon.png";
import Barcode from "../res/Bar Code.png";
import CheckBoxIcon from "../res/check box.png";
import ProgressBar from "../res/Progress Bar.png";
import RedeemRewardRed from "../res/Redeem Reward (RED).png";
import RedeemRewardGrey from "../res/Redeem Reward Grey.png";
import CardBack from "../res/Wallet - Funky Cone Back.png";



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
            <img
              src={BackArrowIcon}
              alt="Back Arrow Icon"
              style={{
                width: 36, 
                height: 36, 
                position: 'absolute', 
                top: 20, 
                left: 20
              }} 
            />
            <img
              src={BinIcon}
              alt="Bin Icon"
              style={{
                width: 20, 
                height: 20, 
                position: 'absolute', 
                top: 25, 
                left: 370
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
  return (
    <Grid item xs={12}>
      <Item>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component="img" image={CardBack} alt="" />
          </CardActionArea>
        </Card>
      </Item>
    </Grid>
  );
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function BasicCard() {
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
              Purchase any 3 more beverages to get a free Special Ed’s Tea Gift Pack
            </Typography>
            <img 
              src={ProgressBar}
              style={{
                width: 320, 
                height: 55, 
                position: 'absolute', 
                left: 30,
                top: 110
              }}
            />
            <img 
              src={RedeemRewardGrey}
              style={{
                width: 155, 
                height: 33, 
                position: 'absolute', 
                left: 115,
                top: 180
              }}
            />
            <img 
              src={Barcode} 
              style={{
                width: 366, 
                height: 99, 
                position: 'absolute', 
                left: 10,
                top: 250
              }}
            />
          </CardContent>
        </Card>
      </Item>
    </Grid>
  );
}
