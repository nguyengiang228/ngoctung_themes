import {
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Pagination,
  Select,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import { ProductStyle } from "./styled";
import Header from "../../containers/Header";
import Menu from "../../containers/Menu";
import Footer from "../../containers/Footer";
import { brands, productArr, statusProd, typeProd } from "./config";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const [sortOrder, setSortOrder] = useState("Mới nhất");
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 450px)");
  return (
    <>
      <Header />
      <Menu />
      <ProductStyle>
        <Box>
          {/* Main Content */}
          <Box
            sx={{
              display: "flex",
              padding: !isMobile ? "4rem 6rem" : "2rem 0.5rem",
              justifyContent: isMobile ? "center" : "flex-start",
            }}
          >
            {/* Sidebar */}
            <Box
              sx={{
                display: { xl: "block", xs: "none" },
                width: "20%",
                padding: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  bgcolor: "#FF7D29",
                  color: "#fff",
                  alignItems: "center",
                  borderRadius: "7px",
                  width: "80%",
                  mb: "1rem",
                  p: "5px",
                }}
              >
                <FilterListIcon />
                <Typography
                  sx={{ mt: "5px", ml: "10px" }}
                  variant="h6"
                  gutterBottom
                >
                  Bộ lọc
                </Typography>
              </Box>
              <Typography fontSize={16} fontWeight="bold">
                78 Sản phẩm
              </Typography>
              <Divider />
              <Box sx={{ marginY: 2 }}>
                <Typography variant="subtitle1">Loại sản phẩm</Typography>
                {typeProd.map((item) => (
                  <>
                    <FormControlLabel
                      control={<Checkbox color="warning" />}
                      label={item.title}
                    />
                    <br />
                  </>
                ))}
              </Box>
              <Divider />
              <Box sx={{ marginY: 2 }}>
                <Typography variant="subtitle1">Thương hiệu</Typography>
                {brands.map((item) => (
                  <>
                    <FormControlLabel
                      control={<Checkbox color="warning" />}
                      label={item.title}
                    />
                    <br />
                  </>
                ))}
              </Box>
              <Divider />
              <Box sx={{ display: "block", marginY: 2 }}>
                <Typography variant="subtitle1">Trạng thái</Typography>
                {statusProd.map((item) => (
                  <>
                    <FormControlLabel
                      control={<Checkbox color="warning" />}
                      label={item.title}
                    />
                    <br />
                  </>
                ))}
              </Box>
            </Box>

            {/* Product Grid */}
            <Box sx={{ flex: 1, paddingLeft: !isMobile ? 2 : 0 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: 2,
                  width: { xl: "auto", xs: "72%" },
                }}
              >
                <Typography
                  sx={{ color: "#FF7D29", fontWeight: "bold" }}
                  variant={!isMobile ? "h4" : "h5"}
                >
                  HÀNG MỚI VỀ
                </Typography>
                <Select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value)}
                  size="small"
                >
                  <MenuItem value="Mới nhất">Mới nhất</MenuItem>
                  <MenuItem value="Giá thấp đến cao">Giá thấp đến cao</MenuItem>
                  <MenuItem value="Giá cao đến thấp">Giá cao đến thấp</MenuItem>
                </Select>
              </Box>
              <Grid container spacing={4}>
                {productArr.map((product, index) => (
                  <Grid item xs={4.4} sm={6} md={4} lg={3} key={index}>
                    <Card
                      sx={{
                        cursor: "pointer",
                        "-webkit-box-shadow":
                          "-1px 0px 13px 0px rgba(163,161,163,1)",
                        "-moz-box-shadow":
                          "-1px 0px 13px 0px rgba(163,161,163,1)",
                        boxshadow: "-1px 0px 13px 0px rgba(163,161,163,1)",
                      }}
                      onClick={() => navigate("/child-page")}
                    >
                      <CardMedia
                        component="img"
                        height="320"
                        image={product.url}
                        // alt={product.title}
                      />
                      <CardContent>
                        <Typography
                          sx={{ color: "#FF7D29" }}
                          variant="body1"
                          noWrap
                        >
                          {product.title}
                        </Typography>
                        <Typography variant="body1" noWrap>
                          {product.content}
                        </Typography>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            width: "62%",
                            justifyContent: "space-around",
                          }}
                        >
                          <Typography variant="h6">{product.price}</Typography>
                          <Typography
                            sx={{
                              ml: "10px",
                              pl: "10px",
                              borderLeft: "1px solid #000",
                              textDecoration: "line-through",
                              color: "#ccc",
                            }}
                            fontWeight="bold"
                            variant="body2"
                            noWrap
                          >
                            {product.discount}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "#FF7D29",
                        height: !isMobile ? "3rem" : "2rem",
                        borderRadius: "10px",
                        margin: "0.5rem 0 0.5rem 0",
                      }}
                      onClick={() => navigate("/child-page")}
                    >
                      <Typography
                        sx={{ color: "#fff", cursor: "pointer" }}
                        fontSize={17}
                      >
                        Thêm vào giỏ hàng
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

              {/* Pagination */}
              <Box
                sx={{ display: "flex", justifyContent: "center", marginY: 4 }}
              >
                <Pagination count={5} color="warning" />
              </Box>
            </Box>
          </Box>
        </Box>
      </ProductStyle>
      <Footer />
    </>
  );
};

export default ProductPage;
