import {
  Box,
  Button,
  Divider,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  MenuList,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { HeadrStyled } from "./styled";
import logo from "../../assets/Logo/logoLoliPets.png";
import { NavLink, useNavigate } from "react-router-dom";
// import Avatar from "../../assets/image/avt1.png";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";

const data = [
  {
    title: "Chó",
  },
  {
    title: "Mèo",
  },
  {
    title: "Thiết bị thông minh",
  },
  {
    title: "Hàng mới về",
  },
  {
    title: "Thương hiệu",
  },
  {
    title: "Pagazine chăm Boss",
  },
  {
    title: "News",
  },
  {
    title: "Today’s Sale",
  },
  {
    title: "My Wishlist",
  },
  {
    title: "Hotline: 012 345 6789",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:450px)");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <HeadrStyled>
      {isMobile && (
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mr: "2rem",
          }}
        >
          <Box
            sx={{ float: "left", cursor: "pointer" }}
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? true : undefined}
            onClick={handleClick}
          >
            {anchorEl === null ? (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: { xs: "#000", xl: "#fff" },
                }}
              >
                <MenuIcon sx={{ color: "#fff" }} fontSize="large" />
              </Box>
            ) : (
              <Box
                sx={{
                  cursor: "pointer",
                  zIndex: 1000,
                  color: { xs: "#000", xl: "#fff" },
                }}
              >
                <CloseIcon fontSize="large" />
              </Box>
            )}
          </Box>
          <SearchOutlinedIcon sx={{ ml: "1.5rem" }} fontSize="large" />
        </Box>
      )}
      <Box sx={{ display: { xs: "none", xl: "none" } }}>
        <Paper sx={{ minWidth: "300px", zIndex: 1 }}>
          <Menu
            sx={{ minWidth: "280px", marginTop: 0.8 }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{ "aria-labelledby": "basic-button" }}
          >
            <Box sx={{ m: "0 0.5rem" }}>
              <Typography fontWeight="bold">Menu</Typography>
              <Divider />
            </Box>

            {data && (
              <MenuList sx={{ width: 190, maxWidth: "100%", p: "0 0 6px 0" }}>
                {data.map((item, index) => (
                  <MenuItem
                    sx={{ borderBottom: "1px solid #bdbdbd" }}
                    key={index}
                    onClick={handleClose}
                  >
                    <NavLink
                      style={{ textDecoration: "none", color: "black" }}
                      to="/product"
                    >
                      {item.title}
                    </NavLink>
                  </MenuItem>
                ))}
              </MenuList>
            )}
          </Menu>
        </Paper>
      </Box>
      <Box onClick={() => navigate("/login-user")} className="header">
        <img style={{ width: "9rem" }} src={logo} />
      </Box>
      <Box className="header-search">
        <FormControl
          sx={{
            m: 1,
            width: "100ch",
            bgcolor: "#fff",
            borderRadius: "10px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
          fullWidth
          variant="outlined"
        >
          <FilledInput
            id="outlined-adornment-search"
            type="text"
            fullWidth
            sx={{
              bgcolor: "#fff",
              ":hover": {
                bgcolor: "#fff",
              },
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton edge="end">
                  <SearchIcon fontSize="large" sx={{ color: "#FF7D29" }} />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <Box className="header header-menu-option">
        <Box
          className="header-menu-category"
          sx={{ display: { xl: "block", xs: "none" } }}
        >
          {/* <NewspaperIcon fontSize="large" /> */}
          <Typography fontSize={17}>Hotline</Typography>
          <Typography fontWeight="bold">0123456789</Typography>
        </Box>
        <Box
          className="header-menu-category"
          sx={{ display: { xl: "block", xs: "none" } }}
        >
          <FavoriteIcon
            sx={{
              marginLeft: "12px",
              display: "flex",
              alignItems: "center",
            }}
            fontSize="large"
          />
          <Typography sx={{ "&:hover": { fontWeight: "bold" } }} fontSize={17}>
            Wishlist
          </Typography>
        </Box>
        <Box
          onClick={() => navigate("/login")}
          className="header-menu-category"
        >
          <PersonIcon
            sx={{
              marginLeft: "25px",
              display: "flex",
              alignItems: "center",
            }}
            fontSize="large"
          />
          <Typography
            className="login-text"
            fontSize={17}
            sx={{ display: { xl: "block", xs: "none" } }}
          >
            Đăng nhập
          </Typography>
        </Box>
        <Box
          // onClick={() => navigate("/login")}
          className="header-menu-category"
        >
          <Box display="flex">
            <ShoppingCartIcon
              sx={{
                marginLeft: "12px",
                display: "flex",
                alignItems: "center",
              }}
              fontSize="large"
            />
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#f5ff30",
                width: "21px ",
                height: "21px",
                color: "#000",
                borderRadius: "10px",
                ml: "-12px",
                mt: "-5px",
              }}
            >
              4
            </Typography>
          </Box>
          <Typography
            className="login-text"
            fontSize={17}
            sx={{ display: { xl: "block", xs: "none" } }}
          >
            Giỏ hàng
          </Typography>
        </Box>
      </Box>
    </HeadrStyled>
  );
};

export default Header;
