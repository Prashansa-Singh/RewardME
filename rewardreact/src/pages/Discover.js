import React from "react";
import rLogoImg from "../res/RLogoScaled.png";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Container, Grid, Typography } from "@mui/material";

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import { discoverData } from "../DiscoverImages";


const Discover = () => {
  return (
    <React.Fragment>
        <TopBar />
        <Container>
            <Typography
                variant="body2"
                lineHeight={5}
            >
                You may be interested in
            </Typography>
        </Container>
        <TestImageList />
    </React.Fragment>
  );
};

export default Discover;

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
                        position: "absolute",
                        top: 30,
                        left: 344,
                    }}
                />
            </React.Fragment>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }

  function TestImageList() {
      return (
        <ImageList sx={{ width: 400, height: 700 }} cols={3} rowHeight={164}>
        {discoverData.map((item) => (
          <ImageListItem key={item.img_src}>
            <img src={item.img_src} />
          </ImageListItem>
        ))}
      </ImageList>
      );
  }