import styled from "@emotion/styled";

export const OutstandStyled = styled.div`
  display: flex;
  margin: 1rem 5rem;
  .outStanding {
    width: 50%;
    border-right: 2px solid #ccc;
    text-align: justify;
    padding-right: 1rem;
    .outstanding-container {
      display: flex;
      width: 100%;
      margin-bottom: 1rem;
    }
    .outstanding-image {
      width: 50%;
      height: 35vh;
      /* overflow: hidden; */
      .image {
        width: 293.72px;
        object-fit: cover;
        height: 300px;
        border-radius: 10px;
      }
      .triangle {
        width: 0;
        height: 0;
        border-bottom-left-radius: 5px;
        border-style: solid;
        border-width: 4em 0 0 4em;
        border-color: transparent transparent transparent #efa011;
        transform: rotate(90deg) translate(-18.8rem, 0);
      }
    }
    .outstanding-info {
      padding-left: 1rem;
    }
    .outstanding-body-text {
      margin-top: 0.8rem;
      color: #4d4b4b;
    }
    .outstanding-info-text {
      display: flex;
      width: 70%;
      justify-content: space-between;
    }
  }
  .outStanding-news {
    width: 50%;
    margin-left: 1rem;
    text-align: justify;
    .outStanding-news-info {
      display: flex;
      .outStanding-news-image {
        width: 40%;
        border-radius: 10px;
        /* height: 200px; */
      }
      .outStanding-news-title {
      }
      .outStanding-news-span {
        color: #4d4b4b;
      }
    }
  }
`;
