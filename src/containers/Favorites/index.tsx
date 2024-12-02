import { FavoritesStyled } from "./styled";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Favorite1 from "../../assets/Favorite/favorite1.png";
import Favorite2 from "../../assets/Favorite/favorite2.png";
import Favorite3 from "../../assets/Favorite/favorite3.png";
import Favorite4 from "../../assets/Favorite/favorite4.png";
import Favorite5 from "../../assets/Favorite/favorite5.png";
import Favorite6 from "../../assets/Favorite/favorite6.png";
import Favorite7 from "../../assets/Favorite/favorite7.png";
import Favorite8 from "../../assets/Favorite/favorite8.png";
import Favorite9 from "../../assets/Favorite/favorite9.png";
import Favorite10 from "../../assets/Favorite/favorite10.png";
import NewImg1 from "../../assets/hang-moi/1.png";
import NewImg2 from "../../assets/hang-moi/2.png";
import NewImg3 from "../../assets/hang-moi/3.png";
import NewImg4 from "../../assets/hang-moi/4.png";
import NewImg5 from "../../assets/hang-moi/5.png";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const ImageArr = [
  {
    id: 1,
    img: Favorite1,
    title: "Royal Canin",
    content:
      "Thức Ăn Hạt Cho Mèo Trưởng Thành Nuôi Trong Nhà Royal Canin Indoor 27",
    price: "70.000đ",
    discount: "132.000đ",
  },
  {
    id: 2,
    img: Favorite2,
    title: "Royal Canin",
    content: "Thức Ăn Cho Mèo Royal Canin British Shorthair Kitten, 2kg",
    price: "480.000đ",
    discount: "644.000đ",
  },
  {
    id: 3,
    img: Favorite3,
    title: "Royal Canin",
    content: "Hạt Mother & Babycat Royal Canin 400gr",
    price: "150.000đ",
    discount: "210.000đ",
  },
  {
    id: 4,
    img: Favorite4,
    title: "Royal Canin",
    content: "Thức Ăn Hạt Cho Mèo Anh lông ngắn Trưởng Thành Royal Canin",
    price: "120.000đ",
    discount: "190.000đ",
  },
  {
    id: 5,
    img: Favorite5,
    title: "Royal Canin",
    content: "Thức ăn cho mèo trưởng thành ROYAL CANIN Regular Fit 32",
    price: "99.000đ",
    discount: "132.000đ",
  },
  {
    id: 6,
    img: Favorite6,
    title: "Royal Canin",
    content: "Pate Mèo Tiêu Búi Lông Royal Canin Hairball 85g",
    price: "24.000đ",
    discount: "39.000đ",
  },
  {
    id: 7,
    img: Favorite7,
    title: "Royal Canin",
    content: "Pate Mèo Royal Canin Sensory Kích Thích Giác Quan 85g",
    price: "40.000đ",
    discount: "50.000đ",
  },
  {
    id: 8,
    img: Favorite8,
    title: "Royal Canin",
    content:
      "Thức Ăn Hạt Cho Mèo Trưởng Thành Triệt Sản Royal Canin Sterilised",
    price: "100.000đ",
    discount: "180.000đ",
  },
  {
    id: 9,
    img: Favorite9,
    title: "Royal Canin",
    content: "Pate Mèo Mẹ & Mèo Con Royal Canin Mother & Babycat (Lon 195g)",
    price: "69.000đ",
    discount: "78.000đ",
  },
  {
    id: 10,
    img: Favorite10,
    title: "Royal Canin",
    content:
      "Thức Ăn Hạt Cho Mèo Trưởng Thành Vận Động Thường Xuyên Royal Canin Fit 32",
    price: "100.000đ",
    discount: "118.000đ",
  },
];
export const NewImage = [
  {
    id: 1,
    img: NewImg1,
    title: "Hana Pet",
    content: "Bọt Tắm Khô Cho Chó Mèo Hana Pet Mini 320ML",
    price: "100.000đ",
    discount: "300.000đ",
  },
  {
    id: 2,
    img: NewImg2,
    title: "Farmina",
    content:
      "Thức Ăn Hạt Cho Mèo Trưởng Thành nuôi Trong Nhà Royal Canin Indoor 27",
    price: "500.000đ",
    discount: "800.000đ",
  },
  {
    id: 3,
    img: NewImg3,
    title: "Kelly & Co's",
    content: "Thịt Sấy Cho Mèo Kelly & Co's Freeze Dried Raw Dinner",
    price: "250.000đ",
    discount: "310.000đ",
  },
  {
    id: 4,
    img: NewImg4,
    title: "Kucinta",
    content: "Pate Cho Mèo Trưởng Thành Kucinta Lon 150g",
    price: "120.000đ",
    discount: "250.000đ",
  },
  {
    id: 5,
    img: NewImg5,
    title: "PetQ",
    content: "Pate Mèo Sữa Dê PetQ 70g",
    price: "99.000đ",
    discount: "132.000đ",
  },
];
const Favorites = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 450px)");

  return (
    <FavoritesStyled>
      <Box className="favorite-title">
        <Typography fontWeight="bold" fontSize={27}>
          Được boss yêu thích
        </Typography>
        <Typography
          sx={{ textDecoration: "underline", cursor: "pointer" }}
          fontSize={17}
          onClick={() => navigate("/child-page")}
        >
          Xem Tất Cả
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          transform: "translateY(10rem)",
        }}
      >
        {isMobile ? (
          <ArrowBackIosIcon color="warning" fontSize="large" />
        ) : (
          <></>
        )}
        {isMobile ? (
          <ArrowForwardIosIcon color="warning" fontSize="large" />
        ) : (
          <></>
        )}
      </Box>
      <Box
        sx={{
          height: { xl: "auto", xs: "42vh" },
          overflow: "hidden",
          margin: { xl: "0 0 0 2rem", xs: 0 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 1, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 11.8 }}
        >
          {ImageArr.map((item) => (
            <Grid item xs={2} sm={4} md={2.3} key={item.id}>
              <Box
                onClick={() => navigate("/child-page")}
                className="favorite-container"
              >
                <img className="favorite-image" src={item.img} alt="" />
                <Box className="favorite-name-tag">
                  <Box>
                    <Typography
                      className="favorite-title"
                      fontSize={!isMobile ? 17 : 14}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      className="favorite-discount"
                      fontSize={!isMobile ? 15 : 14}
                    >
                      {item.discount}
                    </Typography>
                  </Box>
                  <Typography className="favorite-price">
                    {item.price}
                  </Typography>
                </Box>
                <Typography
                  className="favorite-content"
                  fontSize={!isMobile ? 15 : 14}
                >
                  {item.content}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#FF7D29",
                  height: !isMobile ? "3rem" : "2rem",
                  borderRadius: "10px",
                  margin: "0.5rem 0 1.5rem 0",
                }}
                onClick={() => navigate("/child-page")}
              >
                <Typography
                  sx={{ color: "#fff", cursor: "pointer" }}
                  fontSize={17}
                >
                  Thêm vào giỏ hàng
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className="favorite-title">
        <Typography fontWeight="bold" fontSize={27}>
          Hàng mới về
        </Typography>
        <Typography
          sx={{ textDecoration: "underline", cursor: "pointer" }}
          fontSize={17}
          onClick={() => navigate("/child-page")}
        >
          Xem Tất Cả
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          transform: "translateY(10rem)",
        }}
      >
        {isMobile ? (
          <ArrowBackIosIcon color="warning" fontSize="large" />
        ) : (
          <></>
        )}
        {isMobile ? (
          <ArrowForwardIosIcon color="warning" fontSize="large" />
        ) : (
          <></>
        )}
      </Box>
      <Box
        sx={{
          height: { xl: "auto", xs: "42vh" },
          overflow: "hidden",
          margin: { xl: "0 0 0 2rem", xs: 0 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 2, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 11.8 }}
        >
          {NewImage.map((item) => (
            <Grid item xs={2} sm={4} md={2.3} key={item.id}>
              <Box
                onClick={() => navigate("/child-page")}
                className="news-container"
              >
                <img className="favorite-image" src={item.img} alt="" />
                <Box className="favorite-name-tag">
                  <Box>
                    <Typography
                      className="favorite-title"
                      fontSize={!isMobile ? 17 : 14}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      className="favorite-discount"
                      fontSize={!isMobile ? 15 : 14}
                    >
                      {item.discount}
                    </Typography>
                  </Box>
                  <Typography className="favorite-price">
                    {item.price}
                  </Typography>
                </Box>
                <Typography
                  className="favorite-content"
                  fontSize={!isMobile ? 15 : 14}
                >
                  {item.content}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#FF7D29",
                  height: "3rem",
                  borderRadius: "10px",
                  margin: "0.5rem 0 1rem 0",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/child-page")}
              >
                <Typography sx={{ color: "#fff" }} fontSize={17}>
                  Thêm vào giỏ hàng
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </FavoritesStyled>
  );
};

export default Favorites;
