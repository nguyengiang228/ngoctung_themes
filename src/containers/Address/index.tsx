import { AddressStyle } from "./styled";
import {
  Box,
  Button,
  Divider,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Address1 from "../../assets/Address/address1.png";
import Address2 from "../../assets/Address/address2.png";
import Address3 from "../../assets/Address/address3.png";

const Address = () => {
  const addressArr = [
    {
      id: 1,
      url: Address1,
      title: "Lolipet Thái Hà",
      content: "146 Thái Hà, Quận Đống Đa, TP. Hà Nội",
    },
    {
      id: 2,
      url: Address2,
      title: "Lolipet Thanh Xuân",
      content: "275 Nguyễn Trãi, Quận Thanh Xuân, TP. Hà Nội",
    },
    {
      id: 3,
      url: Address3,
      title: "Lolipet Long Biên",
      content: "293 Ngọc Lâm, Quân Long Biên, TP. Hà Nội",
    },
  ];
  const isMobile = useMediaQuery("(max-width: 450px)");
  return (
    <AddressStyle>
      <Box className="address-header-title">
        <Divider className="address-divider" variant="fullWidth">
          <Typography
            className="address-title"
            sx={{ color: "#FF7D29", mb: "5px", height: "5rem" }}
            fontWeight="bold"
            fontSize={!isMobile ? 27 : 22}
          >
            Mua Trực Tiếp Tại Cửa Hàng
          </Typography>
        </Divider>
      </Box>
      <Box sx={{ margin: { xl: "0 0 0 3rem", xs: " 0 0 0 1rem" } }}>
        <Grid
          container
          spacing={{ xs: 2, md: 1 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {addressArr.map((item) => (
            <Grid item xs={2} sm={4} md={4} key={item.id}>
              <Box className="address-news-container" key={item.id}>
                <img className="address-img" src={item.url} />
                <Box className="address-text">
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      // color: "#FF7D29",
                      height: "3rem",
                    }}
                    fontWeight="bold"
                    fontSize={25}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      height: "3rem",
                    }}
                  >
                    {item.content}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      color="warning"
                      sx={{
                        color: "#fff",
                        borderRadius: "8px",
                      }}
                    >
                      Chỉ đường
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </AddressStyle>
  );
};

export default Address;
