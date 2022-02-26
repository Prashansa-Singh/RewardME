import { Container, CssBaseline, Grid } from "@mui/material";
import React from "react";
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardActionArea } from "@mui/material";
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Item from "@mui/material/ListItem";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


export default class RewardCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <DenseAppBar />
        <CssBaseline />
        <Container maxWidth="sm">
        <Grid container spacing={2}>
          <MediaControlCard />
        </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

function MediaControlCard() {
  const theme = useTheme();
  return (
    <Grid item xs={12}>
      <Item>
      <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component="img" image="https://lh3.googleusercontent.com/fife/AAWUweVKtJQawZJjUQHHl5cOkC39kLmy9sus6raYE_h942Il7QCHl3geOUxr1tsa64hvu0u_tdYagRrR0PXdF2qraRqG1VeMqia_nflEUwYz-f9Z6RTu_9KGLkzG2y4mpmdKBBFpY2qaU0HUHozhUbOy6yqFtTjeMCCms6soa1hyIaccKYTdZFhWL4kcODyTD_fxAa2N1gdBi3m1jIjEuzTiqr4TKO8oQTedyi6O88pgD_kfVPyoWpKBxT2l-i-Jf3zAlaK_oZ4Wx7Tyb746LqcbCOlyoilYPqFgc4yBDl8ElDgLnr0R5TzpZ6_WaE8FzVz1YFn_VrY25HvZ5C20vs8g3qOSR0p5kXSmfasx_VAtWxRRWykYe4uUiav4W5YMOnCuYGEtD28wFpLRhEN3FpmTEWkrUL0JL5WrIlOcNLe3E3wjwz-a4SMJeqGcRI6w11Q_a9nxXDtGLPkaPsrwC3Jc4jfaUaCksFHS5eaEdjBw_FGZGB-dN3BXQ4b-nOW1Smj6JuN0QKqxXHdE27enc30hO3gJF5Lo2oxa1OYDGiop6ERmbAd-QVCLp7F5902tNaju83VQgGhCZjmN1v4ifY6ls1toHCuoc6csTrquxYDV0o1aYx0zUqWEF3a3wvRiJokCAHJNoR9c1W5GFR_hPnWRQJLzgYVvVXZ2wvHzaRI5wUYC9cagjwEv8DIWzDCE3Zl7AnOGMwe4EapYIQrf2fe82GF_L92Pr7zuPuo=w1133-h1356" alt="" />
          </CardActionArea>
        </Card>
      </Item>
    </Grid>
  );
}

function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton 
            size="large"
            edge="start" 
            color="inherit" 
            aria-label="menu" 
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h6"
            noWrap 
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Reward Card
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
