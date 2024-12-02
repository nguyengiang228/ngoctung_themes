import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import { OrderSuccessStyle } from "./styled";
import {
  Box,
  Button,
  Typography,
  Grid,
  TextField,
  Paper,
  Divider,
  useMediaQuery,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const isMobile = useMediaQuery("(max-width: 450px)");
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <OrderSuccessStyle>
        <Box sx={{ p: !isMobile ? "2rem 7rem" : "1rem 0" }}>
          {/* Tiêu đề bước đặt hàng */}
          <Box className="checkout-container">
            <Typography className="checkout-number-order">1</Typography>
            <Typography className="checkout-order">SHOPPING CART</Typography>
            <Typography color="#FF7D29">
              <ArrowForwardIosIcon fontSize="small" />
            </Typography>
            <Typography className="checkout-number-order">2</Typography>
            <Typography className="checkout-order">CHECKOUT DETAILS</Typography>
            <Typography color="#FF7D29">
              <ArrowForwardIosIcon fontSize="small" />
            </Typography>
            <Typography className="checkout-first-number">3</Typography>
            <Typography className="checkout-order">ORDER COMPLETE</Typography>
          </Box>

          {/* Nội dung thông báo đặt hàng thành công */}
          <Paper
            elevation={3}
            sx={{
              width: !isMobile ? "50%" : "85%",
              height: "30vh",
              padding: "24px",
              ml: !isMobile ? "25rem" : "0.5rem",
              textAlign: "center",
            }}
          >
            <Box width="100%">
              <CheckCircleIcon style={{ fontSize: 80, color: "#00C851" }} />
              <Typography
                variant="h5"
                style={{
                  color: "#FF6600",
                  margin: "16px 0",
                  fontWeight: "bold",
                }}
              >
                ĐẶT HÀNG THÀNH CÔNG
              </Typography>
              <Typography variant="h6" style={{ marginBottom: "16px" }}>
                Cảm ơn bạn đã tin tưởng và mua sắm tại LOLIPET
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Đơn hàng sẽ sớm được giao tới bạn. Hy vọng sẽ có cơ hội phục vụ
                bạn trong tương lai.
              </Typography>
            </Box>
          </Paper>

          {/* Các nút điều hướng */}
          <Box mt={3} textAlign="center">
            <Button
              variant="outlined"
              style={{
                marginRight: "8px",
                borderColor: "#FF6600",
                color: "#FF6600",
              }}
              onClick={() => navigate("/product")}
            >
              Tiếp tục mua sắm
            </Button>
            <Button
              variant="contained"
              sx={{
                display: !isMobile ? "block" : "none",
                backgroundColor: "#FF6600",
                color: "#FFFFFF",
              }}
            >
              Theo dõi đơn hàng
            </Button>
          </Box>

          {/* Gửi email phản hồi */}
          <Box mt={4} sx={{ display: !isMobile ? "block" : "none" }}>
            {/* <Divider /> */}
            <Grid container alignItems="center" spacing={2} mt={2}>
              <Grid item xs={12} md={9}>
                <TextField
                  sx={{ width: "70%", ml: "20rem" }}
                  label="Nhập mail để gửi phản hồi của bạn"
                  variant="outlined"
                  color="warning"
                />
              </Grid>
              <Grid item xs={12} md={3}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#FF6600",
                    color: "#FFFFFF",
                    width: "30%",
                    ml: "-4rem",
                    height: "50px",
                    borderRadius: "10px",
                  }}
                >
                  Gửi
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </OrderSuccessStyle>
      <Footer />
    </>
  );
};

export default OrderSuccess;
