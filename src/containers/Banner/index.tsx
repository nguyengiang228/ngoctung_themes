import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Banner1 from "../../assets/banner/banner1.png";
import Banner2 from "../../assets/banner/banner2.png";
import Banner3 from "../../assets/banner/banner3.png";
import Banner4 from "../../assets/banner/banner4.png";
// import "./styled.css";
import { BannerStyle } from "./styled";
import { useMediaQuery } from "@mui/material";

const Banner = () => {
  const isMobile = useMediaQuery("(max-width: 450px");

  return (
    <BannerStyle>
      {/* <img src={Banner1} alt="" className="w-full h-full" /> */}
      <Slide
        slidesToScroll={1}
        slidesToShow={1}
        indicators={true}
        arrows={false}
        duration={3000}

        // autoplay={false}
      >
        <div style={{}}>
          <img className="banner-image" src={Banner1} alt="" />
        </div>
        <div style={{}}>
          <img className="banner-image-jpg" src={Banner2} alt="" />
        </div>
        <div style={{}}>
          <img className="banner-image-jpg" src={Banner3} alt="" />
        </div>
        <div style={{}}>
          <img className="banner-image-jpg" src={Banner4} alt="" />
        </div>
      </Slide>
    </BannerStyle>
  );
};

export default Banner;
