import {
  AppBar,
  createTheme,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../../CryptoContext";
const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  const { currency, setCurrency } = CryptoState();
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography onClick={handleClick} className="crypto" variant="h6">
              Crypto-Tracker
            </Typography>
            <Select
              variant="outlined"
              sx={{
                width: "100",
                height: "40",
                marginRight: "15",
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
