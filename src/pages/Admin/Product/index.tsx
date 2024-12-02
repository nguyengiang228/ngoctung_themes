import {
  Box,
  Typography,
  Paper,
  Grid,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  IconButton,
  MenuItem,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Dashboard,
  ShoppingCart,
  BarChart,
  SupportAgent,
  AccountBox,
  Assessment,
} from "@mui/icons-material";
import { Edit, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/Logo2.png";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import bot from "../../../assets/bot.png";

const products = [
  {
    id: 1,
    url: "",
    name: "Thức ăn cho mèo Royal Canin Indoor 400g",
    price: "132,000 đ",
    discountedPrice: "100,000 đ",
    stockStatus: "Còn hàng",
    category: "Thức ăn khô cho mèo",
  },
  {
    id: 2,
    url: "",
    name: "Thức ăn cho mèo Royal Canin Indoor 2kg",
    price: "200,000 đ",
    discountedPrice: "150,000 đ",
    stockStatus: "Hết hàng",
    category: "Thức ăn khô cho mèo",
  },
  // Thêm dữ liệu khác tương tự
];

const ProductAdmin = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex" }}>
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
            <Box>
              <Box display="flex" alignItems="center">
                <ListItemIcon>
                  <LocalMallOutlinedIcon
                    color="warning"
                    onClick={() => navigate("/prod-admin")}
                  />
                </ListItemIcon>
                <Typography
                  onClick={() => navigate("/prod-admin")}
                  fontWeight="bold"
                >
                  Sản phẩm
                </Typography>
                <KeyboardArrowUpOutlinedIcon sx={{ ml: "3rem" }} />
              </Box>
              <Box mt="1rem" ml="3.5rem">
                <Typography fontWeight="bold">Danh sách sản phẩm</Typography>
                <Typography>Thêm sản phẩm</Typography>
              </Box>
            </Box>
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
              <SupportAgent
                color="warning"
                onClick={() => navigate("/admin")}
              />
            </ListItemIcon>
            <Typography
              onClick={() => navigate("/admin")}
              sx={{ fontWeight: "bold" }}
            >
              Thống kê
            </Typography>
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
        {/* Header */}
        <Typography variant="h5" mb={2} fontWeight="bold">
          Danh sách sản phẩm
        </Typography>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-around",
            height: "7vh",
            border: "1px solid #000",
            borderRadius: "8px",
            mb: "1rem",
            color: "#FF7D29",
          }}
        >
          <Typography fontSize={20}>Tất cả</Typography>
          <Box display="flex">
            <Typography fontWeight="bold" fontSize={20}>
              Đang bán
            </Typography>
            <Typography
              sx={{
                bgcolor: "red",
                display: "flex",
                width: "2rem",
                height: "1rem",
                justifyContent: "center",
                borderRadius: "10px",
                color: "#fff",
                fontSize: "10px",
                ml: "-5px",
                mt: "-5px",
              }}
            >
              500
            </Typography>
          </Box>
          <Box display="flex">
            <Typography fontSize={20}>Hết hàng</Typography>
            <Typography
              sx={{
                bgcolor: "red",
                display: "flex",
                width: "2rem",
                height: "1rem",
                justifyContent: "center",
                borderRadius: "10px",
                color: "#fff",
                fontSize: "10px",
                ml: "-5px",
                mt: "-5px",
              }}
            >
              50
            </Typography>
          </Box>
          <Typography fontSize={20}>Bản nháp</Typography>
          <Typography fontSize={20}>Đã xóa</Typography>
        </Box>
        {/* Filter Section */}
        <Grid container spacing={2} mb={2}>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              size="small"
              label="Tìm sản phẩm"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              size="small"
              label="Mã sản phẩm"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              size="small"
              label="Danh mục"
              select
              variant="outlined"
            >
              <MenuItem value="all">Tất cả</MenuItem>
              <MenuItem value="category1">Danh mục 1</MenuItem>
              <MenuItem value="category2">Danh mục 2</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} md={3}>
            <TextField
              fullWidth
              size="small"
              label="Sắp xếp"
              select
              variant="outlined"
            >
              <MenuItem value="all">Tất cả</MenuItem>
              <MenuItem value="category1">Danh mục 1</MenuItem>
              <MenuItem value="category2">Danh mục 2</MenuItem>
            </TextField>
          </Grid>
        </Grid>

        {/* Action Buttons */}
        <Box
          display="flex"
          sx={{ float: "right", width: "24%" }}
          justifyContent="space-between"
          mb={2}
        >
          <Button
            sx={{ borderRadius: "10px" }}
            variant="outlined"
            color="warning"
          >
            Xóa hàng loạt
          </Button>
          <Button
            sx={{ borderRadius: "10px" }}
            variant="outlined"
            color="warning"
          >
            Chỉnh sửa hàng loạt
          </Button>
        </Box>

        {/* Product Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ bgcolor: "#FF7D29" }}>
              <TableRow>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell
                  sx={{ color: "#fff", fontWeight: "bold", fontSize: 17 }}
                >
                  Thông tin sản phẩm
                </TableCell>
                <TableCell
                  sx={{ color: "#fff", fontWeight: "bold", fontSize: 17 }}
                >
                  Giá bán
                </TableCell>
                <TableCell
                  sx={{ color: "#fff", fontWeight: "bold", fontSize: 17 }}
                >
                  Kho hàng
                </TableCell>
                <TableCell
                  sx={{ color: "#fff", fontWeight: "bold", fontSize: 17 }}
                >
                  Danh mục
                </TableCell>
                <TableCell
                  sx={{ color: "#fff", fontWeight: "bold", fontSize: 17 }}
                >
                  Thao tác
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <Typography>{product.name}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography sx={{ textDecoration: "line-through" }}>
                      {product.price}
                    </Typography>
                    <Typography color="primary">
                      {product.discountedPrice}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{product.stockStatus}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography>{product.category}</Typography>
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary">
                      <Edit />
                    </IconButton>
                    <IconButton color="error">
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
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

export default ProductAdmin;
