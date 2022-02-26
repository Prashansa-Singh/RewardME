import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/ListItem";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AddCard from "@mui/icons-material/AddCard";

import rLogoImg from "../res/RLogoScaled.png";
import AddBoxIcon from "../res/add box.png";
import SearchBoxIcon from "../res/search.png";


const Wallet = () => {
  // // Fetch from nodejs
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/", {
      mode: "cors",
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <TopBar />
      <Container maxWidth="sm">
        <Grid container spacing={2}>
          {data.map((card) => {
            return <RewardCard key={card.id} {...card}></RewardCard>;
          })}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

function RewardCard(props) {
  const { id, name, img } = props;
  return (
    <Grid item xs={12}>
      <Item>
        <Card>
          <CardActionArea>
            <CardMedia component="img" image={img} alt="" />
          </CardActionArea>
        </Card>
      </Item>
    </Grid>
  );
}

// Components for the navbar
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

//The top nav bar
function SearchAppBar() {
  // Temporary drawer (the side popup menu)
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button key="Add Card">
          <ListItemIcon>
            <AddCard />
          </ListItemIcon>
          <ListItemText primary="Add Card" />
        </ListItem>
      </List>
      <Divider />
    </Box>
  );

  const anchor = "left";

  //Return code
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <React.Fragment key={anchor}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(anchor, true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            RewardME
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

function TopBar() {
  
  const anchor = "left";

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <React.Fragment key={anchor}>
          <img 
              src={rLogoImg} 
              alt="R logo"
              style={{
                width: 36, 
                height: 36, 
                position: 'absolute', 
                top: 10, 
                left: 20
              }}
          />
          <img 
              src={SearchBoxIcon} 
              alt="Search Box"
              style={{
                width: 30, 
                height: 30, 
                position: 'absolute', 
                top: 15, 
                left: 310
              }}
          />
          <img 
              src={AddBoxIcon} 
              alt="Add Box"
              style={{
                width: 30, 
                height: 30, 
                position: 'absolute', 
                top: 15, 
                left: 350
              }}
          />
          </React.Fragment>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Wallet;
