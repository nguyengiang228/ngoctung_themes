import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Rating,
  Select,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import { ChildStyle } from "./styled";
import { ChildProductArr, reviews } from "./config";
import { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Child1 from "../../assets/ChildPageImg/child1.png";
import Child2 from "../../assets/ChildPageImg/child2.png";
import Child3 from "../../assets/ChildPageImg/child3.png";
import Child4 from "../../assets/ChildPageImg/child4.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import { useNavigate } from "react-router-dom";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ChildPage = () => {
  const images = [
    Child1, // Image 1
    Child2, // Image 2
    Child3, // Image 3
    Child4, // Image 4
  ];
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [count, setCount] = useState(1);
  const isMobile = useMediaQuery("(max-width: 450px)");

  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleSubtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleSelectImage = (index: any) => {
    setSelectedImage(index);
  };

  const handleScrollUp = () => {
    if (selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleScrollDown = () => {
    if (selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };
  return (
    <>
      <Header />
      <ChildStyle>
        <Box sx={{ padding: !isMobile ? 10 : "2rem 0 0.5rem 10px" }}>
          {/* Sản phẩm */}
          <Grid container spacing={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column-reverse",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  ml: !isMobile ? "2rem" : "1rem",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <IconButton
                  onClick={handleScrollUp}
                  disabled={selectedImage === 0}
                >
                  <ArrowDropUpIcon />
                </IconButton>
                {images.map((img, index) => (
                  <CardMedia
                    key={index}
                    component="img"
                    image={img}
                    alt={`Image ${index + 1}`}
                    sx={{
                      width: 60,
                      height: 60,
                      marginY: 1,
                      border:
                        selectedImage === index
                          ? "2px solid orange"
                          : "1px solid #ccc",
                      cursor: "pointer",
                      borderRadius: 1,
                    }}
                    onClick={() => handleSelectImage(index)}
                  />
                ))}
                <IconButton
                  onClick={handleScrollDown}
                  disabled={selectedImage === images.length - 1}
                >
                  <ArrowDropDownIcon />
                </IconButton>
              </Box>

              {/* Main Image (Right) */}
              <Box sx={{ marginLeft: 2, flex: 1 }}>
                <CardMedia
                  component="img"
                  image={images[selectedImage]}
                  alt={`Selected Image ${selectedImage + 1}`}
                  sx={{ width: "100%", height: "auto", borderRadius: 2 }}
                />
              </Box>
            </Box>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" fontWeight="bold">
                Thức Ăn Hạt Cho Chó Con Poodle - Royal Canin Poodle Puppy
              </Typography>
              <Rating
                value={4.5}
                precision={0.5}
                readOnly
                sx={{ marginY: 1 }}
              />
              <Typography variant="body2" color="textSecondary">
                25 đánh giá
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Thương Hiệu:
                <span style={{ color: "#FF7D29", fontWeight: "bold" }}>
                  &nbsp; Royal Canin
                </span>
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  color="#b1b1b1"
                  sx={{
                    textDecoration: "line-through",
                    borderRight: "1px solid #000",
                    mr: "10px",
                    pr: "10px",
                  }}
                  fontSize={!isMobile ? 20 : 17}
                >
                  150.000₫
                </Typography>
                <Typography
                  variant={!isMobile ? "h4" : "h5"}
                  color="#e6292e"
                  fontWeight="bold"
                  sx={{ marginY: 2 }}
                >
                  129.000₫
                </Typography>
              </Box>
              <Box sx={{ marginBottom: 2 }}>
                <Typography variant="body1">Size:</Typography>
                <Button
                  variant="outlined"
                  sx={{
                    marginRight: 1,
                    border: "1px solid #FF7D29",
                    color: "#FF7D29",
                  }}
                >
                  500g
                </Button>
                <Button
                  sx={{ border: "1px solid #ccc", color: "#ccc" }}
                  variant="outlined"
                >
                  1kg
                </Button>
              </Box>
              <Typography fontWeight="bold"> Số lượng:</Typography>
              <Box
                sx={{
                  width: "80px",
                  marginBottom: 2,
                  display: "flex",
                  alignItems: "center",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                  padding: " 0 0.5rem",
                }}
              >
                <Typography
                  sx={{ cursor: "pointer", mr: "0.2rem" }}
                  onClick={handleSubtract}
                  fontSize={28}
                >
                  -
                </Typography>
                <Typography
                  sx={{ width: "30px", margin: "0 0 0 1rem" }}
                  fontSize={20}
                >
                  {count}
                </Typography>
                <Typography
                  sx={{ cursor: "pointer" }}
                  onClick={handleIncrease}
                  fontSize={28}
                >
                  +
                </Typography>
              </Box>
              <Box
                sx={{
                  display: !isMobile ? "flex" : "block",
                  justifyContent: "space-between",
                  width: !isMobile ? "50%" : "80%",
                }}
              >
                <Button
                  onClick={() => navigate("/shoping-cart")}
                  variant="outlined"
                  sx={{
                    width: { xl: "240px", xs: "100%" },
                    color: "#FF7D29",
                    borderColor: "#FF7D29",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography fontSize={!isMobile ? 17 : 20}>
                    Thêm vào giỏ hàng
                  </Typography>
                  <ShoppingCartIcon sx={{ color: "#FF7D29" }} />
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    mt: !isMobile ? 0 : "1rem",
                    width: { xl: "170px", xs: "100%" },
                    height: "50px",
                    bgcolor: "#FF7D29",
                    color: "#fff",
                    borderColor: "#FF7D29",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                  onClick={() => navigate("/payment")}
                >
                  <Typography fontSize={!isMobile ? 17 : 20}>
                    Thanh toán
                  </Typography>
                  <PaymentOutlinedIcon />
                </Button>
              </Box>
            </Grid>
          </Grid>
          <Box
            sx={{
              display: { xl: "none", xs: "flex" },
              mt: "2rem",
              borderBottom: "1px solid #000",
            }}
          >
            <LocalShippingOutlinedIcon />
            <Box sx={{ ml: "0.5rem" }}>
              <Typography>Miễn Phí Vận Chuyển</Typography>
              <Typography>
                Tối đa 30K cho đơn hàng từ 500K <br />
                Hoả tốc 4h trong nội thành Hà Nội
              </Typography>
            </Box>
          </Box>
          {/* Mô tả sản phẩm */}
          <Box sx={{ display: { xl: " block", xs: "none" }, marginY: 4 }}>
            <Typography
              variant="h6"
              sx={{
                borderRadius: "8px",
                backgroundColor: "#FF7D29",
                padding: 1,
                color: "white",
                fontWeight: "bold",
                fontSize: 25,
              }}
            >
              Mô tả sản phẩm
            </Typography>
            <Box sx={{ padding: 2 }}>
              <Box className="describe">
                <Typography className="describe-title">Danh mục: </Typography>
                <Typography>
                  Hàng Mới Về {">"} Giảm Giá {">"} Thức Ăn Cho Mèo
                </Typography>
              </Box>
              <Box className="describe">
                <Typography className="describe-title">Thương hiệu:</Typography>
                <Typography>Royal Canin</Typography>
              </Box>
              <Box className="describe">
                <Typography className="describe-title">Phân loại:</Typography>
                <Typography>Thức Ăn Khô</Typography>
              </Box>
              <Box className="describe">
                <Typography className="describe-title">
                  Độ tuổi phù hợp:
                </Typography>
                <Typography>
                  Mèo nhà trưởng thành (trên 12 tháng tuổi)
                </Typography>
              </Box>
              <Box className="describe">
                <Typography className="describe-title">
                  Đặc tính dinh dưỡng:
                </Typography>
                <Typography>
                  Nhiều Protein, bổ sung vitamin B1, B2, E,...
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* Chi tiết sản phẩm */}
          <Box sx={{ display: { xl: " block", xs: "none" }, marginY: 4 }}>
            <Typography
              variant="h6"
              sx={{
                borderRadius: "8px",
                backgroundColor: "#FF7D29",
                padding: 1,
                color: "white",
                fontWeight: "bold",
                fontSize: 25,
              }}
            >
              Chi tiết sản phẩm
            </Typography>
            <Box sx={{ padding: " 2rem 5rem", width: "90%" }}>
              <Typography className="child-description">
                Thức Ăn Cho Mèo Trưởng Thành Royal Canin Indoor 27
              </Typography>
              <ul>
                <li>
                  Thức ăn cho mèo Royal Canin Indoor sẽ là sự lựa chọn phù hợp
                  với bé cưng của bạn. Được thiết kế với mức độ calo vừa
                  phải, hạt Royal Canin giúp mèo hạn chế tăng trọng lượng. Các
                  sợi psyllium và các chất đạm dễ tiêu hóa có trong thức ăn cũng
                  giúp loại bỏ búi lông trong bụng và giảm thiểu mùi hôi khó
                  chịu trong hộp cát. Thức ăn Royal Canin với dạng hạt khô độc
                  đáo còn giúp mèo giảm sự tích tụ của cao răng và mảng bám.
                </li>
              </ul>
              <Typography className="child-description">Lợi ích:</Typography>
              <ul>
                <li>
                  GIẢM MÙI HÔI CHẤT THẢI: Các protein làm tăng khả năng tiêu hóa
                  các chất dinh dưỡng, đồng thời hỗ trợ duy trì sức khỏe hệ
                  thống tiết niệu, giảm lượng phân (và mùi hôi của khay vệ sinh)
                  ở mèo trưởng thành.
                </li>
                <li>
                  QUẢN LÝ CÂN NẶNG: Chế độ ăn kiêng với mức calo vừa phải, thích
                  ứng với cường độ hoạt động thấp của mèo nhà, giúp giữ cân nặng
                  ở mức lý tưởng.
                </li>
                <li>
                  Thành phần: Bột gà, ngô, gạo nấu bia, gluten ngô, lúa mì, mỡ
                  gà, gluten lúa mì, hương vị tự nhiên, gạo lứt, chất xơ đậu,
                  trấu, bột củ cải khô, dầu thực vật, canxi sulfat, men khô
                  chưng cất ngũ cốc, natri silico aluminate, dầu cá, chiết xuất
                  hương thảo, được bảo quản bằng hỗn hợp tocopherols và axit
                  xitric...
                </li>
              </ul>
            </Box>
          </Box>

          {/* Đánh giá sản phẩm */}
          <Box sx={{ padding: 2 }}>
            {/* Tổng điểm đánh giá */}
            <Grid container spacing={2}>
              <Box
                sx={{
                  width: !isMobile ? "auto" : "100%",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: "27px",
                  backgroundColor: !isMobile ? "#FF7D29" : "#fff",
                  color: !isMobile ? "white" : "#000",
                  borderRadius: "8px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    padding: 1,
                    color: !isMobile ? "white" : "#000",
                  }}
                >
                  Đánh giá sản phẩm
                </Typography>
                {isMobile ? <ArrowForwardIosOutlinedIcon /> : <></>}
              </Box>
              {/* Bộ lọc đánh giá */}
              <Grid
                item
                xs={12}
                sm={7}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  mt: "10px",
                }}
              >
                <FormControl fullWidth size="small">
                  <InputLabel>Đánh giá</InputLabel>
                  <Select defaultValue="all">
                    <MenuItem value="all">Tất cả</MenuItem>
                    <MenuItem value="5">5 sao</MenuItem>
                    <MenuItem value="4">4 sao</MenuItem>
                    <MenuItem value="3">3 sao</MenuItem>
                    <MenuItem value="2">2 sao</MenuItem>
                    <MenuItem value="1">1 sao</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth size="small">
                  <InputLabel>Ảnh</InputLabel>
                  <Select defaultValue="all">
                    <MenuItem value="all">Tất cả</MenuItem>
                    <MenuItem value="with-image">Có ảnh</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Box
                sx={{
                  height: "50px",
                  width: "120px",
                  display: !isMobile ? "flex" : "none",
                  alignItems: "center",
                  mt: "30px",
                  ml: "1rem",
                  p: "0 5px",
                  backgroundColor: "#FF7D29",
                  color: "white",
                  borderRadius: "8px",
                }}
              >
                <Typography>Viết đánh giá</Typography>
              </Box>
            </Grid>

            {/* Danh sách đánh giá */}
            <Grid container spacing={2} sx={{ marginTop: 2 }}>
              <Grid item xs={12} sm={4}>
                <Card sx={{ padding: 2, textAlign: "center", height: "145px" }}>
                  <Typography variant="h4" fontWeight="bold">
                    4.5
                  </Typography>
                  <Rating value={4.5} precision={0.5} readOnly size="large" />
                  <Typography variant="body1">14 đánh giá</Typography>
                </Card>
              </Grid>
              {reviews.map((review) => (
                <Grid item xs={12} sm={6} md={4} key={review.id}>
                  <Card>
                    <CardContent>
                      <Rating
                        value={review.rating}
                        readOnly
                        size="small"
                        sx={{ marginY: 1 }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {review.dateOrder}
                      </Typography>
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 2 }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography variant="body1" fontWeight="bold">
                            {review.name}
                          </Typography>
                          <Typography sx={{ ml: "5px" }} fontSize={13}>
                            • Size: {review.size}
                          </Typography>
                        </Box>
                      </Box>

                      <Avatar
                        className="review-image"
                        src={review.avatar}
                        alt={review.name}
                      />

                      <Typography variant="body2">{review.comment}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          {/* Sản phẩm liên quan */}
          <Box
            sx={{
              height: { xl: "auto", xs: "52vh" },
              overflow: "hidden",
              margin: { xl: "0 0 0 2rem", xs: 0 },
              marginY: !isMobile ? 4 : 0,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
                padding: 1,
                color: "#FF7D29",
                fontWeight: "bold",
              }}
              fontSize={27}
            >
              Có thể bạn quan tâm
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                transform: "translateY(14rem)",
              }}
            >
              {isMobile ? (
                <ArrowBackIosIcon color="warning" fontSize="large" />
              ) : (
                <></>
              )}
              {isMobile ? (
                <ArrowForwardIosIcon color="warning" fontSize="large" />
              ) : (
                <></>
              )}
            </Box>
            <Grid container spacing={2} sx={{ padding: 2 }}>
              {ChildProductArr.map((product, index) => (
                <Grid item xs={6} sm={4} md={4} lg={3} key={index}>
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
                      height={!isMobile ? "320" : "250"}
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
                          width: "60%",
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
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </ChildStyle>
      <Footer />
    </>
  );
};

export default ChildPage;
