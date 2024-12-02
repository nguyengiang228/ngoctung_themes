import styled from "@emotion/styled";

export const MenuStyle = styled.div`
  display: flex;
  height: 5vh;
  align-items: center;
  color: #fff;
  background-color: #ff7d29;
  justify-content: space-between;
  padding: 0 2.8rem 0 6.5rem;
  .menu-container {
    display: flex;
    .menu-pets {
      color: #fff;
      font-weight: bold;
      margin: 0 1rem;
      cursor: pointer;
    }
    .menu-pets:hover {
      color: #ccc;
    }
  }
`;
