import { HomePageStyle } from "./styled";
import Header from "../../containers/Header";
import Menu from "../../containers/Menu";
import Banner from "../../containers/Banner";
import Category from "../../containers/Category";
import Collection from "../../containers/Collection";
import Favorites from "../../containers/Favorites";
import Footer from "../../containers/Footer";
import Brands from "../../containers/Brands";
import Address from "../../containers/Address";

const HomePage = () => {
  return (
    <HomePageStyle>
      <Header />
      <Menu />
      <Banner />
      <Category />
      <Collection />
      <Favorites />
      <Brands />
      <Address />
      <Footer />
    </HomePageStyle>
  );
};

export default HomePage;
