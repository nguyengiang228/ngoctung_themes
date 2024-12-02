import { useState } from "react";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import { ShopingCartStyle } from "./style";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Add, Remove } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import Cart1 from "../../assets/Cart/Cart1.png";
import Cart2 from "../../assets/Cart/Cart2.png";
import Cart3 from "../../assets/Cart/Cart3.png";
import Cart4 from "../../assets/Cart/Cart4.png";

const ShopingCart = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 450px)");
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      url: Cart1,
      name: "Thức Ăn Hạt Cho Mèo Trưởng Thành",
      price: 70000,
      quantity: 1,
    },
    {
      id: 2,
      url: Cart2,
      name: "Pate Mèo Tiêu Búi Lông Royal Canin",
      price: 100000,
      quantity: 1,
    },
    {
      id: 3,
      url: Cart3,
      name: "Pate Mèo Royal Canin Sensory",
      price: 40000,
      quantity: 1,
    },
    {
      id: 4,
      url: Cart4,
      name: "Pate Mèo Mẹ & Mèo Con Royal Canin",
      price: 69000,
      quantity: 1,
    },
  ]);
  const handleQuantityChange = (id: any, action: any) => {
    const updatedCart = cartItems.map((item) => {
      if (item.id === id) {
        const newQuantity =
          action === "increment"
            ? item.quantity + 1
            : item.quantity > 1
            ? item.quantity - 1
            : item.quantity;
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const handleRemoveItem = (id: any) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />
      <ShopingCartStyle>
        <Box sx={{ p: !isMobile ? "2rem 7rem" : "1rem 0" }}>
          {/* <Typography variant="h5" gutterBottom>
            Giỏ Hàng
          </Typography> */}
          <Box className="cart-container">
            <Typography className="cart-first-number">1</Typography>
            <Typography className="cart-order">SHOPPING CART</Typography>
            <Typography color="#FF7D29">
              <ArrowForwardIosIcon fontSize="small" />
            </Typography>
            <Typography className="cart-number-order">2</Typography>
            <Typography className="cart-order">CHECKOUT DETAILS</Typography>
            <Typography color="#FF7D29">
              <ArrowForwardIosIcon fontSize="small" />
            </Typography>
            <Typography className="cart-number-order">3</Typography>
            <Typography className="cart-order">ORDER COMPLETE</Typography>
          </Box>
          <Grid container spacing={3}>
            {/* Bảng sản phẩm */}
            <Grid sx={{ display: { xs: "none", xl: "block" } }} item md={8}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Typography fontWeight="bold">Sản phẩm</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontWeight="bold">Giá</Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography fontWeight="bold">Số lượng</Typography>
                      </TableCell>
                      <TableCell align="right">
                        <Typography fontWeight="bold">Tạm tính</Typography>
                      </TableCell>
                      {/* <TableCell align="center">
                        <Typography fontWeight="bold">Hành động</Typography>
                      </TableCell> */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cartItems.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell>
                          <Box sx={{ display: "flex", alignItems: "center" }}>
                            <CloseIcon
                              sx={{
                                width: "26px",
                                height: "26px",
                                color: "#fff",
                                bgcolor: "#FF7D29",
                                cursor: "pointer",
                                borderRadius: "7px",
                                mr: "5px",
                              }}
                              onClick={() => handleRemoveItem(item.id)}
                              fontSize="small"
                            />
                            &nbsp;
                            <img style={{ width: "100px" }} src={item.url} />
                            &nbsp;
                            {item.name}
                          </Box>
                        </TableCell>
                        <TableCell align="right">
                          <Typography sx={{ color: "#FF7D29" }}>
                            {item.price.toLocaleString()}đ
                          </Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Box
                            sx={{
                              bgcolor: "#FF7D29",
                              width: "130px",
                              display: "inline-flex",
                              alignItems: "center",
                              borderRadius: "8px",
                            }}
                          >
                            <IconButton
                              onClick={() =>
                                handleQuantityChange(item.id, "decrement")
                              }
                            >
                              <Remove sx={{ color: "#fff" }} />
                            </IconButton>
                            <TextField
                              value={item.quantity}
                              size="small"
                              sx={{
                                width: "45px",
                                height: "30px",
                                textAlign: "center",
                                pb: "2px",
                                backgroundColor: "#fff",
                                overflow: "hidden",
                              }}
                              inputProps={{
                                readOnly: true,
                              }}
                            />
                            <IconButton
                              onClick={() =>
                                handleQuantityChange(item.id, "increment")
                              }
                            >
                              <Add sx={{ color: "#fff" }} />
                            </IconButton>
                          </Box>
                        </TableCell>
                        <TableCell align="right">
                          <Typography sx={{ color: "#FF7D29" }}>
                            {(item.price * item.quantity).toLocaleString()}đ
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid sx={{ display: { xs: "block", xl: "none" } }} item xs={12}>
              {cartItems.map((item) => (
                <Box
                  key={item.id}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  &nbsp;
                  <img style={{ width: "150px" }} src={item.url} />
                  &nbsp;
                  <Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography sx={{ width: "225px" }}>
                        {item.name}
                      </Typography>
                      <CloseIcon
                        sx={{
                          width: "26px",
                          height: "26px",
                          color: "#fff",
                          bgcolor: "#FF7D29",
                          cursor: "pointer",
                          borderRadius: "7px",
                          mr: "5px",
                        }}
                        onClick={() => handleRemoveItem(item.id)}
                        fontSize="small"
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: "2rem",
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ color: "#FF7D29" }} variant="h6">
                        {item.price.toLocaleString()}đ
                      </Typography>
                      <Box
                        sx={{
                          bgcolor: "#FF7D29",
                          width: "130px",
                          display: "inline-flex",
                          alignItems: "center",
                          borderRadius: "8px",
                        }}
                      >
                        <IconButton
                          onClick={() =>
                            handleQuantityChange(item.id, "decrement")
                          }
                        >
                          <Remove sx={{ color: "#fff" }} />
                        </IconButton>
                        <TextField
                          value={item.quantity}
                          size="small"
                          sx={{
                            width: "45px",
                            height: "30px",
                            textAlign: "center",
                            pb: "2px",
                            backgroundColor: "#fff",
                            overflow: "hidden",
                          }}
                          inputProps={{
                            readOnly: true,
                          }}
                        />
                        <IconButton
                          onClick={() =>
                            handleQuantityChange(item.id, "increment")
                          }
                        >
                          <Add sx={{ color: "#fff" }} />
                        </IconButton>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Grid>
            {/* Tổng giá và nút hành động */}
            <Grid item xs={12} md={4}>
              <Paper elevation={3} style={{ padding: "16px" }}>
                <Typography fontWeight="bold" variant="h6">
                  Cộng Giỏ Hàng
                </Typography>
                <Divider style={{ margin: "16px 0" }} />
                <Box display="flex" justifyContent="space-between" mb={2}>
                  <Typography fontWeight="bold">TẠM TÍNH:</Typography>
                  <Typography sx={{ color: "#FF7D29" }}>
                    {subtotal.toLocaleString()}đ
                  </Typography>
                </Box>
                <Box display="flex" justifyContent="space-between" mb={2}>
                  <Typography fontWeight="bold">Tổng:</Typography>
                  <Typography sx={{ color: "#FF7D29" }}>
                    {subtotal.toLocaleString()}đ
                  </Typography>
                </Box>
                <Divider style={{ margin: "16px 0" }} />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Button
                    onClick={() => navigate("/product")}
                    variant="outlined"
                    color="warning"
                    sx={{
                      display: { xl: "block", xs: "none" },
                      marginRight: "10px",
                    }}
                    fullWidth
                  >
                    TIẾP TỤC XEM SẢN PHẨM
                  </Button>
                  <Button
                    onClick={() => navigate("/payment")}
                    variant="contained"
                    color="warning"
                    fullWidth
                  >
                    TIẾN HÀNH THANH TOÁN
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </ShopingCartStyle>
      <Footer />
    </>
  );
};

export default ShopingCart;
