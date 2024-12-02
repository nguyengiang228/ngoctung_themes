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
import { LoginStyle } from "./styled";
import { useState } from "react";
import Header from "../../containers/Header";
import Footer from "../../containers/Footer";
import Menu from "../../containers/Menu";
import { useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Login1 from "../../assets/Login/login1.png";

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const isMobile = useMediaQuery("(max-width:450px)");
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Box>
      <Header />
      <Menu />
      <LoginStyle>
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
                style={{ fontWeight: "bold", color: "#FF6600" }}
              >
                Đăng Nhập
              </Typography>
              <Typography
                display={!isMobile ? "block" : "none"}
                variant="body1"
                color="textSecondary"
                gutterBottom
              >
                Đăng nhập để không bỏ lỡ quyền lợi tích lũy và hoàn tiền cho bất
                kỳ đơn hàng nào.
              </Typography>
              <Typography display={isMobile ? "block" : "none"}>
                Chào mừng bạn quay lại!
              </Typography>
              {/* Email/SĐT Input */}
              <TextField
                label="Email/SĐT của bạn"
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

              {/* Nút Đăng Nhập */}
              <Button
                variant="contained"
                fullWidth
                style={{
                  backgroundColor: "#FF6600",
                  color: "white",
                  margin: "16px 0",
                  fontWeight: "bold",
                  borderRadius: "8px",
                  height: "50px",
                }}
                onClick={() => navigate("/login-user")}
              >
                Đăng Nhập
              </Button>

              {/* Liên kết */}
              <Box
                display={!isMobile ? "flex" : "flex"}
                justifyContent="space-between"
                mb={2}
              >
                <Button
                  variant="text"
                  style={{
                    textTransform: "none",
                    color: "#FF7D29",
                    textDecoration: "underline",
                  }}
                  onClick={() => navigate("/register")}
                >
                  Đăng ký tài khoản mới
                </Button>
                <Button
                  variant="text"
                  style={{
                    textTransform: "none",
                    color: "#FF7D29",
                    fontWeight: "bold",
                    textDecoration: "underline",
                  }}
                >
                  Quên mật khẩu?
                </Button>
              </Box>

              <Divider>Hoặc</Divider>

              {/* Nút đăng nhập với Google */}
              <Button
                variant="outlined"
                fullWidth
                startIcon={<GoogleIcon />}
                style={{
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
                style={{
                  backgroundColor: "#1877F2",
                  color: "white",
                  height: "50px",
                  borderRadius: "8px",
                }}
              >
                Đăng nhập với Facebook
              </Button>
              <Typography></Typography>
            </Box>
          </Grid>

          {/* Cột chứa hình ảnh */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src={Login1} // Thay bằng URL ảnh của bạn
              alt="Login Illustration"
              sx={{
                width: "50%",
                height: "auto",
                borderRadius: 2,
                display: isMobile ? "none" : "block",
              }}
            />
          </Grid>
        </Grid>
      </LoginStyle>
      <Footer />
    </Box>
  );
};

export default LoginPage;
