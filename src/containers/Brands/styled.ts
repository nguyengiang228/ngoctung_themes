import styled from "@emotion/styled";

export const BrandStyle = styled.div`
  width: 99%;
  padding: 0 1rem;
  margin-bottom: 2rem;
  .brands-title {
    padding-right: 1.5rem;
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    float: right;
    width: 97%;
    color: #ff7d29;
    margin: 2rem 0 0.5rem 0;
  }
  .brands-container {
    height: 14rem;
    overflow: hidden;
    /* border: 1px solid #ccc; */
    .brands-image {
      width: 12.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }
  }
  .brands-news-container {
    border-radius: 10px;
    border: 1px solid #ccc;
    margin-right: 3.2rem;
    overflow: hidden;
    -webkit-box-shadow: -1px 0px 18px 1px rgba(186, 175, 186, 1);
    -moz-box-shadow: -1px 0px 18px 1px rgba(186, 175, 186, 1);
    box-shadow: -1px 0px 18px 1px rgba(186, 175, 186, 1);
  }
  .brand-text {
    width: 95%;
    padding: 1.5rem;
  }

  @media only screen and (max-width: 450px) {
    width: 100%;
    padding: 0 0.7rem;
    margin-bottom: 2rem;
    .brands-title {
      width: 96%;
    }
    .brands-container {
      height: 14rem;
      overflow: hidden;
      /* border: 1px solid #ccc; */
    }
    .brands-news-container {
      border-radius: 10px;
      border: 1px solid #ccc;
      margin-right: 1.5rem;
      overflow: hidden;
      -webkit-box-shadow: -1px 0px 18px 1px rgba(186, 175, 186, 1);
      -moz-box-shadow: -1px 0px 18px 1px rgba(186, 175, 186, 1);
      box-shadow: -1px 0px 18px 1px rgba(186, 175, 186, 1);
    }
  }
`;
