import styled from "@emotion/styled";

export const ChildStyle = styled.div`
  .describe {
    display: flex;
    width: 50%;
    margin-left: 5rem;
    .describe-title {
      width: 9vw;
    }
  }
  .child-description {
    font-weight: bold;
    font-size: 2.5ch;
  }
  .review-image {
    width: 70px;
  }
  @media only screen and (max-width: 450px) {
    .describe {
      display: flex;
      width: 50%;
      margin-left: 5rem;
      .describe-title {
        width: 9vw;
      }
    }
    .child-description {
      font-weight: bold;
      font-size: 2.5ch;
    }
    .review-image {
      width: 70px;
    }
  }
`;
