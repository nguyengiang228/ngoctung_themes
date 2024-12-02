import styled from "@emotion/styled";

export const HeadrStyled = styled.div`
  width: 100%;
  background-color: #ff7b25;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 5rem;
  color: #fff;
  .header {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .header-menu-option {
    width: 30%;
    align-items: center;
    justify-content: space-between;
    margin-right: 6rem;
  }
  .header-search {
    margin: 0 1rem;
    #outlined-adornment-search {
      background-color: #fff;
      color: #000;
      border-radius: 10px;
    }
  }
  .header-menu-category {
    width: 90%;
    /* display: flex; */
    align-items: center;
    justify-content: space-around;
    /* margin: 0 5px; */
  }
  .header-menu-category:hover {
    cursor: pointer;
  }
  .header-menu-category-icon {
    display: flex;
  }

  .login-text {
    width: 5vw;
    padding: 1px;
  }
  .register-text {
    width: 4vw;
    padding: 1px;
    margin-left: 1rem;
  }

  .login-text:hover,
  .register-text:hover {
    cursor: pointer;
    font-weight: bold;
  }
  .header-notication {
    display: flex;
    width: 170px;
    align-items: center;
    justify-content: space-between;
    .header-avatar {
      width: 40px;
    }
    .notice-status {
      color: #fff;
      background-color: red;
      border-radius: 20px;
      display: flex;
      width: 20px;
      height: 20px;
      align-items: center;
      justify-content: center;
      margin: -15px 20px;
      transform: translate(0rem, -2rem);
    }
    /* .notice {
      background-color: #f5ff30;
      width: 20px;
      height: 20px;
    } */
  }

  @media only screen and (max-width: 450px) {
    height: 7vh;
    padding: 0 1rem;

    .header {
      img {
        width: 6rem; // Giảm kích thước logo
      }
    }

    .header-search {
      display: none; // Ẩn thanh tìm kiếm trên màn hình nhỏ
    }

    .header-icons {
      gap: 0.5rem;

      .icon-container {
        svg {
          font-size: 1.4rem; // Giảm kích thước icon
        }

        .badge {
          width: 14px;
          height: 14px;
          font-size: 0.6rem; // Giảm kích thước badge
        }
      }
    }
  }
`;
