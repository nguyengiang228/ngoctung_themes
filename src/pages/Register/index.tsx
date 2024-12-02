import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Header from "../../containers/Header";
import Footer from "../../containers/Footer";
import Menu from "../../containers/Menu";
import { RegisterStyle } from "./styled";
import Login1 from "../../assets/Login/login1.png";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:450px)");
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Box>
      <Header />
      <Menu />
      <RegisterStyle>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          minHeight="50vh"
          spacing={2}
        >
          {/* Cột chứa form */}
          <Grid item xs={12} md={6}>
            <Box padding={4}>
              <Typography
                variant="h4"
                gutterBottom
                style={{
                  display: isMobile ? "flex" : "block",
                  justifyContent: "center",
                  fontWeight: "bold",
                  color: "#FF6600",
                }}
              >
                Đăng Ký
              </Typography>
              <Typography
                display={!isMobile ? "block" : "none"}
                variant="body1"
                color="textSecondary"
                gutterBottom
              >
                Đăng kí để không bỏ lỡ quyền lợi tích luỹ và hoàn tiền cho bất
                kỳ đơn hàng nào.
              </Typography>

              <Typography
                sx={{ justifyContent: "center" }}
                display={isMobile ? "flex" : "none"}
                variant="body1"
                color="textSecondary"
                gutterBottom
              >
                Đăng kí tài khoản của bạn!
              </Typography>

              {/* Email/SĐT Input */}
              <Box display="flex">
                <TextField
                  label="Họ tên của bạn"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  sx={{ mr: "1rem" }}
                />
                <TextField
                  label="SĐT của bạn"
                  fullWidth
                  margin="normal"
                  variant="outlined"
                />
              </Box>
              <TextField
                label="Email của bạn"
                fullWidth
                margin="normal"
                variant="outlined"
              />
              {/* Mật khẩu Input */}
              <TextField
                label="Mật khẩu"
                type={showPassword ? "text" : "password"}
                fullWidth
                margin="normal"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePasswordVisibility}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="Nhập lại mật khẩu"
                type={showPassword ? "text" : "password"}
                fullWidth
                margin="normal"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePasswordVisibility}>
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Typography
                sx={{ color: "#FF6600" }}
                display={isMobile ? "block" : "none"}
                variant="body1"
                color="textSecondary"
                gutterBottom
              >
                Bằng cách đăng ký, bạn đồng ý với Điều khoản, Chính sách bảo mật
                và Cookie của chúng tôi.
              </Typography>

              {/* Nút Đăng Nhập */}
              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#FF6600",
                  color: "white",
                  margin: "16px 0",
                  fontWeight: "bold",
                  height: "50px",
                  textTransform: "initial",
                  borderRadius: "8px",
                }}
                onClick={() => navigate("/login")}
              >
                Đăng Kí
              </Button>

              {/* Liên kết */}
              <Box display="flex" justifyContent="space-between" mb={2}>
                <Button
                  variant="text"
                  style={{
                    textTransform: "none",
                    color: "#000",
                  }}
                  onClick={() => navigate("/login")}
                >
                  Bạn đã có tài khoản? &nbsp;
                  <span style={{ color: " #FF6600" }}>Đăng nhập</span>
                </Button>
              </Box>

              <Divider>Hoặc</Divider>

              {/* Nút đăng nhập với Google */}
              <Button
                variant="outlined"
                fullWidth
                startIcon={<GoogleIcon />}
                sx={{
                  margin: "16px 0",
                  borderColor: "#ccc",
                  color: "#FF6600",
                  height: "50px",
                  borderRadius: "8px",
                }}
              >
                Đăng nhập với Google
              </Button>

              {/* Nút đăng nhập với Facebook */}
              <Button
                variant="contained"
                fullWidth
                startIcon={<FacebookOutlinedIcon />}
                sx={{
                  backgroundColor: "#1877F2",
                  color: "white",
                  height: "50px",
                  borderRadius: "8px",
                }}
              >
                Đăng nhập với Facebook
              </Button>
            </Box>
          </Grid>

          {/* Cột chứa hình ảnh */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={Login1} // Thay bằng URL ảnh của bạn
              alt="Login Illustration"
              sx={{
                display: !isMobile ? "block" : "none",
                width: "50%",
                height: "auto",
                borderRadius: 2,
              }}
            />
          </Grid>
        </Grid>
      </RegisterStyle>
      <Footer />
    </Box>
  );
};

export default RegisterPage;
