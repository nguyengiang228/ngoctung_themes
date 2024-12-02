import { Box } from "@mui/material";
import { CategoryStyle } from "./styled";
// import Category1 from "../../assets/category/Category1.png";
// import Category2 from "../../assets/category/Category2.png";
// import Category3 from "../../assets/category/Category3.png";
// import Category4 from "../../assets/category/Category4.png";
import Category5 from "../../assets/category/Category5.png";
import Category6 from "../../assets/category/Category6.png";
const Category = () => {
  return (
    <CategoryStyle>
      {/* <Box className="category-container">
        <img src={Category1} alt="" />

        <img src={Category2} alt="" />

        <img src={Category3} alt="" />

        <img src={Category4} alt="" />
      </Box> */}
      <Box className="category-banner">
        <img src={Category5} alt="" />
        <img src={Category6} alt="" />
      </Box>
    </CategoryStyle>
  );
};

export default Category;
