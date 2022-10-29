import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import "./Banner.css";
import bi from "./banner2.jpg"
import Crousel from "../Corusal/Crousel";


const Banner = () => {
  return (
  <>
 <div className="Banner"
 style={{
              backgroundImage: `url(${bi})`,
            }}
 >
 <Container className="Bannerr">
 <div className="tagline">
  <Typography
   variant = "h2"
    sx={{
      fontWeight:"bold",
      fontFamily:"montserrat",
      color:"white",
    }}>
     Crypto-Tracker
  </Typography>
  <Typography
  variant="subtitle2"
  sx={{
    color:"darkgrey",
    textTransform: "capitalize",
    fontFamily:"montserrat",
  }}>
    Get all the information about your favourite crypto currency
  </Typography>
 </div>
 <Crousel/>
 </Container>

 </div>
  </>
  )

};

export default Banner;
