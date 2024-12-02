import { FooterStyled } from "./styled";
import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import LogoFooter from "../../assets/logoFooter.png";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width:450px)");

  return (
    <FooterStyled>
      <Box
        sx={{
          padding: "32px",
        }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          {/* Cột thông tin thành viên */}
          <Grid item xs={12} md={5}>
            <Typography
              variant="h4"
              style={{
                color: "#FF6600",
                fontWeight: "bold",
                marginBottom: "8px",
              }}
            >
              THÀNH VIÊN LOLIPET
            </Typography>
            <Typography
              variant={!isMobile ? "body2" : "body1"}
              color="textSecondary"
              gutterBottom
            >
              Đăng kí thành viên ngay hôm nay để nhận email về sản phẩm mới và
              chương trình khuyến mãi của LOLIPET
            </Typography>
            <Box display="flex" mt={2}>
              <TextField
                fullWidth
                placeholder="Email của bạn ..."
                variant="outlined"
                size={!isMobile ? "medium" : "small"}
                sx={{
                  marginRight: "8px",
                  bgcolor: " #fff",
                }}
              />
              <Button
                variant="contained"
                sx={{
                  width: !isMobile ? "150px" : "170px",
                  backgroundColor: "#FF6600",
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Nhận Ngay
              </Button>
            </Box>
          </Grid>

          {/* Cột liên hệ và mạng xã hội */}
          <Grid item xs={12} md={7}>
            <Box
              display={!isMobile ? "flex" : "none"}
              justifyContent="flex-end"
              // alignItems="center"
              flexWrap="wrap"
              mr="12rem"
            >
              <Box mr="6rem">
                <Box display="flex" alignItems="center" mr={4} mb={2}>
                  <PhoneOutlinedIcon
                    fontSize="large"
                    style={{ color: "#FF6600", marginRight: "8px" }}
                  />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    fontWeight="bold"
                  >
                    Hotline: 1900-100028 - 037.911.1080
                  </Typography>
                </Box>
                <Box display="flex" alignItems="center" mr={4} mb={2}>
                  <MailOutlinedIcon
                    fontSize="large"
                    style={{ color: "#FF6600", marginRight: "8px" }}
                  />
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    fontWeight="bold"
                  >
                    Email: contact_lolipet@gmail.com
                  </Typography>
                </Box>
              </Box>
              <Box width="30%">
                <Box
                  width="100%"
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={2}
                >
                  <IconButton className="logo-icon">
                    <WhatsAppIcon style={{ color: "#fff" }} />
                  </IconButton>
                  <IconButton className="logo-icon">
                    <FacebookIcon style={{ color: "#fff" }} />
                  </IconButton>
                  <IconButton className="logo-icon">
                    <YouTubeIcon style={{ color: "#fff" }} />
                  </IconButton>
                  <IconButton className="logo-icon">
                    <InstagramIcon style={{ color: "#fff" }} />
                  </IconButton>
                </Box>
                <Box>
                  <img
                    src={LogoFooter} // Thay bằng URL logo "ĐÃ THÔNG BÁO"
                    alt="Đã thông báo Bộ Công Thương"
                    style={{ height: "100px" }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          display: !isMobile ? "flex" : "none",
          justifyContent: "space-around",
        }}
      >
        <Box className="menu-item">
          <Typography fontSize={27} fontWeight="bold">
            Shop
          </Typography>
          <Typography className="footer-menu">Dành Cho Chó</Typography>
          <Typography className="footer-menu">Dành Cho Mèo</Typography>
          <Typography className="footer-menu">Thương Hiệu</Typography>
          <Typography className="footer-menu">Blogs</Typography>
          <Typography className="footer-menu">Bộ Sưu Tập</Typography>
        </Box>
        <Box className="menu-item">
          <Typography fontSize={27} fontWeight="bold">
            Lolipet Pet Shop
          </Typography>
          <Typography className="footer-menu">Giới Thiệu</Typography>
          <Typography className="footer-menu">Thành Viên</Typography>
          <Typography className="footer-menu">Điều Khoản Sử Dụng</Typography>
          <Typography className="footer-menu">Tuyển Dụng</Typography>
        </Box>
        <Box className="menu-item">
          <Typography fontSize={27} fontWeight="bold">
            Hỗ Trợ Khách Hàng
          </Typography>
          <Typography className="footer-menu">
            Chính Sách Đổi Trả Hàng
          </Typography>
          <Typography className="footer-menu">
            Phương Thức Vận Chuyển
          </Typography>
          <Typography className="footer-menu">Chính Sách Bảo Mật</Typography>
          <Typography className="footer-menu">
            Phương Thức Thanh Toán
          </Typography>
          <Typography className="footer-menu">Chính Sách Hoàn Tiền</Typography>
        </Box>
        <Box>
          <Typography fontSize={27} fontWeight="bold">
            Liên Hệ
          </Typography>
          <Typography className="footer-menu">
            CÔNG TY CỔ PHẦN THUƠNG MẠI & DỊCH VỤ LOLIPET
          </Typography>
          <Typography className="footer-menu">MST: 0316459054 </Typography>
          <Typography className="footer-menu">
            96 Định Công, Phường Định Công, Quận Thanh Xuân,{" "}
          </Typography>
          <Typography className="footer-menu">
            Thành phố Hà Nội, Việt Nam
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: isMobile ? "flex" : "none",
          justifyContent: "space-between",
          margin: "0 1rem",
          borderBottom: "2px solid #ccc",
        }}
      >
        <Typography fontSize={25} fontWeight="bold">
          Shop
        </Typography>
        <AddOutlinedIcon />
      </Box>
      <Box
        sx={{
          display: isMobile ? "flex" : "none",
          justifyContent: "space-between",
          margin: "1.5rem 1rem",
          borderBottom: "2px solid #ccc",
        }}
      >
        <Typography fontSize={25} fontWeight="bold">
          Lolipet Pet Shop
        </Typography>
        <AddOutlinedIcon />
      </Box>
      <Box
        sx={{
          display: isMobile ? "flex" : "none",
          justifyContent: "space-between",
          margin: "0 1rem",
          borderBottom: "2px solid #ccc",
        }}
      >
        <Typography fontSize={25} fontWeight="bold">
          Hỗ Trợ Khách Hàng
        </Typography>
        <AddOutlinedIcon />
      </Box>
      <Box
        sx={{
          display: isMobile ? "block" : "none",
          justifyContent: "space-between",
          margin: "1.5rem 1rem",
          // borderBottom: "2px solid #ccc",
        }}
      >
        <Typography mb={2} fontSize={25} fontWeight="bold">
          Liên Hệ
        </Typography>
        <Typography>
          CÔNG TY CỔ PHẦN THUƠNG MẠI & DỊCH VỤ LOLIPET MST: 0316459054 96 Định
          Công, Phường Định Công, Quận Thanh Xuân, Thành phố Hà Nội, Việt Nam
        </Typography>
      </Box>
      <Box m="1.5rem 1rem">
        <Box display="flex" alignItems="center" mr={4} mb={2}>
          <PhoneOutlinedIcon
            fontSize="large"
            style={{ color: "#FF6600", marginRight: "8px" }}
          />
          <Typography variant="body1" color="warning" fontWeight="bold">
            Hotline: 1900-100028 - 037.911.1080
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mr={4} mb={2}>
          <MailOutlinedIcon
            fontSize="large"
            style={{ color: "#FF6600", marginRight: "8px" }}
          />
          <Typography variant="body1" color="warning" fontWeight="bold">
            Email: contact_lolipet@gmail.com
          </Typography>
        </Box>
      </Box>
    </FooterStyled>
  );
};

export default Footer;
