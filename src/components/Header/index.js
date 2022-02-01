import { ExitOutline } from "react-ionicons";
import { Container, UserName, ExitIcon } from "./style";
import useAuth from "../../hooks/useAuth";

export default function Header() {
  const { auth } = useAuth();
  return (
    <Container>
      <UserName>Olá, Renato</UserName>
      <ExitIcon>
        <ExitOutline
          color={"#ffffff"}
          title={"Sair"}
          height="25px"
          width="25px"
        />
      </ExitIcon>
    </Container>
  );
}
