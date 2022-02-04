import Header from "../../components/Header";
import { RemoveCircleOutline, AddCircleOutline } from "react-ionicons";
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
} from "./style";
import { Link } from "react-router-dom";
export default function Main() {
  return (
    <Container>
      <Header />
      <Transactions>
        <SingleTransaction>
          <Box>
            <Date>04/02</Date>
            <Description>Eu estou aqui</Description>
          </Box>
          <Value>700,00</Value>
        </SingleTransaction>
        <SingleTransaction>
          <Box>
            <Date>04/02</Date>
            <Description>Eu estou aqui</Description>
          </Box>
          <Value>700,00</Value>
        </SingleTransaction>
        <SingleTransaction>
          <Box>
            <Date>04/02</Date>
            <Description>Eu estou aqui</Description>
          </Box>
          <Value>700,00</Value>
        </SingleTransaction>

        <Balance>
          <p>SALDO</p>
          <Value>700,00</Value>
        </Balance>
        
      </Transactions>
      <AddingButtons>
        <SingleButton>
          <Link to="/add-income">
            <span>
              <AddCircleOutline
                color={"#ffffff"}
                title={"Nova entrada"}
                height="25px"
                width="25px"
              />
            </span>
            <p>Nova entrada</p>
          </Link>
        </SingleButton>

        <SingleButton>
          <Link to="/add-expense">
            <span>
              <RemoveCircleOutline
                color={"#ffffff"}
                title={"Nova saída"}
                height="25px"
                width="25px"
              />
            </span>
            <p>Nova saída</p>
          </Link>
        </SingleButton>
      </AddingButtons>
    </Container>
  );
}
