import React from "react";
import rLogoImg from "../res/RLogoScaled.png";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Container, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useNavigate } from "react-router-dom";

const Account = () => {
  return (
    <React.Fragment>
        <TopBar />
        <AccountCircleIcon
            style={{
                width: 150,
                height: 150,
                position: 'absolute',
                top: 90,
                left: 130,
            }}
        />
        <div
            style={{
              position: "absolute",
              top: 210,
              left: 150,
            }}
        >
            <h2>Username</h2>
        </div>
        <div
            style={{
              position: "absolute",
              width: 400,
              top: 350,
              left: 10
            }}
        >
            <OutlinedButtons />
        </div>
        <ContainedButtons/>
        
    </React.Fragment>
  );
};

export default Account;

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

function OutlinedButtons() {
  return (
    <Stack  spacing={2}>
      <Typography>
        SHARE    
      </Typography>
      <Button 
        variant="outlined"
      >
          Refer a friend
      </Button>
      <p>SETTINGS</p>
      <Button 
        variant="outlined"
      >
          Security
      </Button>
      <p>OTHER</p>
      <Button 
        variant="outlined"
      >
          Help
      </Button>
      <Button 
        variant="outlined"
      >
          Contact Support
      </Button>
    </Stack>
  );
}

function ContainedButtons() {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        let path = '/login'; 
        navigate(path);
    }
    return (
      <Stack direction="row" spacing={2}>
          <Button 
              variant="contained" 
              color="error" 
              style={{
                  width: 200,
                  top: 670,
                  left: 110
              }}
              onClick={routeChange}
          >
              LOG OUT
          </Button>
      </Stack>
    );
  }

