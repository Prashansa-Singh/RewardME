import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWallet from "@mui/icons-material/AccountBalanceWallet";
import Person from "@mui/icons-material/Person";
import ShoppingBag from "@mui/icons-material/ShoppingBag";
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import AccountCircle from "@mui/icons-material/AccountCircle";

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#E84855",
    },
  },
});

export default function BottomNav() {
  const [value, setValue] = React.useState("recents");

  let navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          boxShadow:
            "-6px -6px 30px rgba(67, 93, 107, 0.25), 6px 6px 30px rgba(67, 93, 107, 0.25)",
        }}
        elevation={3}
      >
        <BottomNavigation
          sx={{ width: "100%" }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label="Home"
            value="Home"
            icon={<HomeIcon />}
            onClick={() => {
              navigate("/home");
            }}
          />
          <BottomNavigationAction
            label="Wallet"
            value="Wallet"
            icon={<AccountBalanceWallet />}
            onClick={() => {
              navigate("/wallet");
            }}
          />
          <BottomNavigationAction
            label="Discover"
            value="Discover"
            icon={<ShoppingBag />}
            onClick={() => {
              navigate("/discover");
            }}
          />
          <BottomNavigationAction
            label="Account"
            value="Account"
            icon={<AccountCircle />}
            onClick={() => {
              navigate("/account");
            }}
          />
          <BottomNavigationAction
            label="Account"
            value="Account"
            icon={<Person />}
          />
        </BottomNavigation>
      </Paper>
      <Outlet />
    </ThemeProvider>
  );
}
