import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Input } from "../../components/Form";
import { Container, Title } from "./style";
import api from "../../services/api";
import { ThreeDots } from "react-loader-spinner";

export default function AddExpense() {
  const [transactionData, setTransactionData] = useState({
    value: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    setTransactionData({ ...transactionData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    // e.preventDefault();

    // setIsLoading(true);
    // const promise = api.postLogin({ ...transactionData });
    // promise
    //   .then((response) => {
    //     setIsLoading(false);

    //     login(response.data);
    //     navigate("/main");
    //   })
    //   .catch((error) => {
    //     setIsLoading(false);

    //     if (error.response.status === 422) {
    //       setLoginData({
    //         email: "",
    //         password: "",
    //       });
    //       return alert("Insira os dados corretamente.");
    //     }

    //     if (error.response.status === 401) {
    //       setLoginData({
    //         email: "",
    //         password: "",
    //       });
    //       return alert("E-mail e/ou senha estão incorreros.");
    //     }
    //   });
  }

  return (
    <Container>
      <Title>Nova saída</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="number"
          placeholder="Valor"
          name="value"
          onChange={handleChange}
          value={transactionData.value}
          disabled={isLoading}
          required
        ></Input>
        <Input
          type="text"
          placeholder="Descrição"
          name="description"
          onChange={handleChange}
          value={transactionData.description}
          disabled={isLoading}
          required
        ></Input>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <ThreeDots color="#FFFFFF" height={50} width={50} />
          ) : (
            "Salvar saída"
          )}
        </Button>
      </Form>
    </Container>
  );
}
