import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../config/api";
import "../pages/coinspage.css"
import axios from "axios";
import { Typography } from "@mui/material";

export const CoinsPage = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState();

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };
  useEffect(() => {
    fetchCoin(); //eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container">
        <div className="sidebar">
          <img 
            src={coin?.image.large}
            alt={coin?.name}
            height="200"
          style={{marginBottom:20}}
          />
          <Typography variant="h3" className="heading">
           {coin?.name}
          </Typography>
          <Typography variant="subtitle1" className="description">
            {coin?.description.en.split(". ")[0]}.
          </Typography>
          <div></div>
        </div>

      </div>
    </>
  );
};

export default CoinsPage;
