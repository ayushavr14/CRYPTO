import React, { useEffect, useState } from "react";
import "./crousel.css";
import axios from "axios";
import { CryptoState } from "../../CryptoContext";
import { TrendingCoins } from "../../config/api";
import AliceCarousel from "react-alice-carousel";
import { Link } from "react-router-dom";

export function numberWithCommas(x) {
  return x.toString().replace(/B(?=(\d{3})+(?!\d))/g, ",");
}
const Crousel = () => {
  const [trending, setTrending] = useState([]);

  const { currency, symbol } = CryptoState();

  // fething data
  var fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  }

  useEffect(() => {
    fetchTrendingCoins();    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);
  
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };

  const coin = trending.map((item) => {
    let profit = item.price_change_percentage_24h >= 0;
    return (
      <Link className="carouselItem" to={`/coins/${item.id}`}>
        <img src={item?.image} alt={item.name} style={{ height: 120 }} />
        <span>
          {item?.symbol}
          &nbsp;
        </span>
        <span style={{
          color: profit > 0 ? "rgb(14,203,129)" : "red",
          fontWeight:500,
        }}>
          {profit && "+"} {item?.price_change_percentage_24h?.toFixed(2)}%
        </span>
        <span style={{ fontSize: 22, fontWeight: 500}}>
          {symbol} {numberWithCommas(item?.current_price.toFixed(2))}
        </span>
      </Link>
    );
  });

  return (
    <div className="crousel">
      <AliceCarousel
        mouseTracking
        infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        autoPlay
        items={coin}
      />
    </div>
  );
};

export default Crousel;
