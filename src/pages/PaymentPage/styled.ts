import styled from "@emotion/styled";

export const PaymentStyle = styled.div`
  .checkout-container {
    display: flex;
    margin-bottom: 1rem;
  }
  .checkout-first-number {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2px;
    width: 17px;
    height: 17px;
    border-radius: 5px;
    color: #fff;
    background-color: #ff7d29;
  }
  .checkout-number-order {
    margin: 0 0.2rem;
    margin-top: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 17px;
    height: 17px;
    color: #ff7d29;
    border: 1px solid #ff7d29;
    border-radius: 5px;
  }
  .checkout-order {
    margin: 0 0.5rem;
  }
  @media only screen and (max-width: 450px) {
    .checkout-container {
      display: none;
    }
  }
`;
