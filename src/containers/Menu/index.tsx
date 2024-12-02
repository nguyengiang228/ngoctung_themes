import { useNavigate } from "react-router-dom";
import { MenuStyle } from "./styled";
import { Box, Typography, useMediaQuery } from "@mui/material";

const Menu = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:450px)");
  // const [address, setAddress] = useState("");
  // const [typeHome, setTypeHome] = useState("");
  // const [price, setPrice] = useState("");
  // const [status, setStatus] = useState("");
  // const [acreage, setAcreage] = useState("");

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAddress(event.target.value);
  // };
  // const handleSelectHome = (e: SelectChangeEvent) => {
  //   setTypeHome(e.target.value);
  // };
  // const handleChangePrice = (event: SelectChangeEvent) => {
  //   setPrice(event.target.value);
  // };
  // const handleChangeStatus = (e: SelectChangeEvent) => {
  //   setStatus(e.target.value);
  // };
  // const handleChangAcreage = (e: SelectChangeEvent) => {
  //   setAcreage(e.target.value);
  // };
  return (
    <>
      {!isMobile && (
        <MenuStyle>
          <Box className="menu-container">
            <Typography className="menu-pets">Chó</Typography>
            <Typography className="menu-pets">Mèo</Typography>
            <Typography className="menu-pets">Thiết bị thông minh</Typography>
            <Typography
              onClick={() => navigate("/product")}
              className="menu-pets"
            >
              Hàng mới về
            </Typography>
            <Typography
              onClick={() => navigate("/product")}
              className="menu-pets"
            >
              Thương hiệu
            </Typography>
            <Typography className="menu-pets">Pagazine chăm Boss</Typography>
            <Typography className="menu-pets">News</Typography>
            <Typography className="menu-pets">Today's Sale</Typography>
          </Box>
          <Box sx={{ paddingRight: "5rem" }}>
            <Typography className="menu-pets">VI/USD</Typography>
          </Box>
        </MenuStyle>
      )}
    </>
  );
};

export default Menu;
