import { ExitOutline } from "react-ionicons";
import { Container, UserName, ExitIcon } from "./style";
import useAuth from "../../hooks/useAuth";

export default function Header() {
  const { auth } = useAuth();

  const formattedName = auth.name.replace(auth.name[0], auth.name[0].toUpperCase())

  return (
    <Container>
      <UserName>Olá, {formattedName}</UserName>
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
