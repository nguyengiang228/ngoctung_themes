import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { OutstandStyled } from "./styled";
import Outstanding1 from "../../assets/image/outstanding1.png";
import Outstanding2 from "../../assets/image/outstanding2.png";
import News1 from "../../assets/news/news1.png";
import News2 from "../../assets/news/news2.png";
import News3 from "../../assets/news/news3.png";
const Outstanding = () => {
  return (
    <OutstandStyled>
      <Box className="outStanding">
        <Typography fontWeight="bold" fontSize={30}>
          Bất động sản nổi bật
        </Typography>
        <Box className="outstanding-container">
          <Box className="outstanding-image">
            <img className="image" src={Outstanding1} />
            <div className="triangle"></div>
            <Typography
              sx={{ color: "#fff", transform: "translate(0.3rem, -22.5rem)" }}
              fontWeight="bold"
            >
              HOT
            </Typography>
          </Box>
          <Box className="outstanding-info">
            <Typography fontWeight="bold" fontSize={17}>
              GIÁ CHỈ TỪ 12 TỶ QUỸ CĂN CHUYỂN NHƯỢNG GELEXIMCO MỚI NHẤT CHÍNH
              CHỦ GỬI BÁN PHÁP LÝ RÕ...
            </Typography>
            <Typography className="outstanding-body-text" fontSize={15}>
              Dự án Geleximco Lê Trọng Tấn, Đường Lê Trọng Tấn, Phường Dương
              Nội, Hà Đông, Hà Nội
            </Typography>
            <Box className="outstanding-info-text">
              <Typography className="outstanding-body-text" fontSize={15}>
                Mức giá
              </Typography>
              <Typography className="outstanding-body-text" fontSize={15}>
                Diện tích
              </Typography>
            </Box>
            <Box className="outstanding-info-text">
              <Typography sx={{ color: "#c84e51" }} fontWeight="bold">
                16 tỷ
              </Typography>
              <Typography className="outstanding-body-text" fontSize={15}>
                60 m²
              </Typography>
            </Box>
            <Box className="outstanding-info-text">
              <Typography
                sx={{ color: "#c84e51" }}
                fontWeight="bold"
                // fontSize={15}
              >
                ~266,67 triệu/m²
              </Typography>
              <Typography className="outstanding-body-text" fontSize={15}>
                Mặt tiền 4 m
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "90%",
                justifyContent: "center",
                mt: "1rem",
              }}
            >
              <Button
                sx={{
                  width: "30%",
                  height: "3rem",
                  bgcolor: "#324c63",
                  color: "#fff",
                }}
              >
                Xem thêm
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className="outstanding-container">
          <Box className="outstanding-image">
            <img className="image" src={Outstanding2} />
            <div className="triangle"></div>
            <Typography
              sx={{ color: "#fff", transform: "translate(0.3rem, -22.5rem)" }}
              fontWeight="bold"
            >
              HOT
            </Typography>
          </Box>
          <Box className="outstanding-info">
            <Typography fontWeight="bold" fontSize={17}>
              CĂN HỘ STOWN GATEWAY MẶT TIỀN QUỐC LỘ 13 - TẶNG TOUR HÀN QUỐC 1
              TRIỆU WON - TẶNG COMBO FULL...
            </Typography>
            <Typography className="outstanding-body-text" fontSize={15}>
              Stown Gateway, Quốc Lộ 13, Vĩnh Phú, Thuận An, Bình Dương
            </Typography>
            <Box className="outstanding-info-text">
              <Typography className="outstanding-body-text" fontSize={15}>
                Mức giá
              </Typography>
              <Typography className="outstanding-body-text" fontSize={15}>
                Diện tích
              </Typography>
            </Box>
            <Box className="outstanding-info-text">
              <Typography sx={{ color: "#c84e51" }} fontWeight="bold">
                ~1,65 tỷ
              </Typography>
              <Typography className="outstanding-body-text" fontSize={15}>
                50 m²
              </Typography>
            </Box>
            <Box className="outstanding-info-text">
              <Typography
                sx={{ color: "#c84e51" }}
                fontWeight="bold"
                // fontSize={15}
              >
                ~33 triệu triệu/m²
              </Typography>
              <Typography className="outstanding-body-text" fontSize={15}>
                2 Phòng ngủ
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "90%",
                justifyContent: "center",
                mt: "1rem",
              }}
            >
              <Button
                sx={{
                  width: "30%",
                  height: "3rem",
                  bgcolor: "#324c63",
                  color: "#fff",
                }}
              >
                Xem thêm
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="outStanding-news">
        <Typography fontWeight="bold" fontSize={30}>
          Tin tức
        </Typography>
        <Box className="outStanding-news-info">
          <img className="outStanding-news-image" src={News1} />
          <Box>
            <Typography
              className="outStanding-news-title"
              fontWeight="bold"
              fontSize={20}
            >
              Đất Nền Hà Nội “Tăng Nhiệt” Cuối Năm
            </Typography>
            <Typography className="outStanding-news-span" fontSize={17}>
              Càng về các tháng cuối năm 2024, dấu hiệu tăng nhiệt của thị
              trường đất nền Hà Nội ngày càng rõ nét. Cả giá bán và giao dịch
              tại các thị trường ven Hà Nội đều đang tăng nhiệt so với các quý
              trước đó. Nhiều môi giới và nhà đầu tư đã đổ về thị trường đất nền
              vùng ven để khởi động các kế hoạch bán ...
            </Typography>
          </Box>
        </Box>
        <Box className="outStanding-news-info">
          <img className="outStanding-news-image" src={News2} />
          <Box>
            <Typography
              className="outStanding-news-title"
              fontWeight="bold"
              fontSize={20}
            >
              Chung Cư Hà Nội Sẽ Tiếp Tục Tăng Giá?
            </Typography>
            <Typography className="outStanding-news-span" fontSize={17}>
              Đồng quan điểm, chị Vương Hồng Thu, môi giới bất động sản nghỉ
              dưỡng Quảng Ninh cũng thừa nhận nhu cầu tìm mua bất động sản nghỉ
              dưỡng cuối năm đang tăng lên. Giao dịch trên thị trường tập trung
              ở thị trường thứ cấp, do có nhiều lựa chọn có mức giá hợp lý hơn.
              Thị trường sơ cấp ....
            </Typography>
          </Box>
        </Box>
        <Box className="outStanding-news-info">
          <img className="outStanding-news-image" src={News3} />
          <Box>
            <Typography
              className="outStanding-news-title"
              fontWeight="bold"
              fontSize={20}
            >
              Giá Chung Cư Hà Nội Liên Tục Lập Đỉnh Mới
            </Typography>
            <Typography className="outStanding-news-span" fontSize={17}>
              Trên thực tế, đầu tư chung cư Hà Nội đã trở thành xu hướng của
              giới đầu tư Hà Nội trong suốt thời gian qua. Tuy nhiên, việc giá
              chung cư Hà Nội tăng quá cao, bỏ xa tốc độ tăng giá của chung cư
              TP.HCM đã khiến giới đầu tư tại Hà Nội nói riêng và khu vực phía
              Bắc nói chung có tâm lý e ngại. Bởi một ....
            </Typography>
          </Box>
        </Box>
      </Box>
    </OutstandStyled>
  );
};

export default Outstanding;
