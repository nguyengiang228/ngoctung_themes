import styled from "@emotion/styled";

export const CategoryStyle = styled.div`
  margin-top: -2rem;
  .category-container {
    display: flex;
    padding: 0 10rem;
    justify-content: space-between;
    img {
      width: 19.2vw;
    }
  }
  .category-banner {
    margin: 3rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 48.6vw;
      border-radius: 8px;
      overflow: hidden;
    }
  }
  @media only screen and (max-width: 450px) {
    margin-top: -4rem;
    .category-banner {
      display: block;
      /* justify-content: space-between; */
      align-items: center;
      img {
        width: 100%;
        border-radius: 8px;
        overflow: hidden;
      }
    }
  }
`;
