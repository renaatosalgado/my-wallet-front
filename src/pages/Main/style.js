import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: "Raleway", sans-serif;
  font-weight: 400;
`;

const Transactions = styled.div`
  width: calc(100vw - 30px);
  background-color: #ffffff;

  height: calc(100vh - 114px - 30px - 70px);

  border-radius: 5px;

  position: relative;

  overflow: auto;
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

const SingleTransaction = styled.div`
  width: calc(100% - 20px);

  margin: 10px auto;
  font-size: 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Date = styled.div``;

const Description = styled.div`
  margin-left: 10px;
`;

const Value = styled.div`
  font-weight: 400;
  color: ${(props) => (props.status === "income" ? "#03AC00" : "#C70000")};
`;

const Box = styled.div`
  display: flex;
`;

const Balance = styled.div`
  width: calc(100% - 20px);

  font-size: 16px;

  display: ${(props) => (props.hasTransactions ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;

  position: absolute;
  bottom: 10px;
  left: 10px;

  z-index: 1;

  background-color: aliceblue;

  p {
    font-weight: 700;
  }
`;

const NoTransactions = styled.div`
  width: calc(100vw - 30px);
  background-color: #ffffff;

  height: calc(100vh - 114px - 30px - 70px);

  border-radius: 5px;
  font-size: 20px;
  color: #868686;
  line-height: 23px;
  text-align: center;
  word-break: break-word;
  padding: 70px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  Container,
  Transactions,
  AddingButtons,
  SingleButton,
  SingleTransaction,
  Date,
  Description,
  Value,
  Box,
  Balance,
  NoTransactions,
};
