import {
  Container,
  Form,
  Input,
  Button,
  StyledLink,
  Title,
} from "../../components/Form";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function SignUp() {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    const promise = api.postSignUp({ ...signUpData });
    promise
      .then(() => {
        setIsLoading(false);
        navigate("/");
      })
      .catch(() => {
        setIsLoading(false);

        alert(
          "Ocorreu um erro ao tentar efetuar seu cadastro. Por favor, preencha os dados novamente."
        );
        setSignUpData({
          name: "",
          email: "",
          password: "",
          confirm_password: "",
        });
      });
  }
  return (
    <Container>
      <Title>My Wallet</Title>

      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome"
          name="name"
          onChange={handleChange}
          value={signUpData.name}
          disabled={isLoading}
          required
        />
        <Input
          type="email"
          placeholder="E-mail"
          name="email"
          onChange={handleChange}
          value={signUpData.email}
          disabled={isLoading}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          name="password"
          onChange={handleChange}
          value={signUpData.password}
          disabled={isLoading}
          required
        />
        <Input
          type="password"
          placeholder="Confirme a senha"
          name="confirm_password"
          onChange={handleChange}
          value={signUpData.confirm_password}
          disabled={isLoading}
          required
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <ThreeDots color="#FFFFFF" height={50} width={50} />
          ) : (
            "Cadastrar"
          )}
        </Button>
      </Form>

      <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
    </Container>
  );
}
