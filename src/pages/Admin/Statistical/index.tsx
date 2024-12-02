import {
  Box,
  Grid,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";

import {
  Dashboard,
  ShoppingCart,
  BarChart,
  SupportAgent,
  AccountBox,
  Assessment,
} from "@mui/icons-material";
import logo from "../../../assets/Logo2.png";
import dashboardAdmin from "../../../assets/admin-page.png";
import section1 from "../../../assets/section1.png";
import section2 from "../../../assets/section2.png";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import bot from "../../../assets/bot.png";
import { useNavigate } from "react-router-dom";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

const DashboardLayout = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex">
      {/* Sidebar */}
      <Box
        sx={{
          width: "250px",
          backgroundColor: "#fff",
          height: "100vh",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "1rem",
        }}
      >
        {/* <Typography variant="h6" fontWeight="bold" color="primary" mb={2}>
          Lolipet
        </Typography> */}
        <img style={{ width: "15rem" }} src={logo} />
        <List>
          <ListItem sx={{ cursor: "pointer" }} button>
            <ListItemIcon>
              <LocalMallOutlinedIcon
                color="warning"
                onClick={() => navigate("/prod-admin")}
              />
            </ListItemIcon>
            <ListItemText
              onClick={() => navigate("/prod-admin")}
              primary="Sản phẩm"
            />
          </ListItem>
          <ListItem sx={{ cursor: "pointer" }} button>
            <ListItemIcon>
              <BarChart color="warning" />
            </ListItemIcon>
            <ListItemText primary="Đơn hàng" />
          </ListItem>
          <ListItem sx={{ cursor: "pointer" }} button>
            <ListItemIcon>
              <Assessment color="warning" />
            </ListItemIcon>
            <ListItemText primary="Marketing" />
          </ListItem>
          <ListItem sx={{ cursor: "pointer" }} button>
            <ListItemIcon>
              <SupportAgent color="warning" />
            </ListItemIcon>
            <Typography sx={{ fontWeight: "bold" }}> Thống kê</Typography>
          </ListItem>
          <ListItem sx={{ cursor: "pointer" }} button>
            <ListItemIcon>
              <AccountBox color="warning" />
            </ListItemIcon>
            <ListItemText primary="Tài khoản" />
          </ListItem>
        </List>
      </Box>

      {/* Main Content */}
      <Box
        sx={{
          flex: 1,
          backgroundColor: "#f9f9f9",
          padding: "1.5rem",
        }}
      >
        {/* Top Statistics */}
        <Grid container spacing={2} mb={2}>
          {[
            { label: "Đơn hàng chờ xử lý", value: "7" },
            { label: "Đơn hàng trả cần xử lý", value: "1" },
            { label: "Chờ được đánh giá", value: "10" },
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Paper
                sx={{
                  padding: "1rem",
                  textAlign: "center",
                  backgroundColor: "#FF7B25",
                  color: "#fff",
                  borderRadius: "8px",
                }}
              >
                <Typography variant="h5" fontWeight="bold">
                  {item.value}
                </Typography>
                <Typography>{item.label}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Advanced Analytics */}

        {/* <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Paper
              sx={{
                padding: "1.5rem",
                borderRadius: "8px",
                height: "100%",
              }}
            >
              <Typography variant="h6" mb={2}>
                Phân tích nâng cao
              </Typography>
              <Typography variant="h4" color="primary" fontWeight="bold">
                15.500.000
              </Typography>
              <Typography color="green">+8% so với hôm qua</Typography>
              <Box
                sx={{
                  marginTop: "1rem",
                  backgroundColor: "#f3f3f3",
                  height: "200px",
                  borderRadius: "8px",
                }}
              />
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper
              sx={{
                padding: "1rem",
                borderRadius: "8px",
              }}
            >
              <Typography variant="h6" mb={1}>
                Doanh thu (đ)
              </Typography>
              <Typography variant="h4" color="primary" fontWeight="bold">
                5,500,000
              </Typography>
              <Typography>Đơn hàng: 20</Typography>
              <Typography>Khách truy cập: 100</Typography>
            </Paper>
          </Grid>
        </Grid> */}
        <img style={{ width: "100%" }} src={dashboardAdmin} />
        {/* Bottom Section */}
        {/* <Grid container spacing={2} mt={2}>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                padding: "1rem",
                borderRadius: "8px",
              }}
            >
              <Typography variant="h6" mb={1}>
                Tình trạng vận hành
              </Typography>
              <Typography>Tỷ số giao hàng nhanh: 85.67%</Typography>
              <Typography>Tỷ lệ phản hồi chat: 0.54%</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                padding: "1rem",
                borderRadius: "8px",
              }}
            >
              <Typography variant="h6" mb={1}>
                Trung tâm phát triển
              </Typography>
              <Typography>Đảm bảo tỷ lệ giao hàng đúng hạn</Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: "0.5rem" }}
              >
                Tối ưu
              </Button>
            </Paper>
          </Grid>
        </Grid> */}
        <Box>
          <img style={{ width: "55%", height: "273px" }} src={section1} />
          <img style={{ width: "45%" }} src={section2} />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          pt: "5rem",
          borderLeft: "1px solid #ccc",
        }}
      >
        <Box sx={{ display: "flex", m: "1rem 1rem" }}>
          <CommentOutlinedIcon fontSize="large" />
          <Typography
            sx={{
              bgcolor: "red",
              display: "flex",
              width: "2.2rem",
              height: "1.3rem",
              justifyContent: "center",
              borderRadius: "10px",
              color: "#fff",
              fontSize: "14px",
              ml: "-15px",
              mt: "-10px",
            }}
          >
            10
          </Typography>
        </Box>
        <Box sx={{ display: "flex", m: "1rem 1rem" }}>
          <NotificationsOutlinedIcon fontSize="large" />
          <Typography
            sx={{
              bgcolor: "red",
              display: "flex",
              width: "2.2rem",
              height: "1.3rem",
              justifyContent: "center",
              borderRadius: "10px",
              color: "#fff",
              fontSize: "14px",
              ml: "-18px",
              mt: "-3px",
            }}
          >
            10
          </Typography>
        </Box>

        <img style={{ width: "3rem" }} src={bot} />
      </Box>
    </Box>
  );
};

export default DashboardLayout;
