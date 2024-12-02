import styled from "@emotion/styled";

export const BannerStyle = styled.div`
  margin-bottom: 4rem;
  .react-slideshow-container + ul.indicators .each-slideshow-indicator:before {
    width: 10px;
    height: 10px;
    margin-left: 8px;

    /* background-color: rgba(transparent, none, none, transparent); */
  }
  .react-slideshow-container .banner-image,
  .banner-image-jpg {
    width: 100%;
    height: 80vh;
  }

  .react-slideshow-container .each-slideshow-indicator {
    border: none;
    outline: none;
  }
  .react-slideshow-container + ul.indicators li {
    margin-top: -1rem;
    width: 40px;
    height: 40px;
  }

  @media only screen and (max-width: 450px) {
    margin-bottom: 4rem;
    /* .react-slideshow-container
      + ul.indicators */
    /* .each-slideshow-indicator:before {
      width: 10px;
      height: 10px;
      margin-left: 8px; */

    /* background-color: rgba(transparent, none, none, transparent); */
    /* } */
    .react-slideshow-container .banner-image,
    .banner-image-jpg {
      width: 100%;
      height: 25vh;
    }

    .react-slideshow-container .each-slideshow-indicator {
      border: none;
      outline: none;
    }
    .react-slideshow-container + ul.indicators li {
      margin-top: -1rem;
      width: 40px;
      height: 40px;
    }
  }
  /* .react-slideshow-container + ul.indicators {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 1px;
  } */
`;
