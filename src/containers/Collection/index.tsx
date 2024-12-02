import React from "react";
import { CollectionStyle } from "./styled";
import { Box, Typography, useMediaQuery } from "@mui/material";
import Mask1 from "../../assets/category/Mask1.png";
import Mask2 from "../../assets/category/Mask2.png";
import Mask3 from "../../assets/category/Mask3.png";
import Mask4 from "../../assets/category/Mask4.png";
import Mask5 from "../../assets/category/Mask5.png";
import Mask6 from "../../assets/category/Mask6.png";

const Collection = () => {
  const isMobile = useMediaQuery("(max-width: 450px)");
  return (
    <CollectionStyle>
      <Box className="collection-title">
        <Typography
          sx={{
            display: isMobile ? "flex" : "block",
            justifyContent: "center",
          }}
          fontSize={27}
          fontWeight="bold"
        >
          Bộ Sưu Tập Cho Mèo Con
        </Typography>
        <Typography
          sx={{
            display: isMobile ? "flex" : "block",
            justifyContent: "center",
            mt: isMobile ? "1rem" : 0,
            textDecoration: "underline",
            cursor: "pointer",
          }}
          fontSize={17}
        >
          Xem Tất Cả
        </Typography>
      </Box>
      <Box className="container">
        <Box>
          <img src={Mask1} alt="Pate Mèo Con" />
          <Typography sx={{ display: "flex", justifyContent: "center" }}>
            Pate Mèo Con
          </Typography>
        </Box>
        <Box>
          <img src={Mask2} alt="Thức Ăn Cho Mèo Con" />
          <Typography sx={{ display: "flex", justifyContent: "center" }}>
            Pate Mèo Con
          </Typography>
        </Box>
        <Box>
          <img src={Mask3} alt="Cát Vệ Sinh Mèo" />
          <Typography sx={{ display: "flex", justifyContent: "center" }}>
            Pate Mèo Con
          </Typography>
        </Box>
        <Box>
          <img src={Mask4} alt="Sữa Tắm Cho Mèo Con" />
          <Typography sx={{ display: "flex", justifyContent: "center" }}>
            Pate Mèo Con
          </Typography>
        </Box>
        <Box>
          <img src={Mask5} alt="Đồ Chơi Cho Mèo Con" />
          <Typography sx={{ display: "flex", justifyContent: "center" }}>
            Pate Mèo Con
          </Typography>
        </Box>
        <Box>
          <img src={Mask6} alt="Nhà Cho Mèo" />
          <Typography sx={{ display: "flex", justifyContent: "center" }}>
            Pate Mèo Con
          </Typography>
        </Box>
        {/* <img src={Mask2} alt="Thức Ăn Cho Mèo Con" />
        <img src={Mask3} alt="Cát Vệ Sinh Mèo" />
        <img src={Mask4} alt="Sữa Tắm Cho Mèo Con" />
        <img src={Mask5} alt="Đồ Chơi Cho Mèo Con" />
        <img src={Mask6} alt="Nhà Cho Mèo" /> */}
      </Box>
    </CollectionStyle>
  );
};

export default Collection;
