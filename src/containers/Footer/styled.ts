import styled from "@emotion/styled";

export const FooterStyled = styled.div`
  margin-top: 2rem;
  padding: 1rem 4.5rem;
  height: 52vh;
  color: #ff7d29;
  background-color: #f5f5f7;
  .footer-title {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-bottom: 2rem;
  }
  .form-email {
    display: flex;
    .input-form {
      outline: none;
      border: none;
      border-radius: 8px;
      overflow: hidden;
      width: 28rem;
      height: 3rem;
      padding: 0 30px;
      -webkit-box-shadow: -2px 1px 22px 3px rgb(223, 223, 223);
      -moz-box-shadow: -2px 1px 22px 3px rgb(223, 223, 223);
      box-shadow: -2px 1px 22px 3px rgb(223, 223, 223);
    }
  }
  .menu-item {
    width: 15vw;
  }
  .footer-menu {
    margin-top: 1rem;
  }
  .footer-contact {
    display: flex;
    margin-top: 1rem;
  }
  .logo-icon {
    width: 30px;
    height: 30px;
    background-color: #ff7d29;
  }
  @media only screen and (max-width: 450px) {
    margin-top: 2rem;
    padding: 1rem 0;
    height: 72vh;
    color: #ff7d29;
    .footer-title {
      display: flex;
      /* align-items: center; */
      /* text-align: center;
      justify-content: center; */
      margin-bottom: 2rem;
      padding: 0;
    }
    .form-email {
      display: flex;
      .input-form {
        outline: none;
        border: none;
        border-radius: 8px;
        overflow: hidden;
        width: 28rem;
        height: 3rem;
        padding: 0 10px;
        -webkit-box-shadow: -2px 1px 22px 3px rgb(223, 223, 223);
        -moz-box-shadow: -2px 1px 22px 3px rgb(223, 223, 223);
        box-shadow: -2px 1px 22px 3px rgb(223, 223, 223);
      }
    }
  }
`;
