import { Container, Typography } from "@mui/material";
import React from "react";
import rLogoImg from "../res/RLogoScaled.png";
import fullLogoImg from "../res/RewardMEResized.png";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

const winWidth = window.innerWidth;
const winHeight = window.innerHeight;

// fetch('http://localhost:8080/', {
//     mode: 'cors',
// })
//     .then(res => res.json())
//     .then(data => console.log(data));

const Home = () => {
  return (
    <div>
      <div>
        <MenuIcon
          style={{
            width: 36,
            height: 36,
            position: "absolute",
            top: 30,
            left: 25,
          }}
        />
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
        <img
          src={fullLogoImg}
          alt="Full logo"
          style={{
            width: 286,
            height: 83,
            position: "absolute",
            top: 136,
            left: 65,
          }}
        />
      </div>
      <div
        style={{
          position: "absolute",
          width: 337,
          height: 52,
          top: 306,
          left: 40,
        }}
      >
        <Typography
          variant="h5"
          align="center"
          fontFamily={"Poppins"}
          fontSize="24"
          fontWeight="500"
        >
          Store all your digital rewards cards in one place
        </Typography>
      </div>
    </div>
  );
};

export default Home;
