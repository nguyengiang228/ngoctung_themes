import styled from "@emotion/styled";

export const FavoritesStyled = styled.div`
  width: 99%;
  margin-top: 2rem;
  padding: 0 1rem;
  .favorite-title {
    padding-right: 1.5rem;
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    float: right;
    width: 97%;
    color: #ff7d29;
    margin: 2rem 0 0.5rem 0;
  }
  .favorite-container {
    cursor: pointer;
    overflow: hidden;
    border-radius: 10px;
    /* border: 1px solid #ccc; */
    /* margin: 0 1rem; */
    height: 46vh;
    padding: 0 1.5rem;
    -webkit-box-shadow: -2px 1px 22px 3px rgb(223, 223, 223);
    -moz-box-shadow: -2px 1px 22px 3px rgb(223, 223, 223);
    box-shadow: -2px 1px 22px 3px rgb(223, 223, 223);
  }
  .favorite-image {
    width: 16.5vw;
  }
  .favorite-name-tag {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    .favorite-title {
      font-weight: bold;
      width: 100%;
      color: #ff7d29;
      margin: 0;
      padding: 0;
    }
    .favorite-discount {
      color: #6b6b6b;
      width: 100%;
      text-decoration: line-through;
    }
    .favorite-price {
      font-weight: bold;
      font-size: 22px;
      color: #ec262a;
    }
  }
  .favorite-name-tag > div {
    width: 45%;
    border-right: 2px solid #ccc;
  }
  .favorite-content {
    width: 95%;
    margin-top: 0.5rem;
    text-align: justify;
    color: #6b6b6b;
  }
  .news-container {
    overflow: hidden;
    border-radius: 10px;
    cursor: pointer;
    height: 45vh;
    padding: 0 1.5rem;
    -webkit-box-shadow: -2px 1px 22px 3px rgb(223, 223, 223);
    -moz-box-shadow: -2px 1px 22px 3px rgb(223, 223, 223);
    box-shadow: -2px 1px 22px 3px rgb(223, 223, 223);
  }

  @media only screen and (max-width: 450px) {
    width: 96%;
    margin-top: 2rem;
    padding: 0 0.5rem;
    .favorite-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      float: left;
      width: 98%;
      color: #ff7d29;
      margin: 2rem 0 0.5rem 0%.5;
    }
    .favorite-image {
      width: 40.5vw;
    }
    .favorite-name-tag {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      .favorite-price {
        font-weight: bold;
        font-size: 18px;
        color: #ec262a;
      }
    }
    .favorite-container {
      cursor: pointer;
      overflow: hidden;
      border-radius: 10px;
      height: 36vh;
      padding: 0 1.5rem;
      -webkit-box-shadow: -2px 1px 22px 3px rgb(223, 223, 223);
      -moz-box-shadow: -2px 1px 22px 3px rgb(223, 223, 223);
      box-shadow: -2px 1px 22px 3px rgb(223, 223, 223);
    }
    .news-container {
      overflow: hidden;
      border-radius: 10px;
      cursor: pointer;
      height: 36vh;
      padding: 0 1.5rem;
      -webkit-box-shadow: -2px 1px 22px 3px rgb(223, 223, 223);
      -moz-box-shadow: -2px 1px 22px 3px rgb(223, 223, 223);
      box-shadow: -2px 1px 22px 3px rgb(223, 223, 223);
    }
  }
`;
