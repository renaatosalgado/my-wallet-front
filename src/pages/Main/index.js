import Header from "../../components/Header";
import { RemoveCircleOutline, AddCircleOutline } from "react-ionicons";
import { Container, Transactions, AddingButtons, SingleButton } from "./style";

export default function Main() {
  return (
    <Container>
      <Header />
      <Transactions></Transactions>
      <AddingButtons>
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
        <SingleButton>
          <span>
            <RemoveCircleOutline
              color={"#ffffff"}
              title={"Nova saída"}
              height="25px"
              width="25px"
            />
          </span>
          <p>Nova entrada</p>
        </SingleButton>
      </AddingButtons>
    </Container>
  );
}
