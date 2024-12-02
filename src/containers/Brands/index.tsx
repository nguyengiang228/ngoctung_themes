import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { BrandStyle } from "./styled";
import Brand1 from "../../assets/Brands/brand1.png";
import Brand2 from "../../assets/Brands/brand2.png";
import Brand3 from "../../assets/Brands/brand3.png";
import Brand4 from "../../assets/Brands/brand4.png";
import Brand5 from "../../assets/Brands/brand5.png";
import Brand6 from "../../assets/Brands/brand6.png";
import Brand7 from "../../assets/Brands/brand7.png";
import Brand8 from "../../assets/Brands/brand8.png";
import Brand9 from "../../assets/Brands/brand9.png";
import Brand10 from "../../assets/Brands/brand10.png";
import Brand11 from "../../assets/Brands/brand11.png";
import Brand12 from "../../assets/Brands/brand12.png";
import Brand13 from "../../assets/Brands/brand13.png";
import Brand14 from "../../assets/Brands/brand14.png";
import Brand15 from "../../assets/Brands/brand15.png";
import Brand16 from "../../assets/Brands/brand16.png";
import News1 from "../../assets/Brands/news1.jpg";
import News2 from "../../assets/Brands/new2.jpg";
import News3 from "../../assets/Brands/new3.jpg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Brands = () => {
  const brands = [
    {
      id: 1,
      src: Brand1,
      title: "Nutrience",
    },
    {
      id: 2,
      src: Brand2,
      title: "Royal Canin",
    },
    {
      id: 3,
      src: Brand3,
      title: "Hi Raw!",
    },
    {
      id: 4,
      src: Brand4,
      title: "Equilibrio",
    },
    {
      id: 5,
      src: Brand5,
      title: "Kit Cat",
    },
    {
      id: 6,
      src: Brand6,
      title: "Tropiclean",
    },
    {
      id: 7,
      src: Brand7,
      title: "Ciao Churu",
    },
    {
      id: 8,
      src: Brand8,
      title: "Lapaw",
    },
    {
      id: 9,
      src: Brand9,
      title: "Nekko",
    },
    {
      id: 10,
      src: Brand10,
      title: "Monge",
    },
    {
      id: 11,
      src: Brand11,
      title: "Zenith",
    },
    {
      id: 12,
      src: Brand12,
      title: "ANF",
    },
    {
      id: 13,
      src: Brand13,
      title: "Gimcat",
    },
    {
      id: 14,
      src: Brand14,
      title: "Inaba",
    },
    {
      id: 15,
      src: Brand15,
      title: "Me-O",
    },
    {
      id: 16,
      src: Brand16,
      title: "Absolute Holistic",
    },
  ];

  const newsArrr = [
    {
      id: 1,
      src: News1,
      title: "Nhu Cầu Dinh Dưỡng Của Chó Theo Từng Giai Đoạn",
      content:
        "Nuôi chó là một hành trình thú vị và đầy thử thách. Quá trình này đòi hỏi sự hiểu biết về các giai đoạn phát triển của thú cưng...",
    },
    {
      id: 2,
      src: News2,
      title: "Những Mẫu đồ chơi cho chó nhỏ ngộ nghĩnh",
      content:
        "Nuôi chó là một hành trình thú vị và đầy thử thách. Quá trình này đòi hỏi sự hiểu biết về các giai đoạn phát triển của thú cưng...",
    },
    {
      id: 3,
      src: News3,
      title: "Những Sai lầm thường thấy khi chọn phụ kiện thú cưng",
      content:
        "Nuôi chó là một hành trình thú vị và đầy thử thách. Quá trình này đòi hỏi sự hiểu biết về các giai đoạn phát triển của thú cưng...",
    },
  ];
  const isMobile = useMediaQuery("(max-width: 450px)");
  return (
    <BrandStyle>
      <Box className="brands-title">
        <Typography fontWeight="bold" fontSize={!isMobile ? 27 : 20}>
          1000+ Thương Hiệu Boss Thích
        </Typography>
        <Typography
          sx={{ textDecoration: "underline", cursor: "pointer" }}
          fontSize={17}
        >
          Xem Tất Cả
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          transform: "translate(-.5rem, 8rem)",
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
          width: { xs: "94%", xl: "auto" },
          height: { xl: "auto", xs: "24vh" },
          overflow: "hidden",
          margin: { xl: "0 0 0 2rem", xs: 0 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 1, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {brands.map((item) => (
            <Grid item xs={2} sm={4} md={1.46} key={item.id}>
              <Box className="brands-container">
                <img className="brands-image" src={item.src} alt="" />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box>
        <Box className="brands-title">
          <Typography fontWeight="bold" fontSize={!isMobile ? 27 : 20}>
            Chăm Boss Cùng Lolipet
          </Typography>
          <Typography
            sx={{ textDecoration: "underline", cursor: "pointer" }}
            fontSize={17}
          >
            Xem Tất Cả
          </Typography>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            transform: "translate(-.5rem, 18rem)",
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
            width: { xs: "100%", xl: "auto" },
            height: { xl: "auto", xs: "59vh" },
            overflow: "hidden",
            margin: { xl: "0 0 0 0.5rem", xs: 0 },
          }}
        >
          <Grid
            container
            spacing={{ xs: 1, md: 1 }}
            columns={{ xs: 1, sm: 8, md: 12 }}
          >
            {newsArrr.map((item) => (
              <Grid item xs={1} sm={4} md={4} key={item.id}>
                <Box className="brands-news-container" key={item.id}>
                  <img src={item.src} />
                  <Box className="brand-text">
                    <Typography
                      sx={{
                        color: "#FF7D29",
                        mb: { xl: "5px", xs: "2px" },
                        height: "5rem",
                      }}
                      fontWeight="bold"
                      fontSize={!isMobile ? 25 : 19}
                    >
                      {item.title}
                    </Typography>
                    <Typography>{item.content}</Typography>
                    <Typography
                      sx={{ color: "#FF7D29", textDecoration: "underline" }}
                    >
                      Đọc thêm
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </BrandStyle>
  );
};

export default Brands;
