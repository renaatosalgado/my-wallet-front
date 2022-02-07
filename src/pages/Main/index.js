import Header from "../../components/Header";
import {
  RemoveCircleOutline,
  AddCircleOutline,
  CloseOutline,
} from "react-ionicons";
import {
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
} from "./style";
import { StyledLink } from "../../components/Form/index.js";
import { useEffect, useState } from "react";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";

export default function Main() {
  const { auth } = useAuth();
  const [hasTransactions, setHasTransactions] = useState(false);
  const [transactions, setTransactions] = useState(null);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    api
      .getTransactions({ headers: { Authorization: `Bearer ${auth.token}` } })
      .then((res) => {
        setTransactions(res.data);
        if (res.data.length !== 0) {
          setHasTransactions(true);
        }
        calculateBalance();
      })
      .catch(() => {
        setHasTransactions(false);
      });
    //eslint-disable-next-line
  }, [hasTransactions]);

  function calculateBalance() {
    let incomes = 0;
    let expenses = 0;

    transactions.forEach((transaction) => {
      if (transaction.type === "income") {
        incomes += transaction.value;
      } else {
        expenses += transaction.value;
      }
    });

    const balance = incomes - expenses;
    setBalance(balance.toFixed(2));
  }

  return (
    <Container>
      <Header />

      <Transactions>
        {hasTransactions ? (
          transactions.reverse().map((transaction, index) => (
            <SingleTransaction key={index}>
              <Box>
                <Date>{transaction.date}</Date>
                <Description>{transaction.description}</Description>
              </Box>
              <Box>
                <Value status={`${transaction.type}`}>
                  {transaction.value.toFixed(2).replace(".", ",")}
                </Value>
                <span>
                  <CloseOutline
                    color={"#c6c6c6"}
                    title={"Excluir"}
                    height="16px"
                    width="16px"
                  />
                </span>
              </Box>
            </SingleTransaction>
          ))
        ) : (
          <NoTransactions>Não há registros de entrada ou saída</NoTransactions>
        )}
      </Transactions>

      <Balance hasTransactions={hasTransactions}>
        <p>SALDO</p>
        <Value status={`${balance >= 0 ? "income" : "expense"}`}>
          {balance}
        </Value>
      </Balance>

      <AddingButtons>
        <SingleButton>
          <StyledLink to="/add-income">
            <SingleButton>
              <span>
                <AddCircleOutline
                  color={"#ffffff"}
                  title={"Nova entrada"}
                  height="25px"
                  width="25px"
                />
              </span>
              <p>Nova entrada</p>
            </SingleButton>
          </StyledLink>
        </SingleButton>

        <SingleButton>
          <StyledLink to="/add-expense">
            <SingleButton>
              <span>
                <RemoveCircleOutline
                  color={"#ffffff"}
                  title={"Nova saída"}
                  height="25px"
                  width="25px"
                />
              </span>
              <p>Nova saída</p>
            </SingleButton>
          </StyledLink>
        </SingleButton>
      </AddingButtons>
    </Container>
  );
}
