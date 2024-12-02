import styled from "@emotion/styled";

export const AddressStyle = styled.div`
  .address-header-title {
    width: 95%;
    margin-left: 3rem;
  }
  .address-title {
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 92%; */
    margin: 0 15px;
  }
  .address-divider::after {
    border: 1px solid #ff7d29;
  }
  .address-divider::before {
    border: 1px solid #ff7d29;
  }
  .address-news-container {
    border-radius: 10px;
    border: 1px solid #ccc;
    margin-right: 3.2rem;
    overflow: hidden;
    -webkit-box-shadow: -1px 0px 18px 1px rgba(186, 175, 186, 1);
    -moz-box-shadow: -1px 0px 18px 1px rgba(186, 175, 186, 1);
    box-shadow: -1px 0px 18px 1px rgba(186, 175, 186, 1);
  }
  .address-img {
    width: 30vw;
  }
  .address-text {
    width: 95%;
    padding: 1.5rem;
  }

  @media only screen and (max-width: 450px) {
    .address-header-title {
      width: 100%;
      margin-left: 0;
    }
    .address-title {
      display: flex;
      align-items: center;
      justify-content: center;
      /* width: 92%; */
      margin: 0 15px;
    }
    .address-divider::after {
      border: 1px solid #ff7d29;
    }
    .address-divider::before {
      border: 1px solid #ff7d29;
    }
    .address-news-container {
      width: 95%;
      border-radius: 10px;
      border: 1px solid #ccc;
      margin-right: 3.2rem;
      overflow: hidden;
      -webkit-box-shadow: -1px 0px 18px 1px rgba(186, 175, 186, 1);
      -moz-box-shadow: -1px 0px 18px 1px rgba(186, 175, 186, 1);
      box-shadow: -1px 0px 18px 1px rgba(186, 175, 186, 1);
    }
    .address-img {
      width: 100%;
    }
    .address-text {
      width: 95%;
      padding: 1.5rem;
    }
  }
`;
