import { useState } from "react";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import { PaymentStyle } from "./styled";
import {
  Box,
  Grid,
  TextField,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Button,
  Divider,
  Paper,
  Checkbox,
  useMediaQuery,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { paymentArr } from "./config";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [shippingMethod, setShippingMethod] = useState(30000);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const isMobile = useMediaQuery("(max-width: 450px)");

  const cartSubtotal = 279000;
  const total = cartSubtotal + shippingMethod;

  return (
    <>
      <Header />
      <PaymentStyle>
        <Box
          ml={isMobile ? 1 : 0}
          mr={isMobile ? 1 : 0}
          sx={{ p: !isMobile ? "2rem 7rem" : "1rem 0" }}
        >
          <Box className="checkout-container">
            <Typography className="checkout-number-order">1</Typography>
            <Typography className="checkout-order">SHOPPING CART</Typography>
            <Typography color="#FF7D29">
              <ArrowForwardIosIcon fontSize="small" />
            </Typography>
            <Typography className="checkout-first-number">2</Typography>
            <Typography className="checkout-order">CHECKOUT DETAILS</Typography>
            <Typography color="#FF7D29">
              <ArrowForwardIosIcon fontSize="small" />
            </Typography>
            <Typography className="checkout-number-order">3</Typography>
            <Typography className="checkout-order">ORDER COMPLETE</Typography>
          </Box>
          <Grid container spacing={3}>
            {/* Phần bên trái: Thông tin người nhận hàng */}
            <Grid item xs={12} md={8}>
              <Typography fontWeight="bold" variant="h6" gutterBottom>
                Thông tin người nhận hàng
              </Typography>
              <Paper elevation={3} style={{ padding: "16px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      //   label="Số điện thoại"
                      variant="outlined"
                      value="0986245698"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Gửi cho tôi tin tức và ưu đãi qua email"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField fullWidth value="Nguyễn" variant="outlined" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField fullWidth value="Tùng" variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      value="240 Tôn Đức Thắng, Đống Đa, Hà Nội"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField fullWidth value="Hà Nội" variant="outlined" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField fullWidth value="Đống Đa" variant="outlined" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField fullWidth value="Hàng Bột" variant="outlined" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      fullWidth
                      value="Đường Tôn Đức Thắng"
                      variant="outlined"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Lưu lại thông tin cho lần sau"
                    />
                  </Grid>
                </Grid>
              </Paper>

              {/* Hình thức giao hàng */}
              <Box mt={!isMobile ? 3 : 1}>
                <Typography fontWeight="bold" variant="h6" gutterBottom>
                  Hình thức giao hàng
                </Typography>
                <Paper elevation={3} style={{ padding: "16px" }}>
                  <FormControl>
                    <RadioGroup defaultValue="delivery">
                      <FormControlLabel
                        value="delivery"
                        control={<Radio color="warning" />}
                        label="Giao đến địa chỉ của bạn"
                        // sx={{
                        //   border: "1px solid #000",
                        //   width: "57vw",
                        //   borderRadius: "8px",
                        //   mb: "0.5rem",
                        // }}
                      />
                      <FormControlLabel
                        value="store"
                        control={<Radio color="warning" />}
                        label="Nhận hàng tại cửa hàng"
                        // sx={{
                        //   border: "1px solid #000",
                        //   width: "57vw",
                        //   borderRadius: "8px",
                        // }}
                      />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              </Box>

              {/* Phương thức vận chuyển */}
              <Box mt={!isMobile ? 3 : 1}>
                <Typography fontWeight="bold" variant="h6" gutterBottom>
                  Phương thức vận chuyển
                </Typography>
                <Paper elevation={3} style={{ padding: "16px" }}>
                  <FormControl>
                    <RadioGroup
                      value={shippingMethod}
                      onChange={(e) =>
                        setShippingMethod(Number(e.target.value))
                      }
                    >
                      <FormControlLabel
                        value={30000}
                        control={<Radio color="warning" />}
                        label={
                          <Box
                            sx={{
                              display: "flex",
                              width: !isMobile ? "54vw" : "100%",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography width={isMobile ? "75%" : "100%"}>
                              Vận chuyển nhanh (Hà Nội) 1 - 3 ngày
                            </Typography>
                            <Typography fontWeight="bold" color="warning">
                              30.000đ
                            </Typography>
                          </Box>
                        }
                      />
                      <FormControlLabel
                        value={49000}
                        control={<Radio color="warning" />}
                        label={
                          <Box
                            sx={{
                              display: "flex",
                              width: !isMobile ? "54vw" : "100%",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography width={isMobile ? "75%" : "100%"}>
                              Vận chuyển nhanh Tỉnh Miền Bắc (2 - 3 ngày)
                            </Typography>
                            <Typography fontWeight="bold" color="warning">
                              49.000đ
                            </Typography>
                          </Box>
                        }
                      />
                      <FormControlLabel
                        value={70000}
                        control={<Radio color="warning" />}
                        label={
                          <Box
                            sx={{
                              display: "flex",
                              width: !isMobile ? "54vw" : "100%",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography width={isMobile ? "75%" : "100%"}>
                              Vận chuyển nhanh Tỉnh Miền Nam (3 - 5 ngày)
                            </Typography>
                            <Typography fontWeight="bold" color="warning">
                              70.000đ
                            </Typography>
                          </Box>
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              </Box>

              {/* Phương thức thanh toán */}
              <Box mt={3}>
                <Typography fontWeight="bold" variant="h6" gutterBottom>
                  Phương thức thanh toán
                </Typography>
                <Paper elevation={3} style={{ padding: "16px" }}>
                  <FormControl>
                    <RadioGroup
                      value={paymentMethod}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                    >
                      <FormControlLabel
                        value="cod"
                        control={<Radio color="warning" />}
                        label={
                          <Box
                            sx={{
                              display: "flex",
                              width: !isMobile ? "54vw" : "100%",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography width={isMobile ? "300px" : "100%"}>
                              Thanh toán khi nhận hàng (COD)
                            </Typography>
                            <Typography fontWeight="bold" color="warning">
                              <LocalAtmIcon fontSize="medium" />
                            </Typography>
                          </Box>
                        }
                      />
                      <FormControlLabel
                        value="bank"
                        control={<Radio color="warning" />}
                        label={
                          <Box
                            sx={{
                              display: "flex",
                              width: !isMobile ? "54vw" : "100%",
                              justifyContent: "space-between",
                            }}
                          >
                            <Typography width={isMobile ? "300px" : "100%"}>
                              Thanh toán qua tài khoản ngân hàng
                            </Typography>
                            <Typography fontWeight="bold" color="warning">
                              <AccountBalanceIcon fontSize="medium" />
                            </Typography>
                          </Box>
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Paper>
              </Box>

              {/* Nút đặt hàng */}
              <Box mt={3}>
                <Button
                  onClick={() => navigate("/order-success")}
                  variant="contained"
                  color="warning"
                  fullWidth
                >
                  Đặt Hàng
                </Button>
              </Box>
            </Grid>

            {/* Phần bên phải: Tóm tắt đơn hàng */}
            <Grid item xs={12} md={4}>
              <Paper
                elevation={3}
                style={{
                  padding: "16px",
                  border: "2px solid #FF7D29",
                  borderRadius: "8px",
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  Tóm tắt đơn hàng
                </Typography>
                <Divider style={{ margin: "16px 0" }} />
                {paymentArr.map((item, index) => (
                  <Box
                    key={index}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={1}
                  >
                    <Box display="flex" alignItems="center">
                      <img
                        style={{ width: "70px", marginRight: "20px" }}
                        src={item.url}
                      />
                      <Typography>{item.name}</Typography>
                    </Box>
                    <Typography ml={!isMobile ? 0 : 1.7}>
                      {item.price.toLocaleString()}đ
                    </Typography>
                  </Box>
                ))}
                <Box display="flex" alignItems="center">
                  <TextField
                    label="Mã Giảm Giá"
                    variant="outlined"
                    size="small"
                    sx={{
                      margin: "16px 0.5rem 16px 0",
                      width: !isMobile ? "140rem" : "90rem",
                    }}
                    color="warning"
                    focused
                  />
                  <Button variant="contained" color="warning" fullWidth>
                    Áp dụng
                  </Button>
                </Box>
                <Divider style={{ margin: "16px 0" }} />
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography width="100px" textAlign="right" fontWeight="bold">
                    Tổng số tiền:
                  </Typography>
                  <Typography fontWeight="bold" color="warning">
                    {cartSubtotal.toLocaleString()}đ
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mb={1}>
                  <Typography width="100px" textAlign="right" fontWeight="bold">
                    Vận chuyển:
                  </Typography>
                  <Typography fontWeight="bold" color="warning">
                    {shippingMethod.toLocaleString()}đ
                  </Typography>
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  mt={2}
                  mb={5}
                >
                  <Typography fontWeight="bold" width="100px" textAlign="right">
                    Tổng:
                  </Typography>
                  <Typography fontWeight="bold" color="warning">
                    {total.toLocaleString()}đ
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </PaymentStyle>
      <Footer />
    </>
  );
};

export default PaymentPage;
