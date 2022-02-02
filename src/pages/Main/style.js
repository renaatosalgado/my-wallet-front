import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: "Raleway", sans-serif;
`;

const Transactions = styled.div`
  width: calc(100vw - 30px);
  background-color: #ffffff;

  height: calc(100vh - 114px - 30px - 70px);

  border-radius: 5px;
`;

const AddingButtons = styled.div`
  width: calc(100vw - 30px);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SingleButton = styled.div`
  width: calc((100% - 15px) / 2);
  height: 114px;

  border-radius: 5px;
  margin: 15px 0;
  padding: 10px;

  background-color: #a328d6;

  cursor: pointer;

  position: relative;

  p {
    font-size: 17px;
    font-weight: 700;
    color: #ffffff;

    position: absolute;
    bottom: 10px;
  }
`;

export { Container, Transactions, AddingButtons, SingleButton };
