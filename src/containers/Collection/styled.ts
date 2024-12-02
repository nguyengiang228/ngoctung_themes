import styled from "@emotion/styled";

export const CollectionStyle = styled.div`
  width: 99%;
  padding: 0 1rem;
  .collection-title {
    padding-right: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    float: right;
    width: 57%;
    color: #ff7d29;
  }
  .container {
    width: 98%;
    display: flex;
    justify-content: space-around;
    overflow: hidden;
    /* padding: 0 10rem; */
    img {
      width: 13.5vw;
      /* border-radius: 50%; */
    }
  }
  @media only screen and (max-width: 450px) {
    width: 100%;
    padding: 0 1rem;
    .collection-title {
      padding-right: 1.5rem;
      display: block;
      align-items: center;
      float: center;
      width: 99%;
      color: #ff7d29;
      margin-bottom: 1rem;
    }
    .container {
      width: 93%;
      display: flex;
      justify-content: space-around;
      overflow: hidden;
      flex-wrap: wrap;
      /* padding: 0 10rem; */
      img {
        width: 28.5vw;
        /* border-radius: 50%; */
      }
    }
  }
`;
