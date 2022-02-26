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

function MediaControlCard(props) {
  const theme = useTheme();
  const { id, name, img } = props;
  return (
    <Grid item xs={12}>
      <Item>
      <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia component="img" height="200" image={img} alt="" />
            <CardContent>
              <Typography variant="h6" component="div">
                {name}
              </Typography>
            </CardContent>
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
