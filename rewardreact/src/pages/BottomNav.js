import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import HomeIcon from "@mui/icons-material/Home";
import AccountBalanceWallet from "@mui/icons-material/AccountBalanceWallet";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MoreHoriz from "@mui/icons-material/MoreHoriz";
import { useNavigate } from "react-router-dom";

export default function BottomNav() {
  const [value, setValue] = React.useState("recents");

  let navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
            navigate("/");
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
          label="Account"
          value="Account"
          icon={<AccountCircle />}
        />
        <BottomNavigationAction
          label="More"
          value="More"
          icon={<MoreHoriz />}
        />
      </BottomNavigation>
    </Paper>
  );
}