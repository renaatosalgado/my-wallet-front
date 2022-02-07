import { ExitOutline } from "react-ionicons";
import { Container, UserName, ExitIcon } from "./style";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


export default function Header() {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate()

  const formattedName = auth.name.replace(auth.name[0], auth.name[0].toUpperCase())

  function logout() {
    localStorage.removeItem("auth");
    setAuth(null);
    navigate("/");
  }

  return (
    <Container>
      <UserName>Olá, {formattedName}</UserName>
      <ExitIcon>
        <ExitOutline
          color={"#ffffff"}
          title={"Sair"}
          height="25px"
          width="25px"
          onClick={logout}
        />
      </ExitIcon>
    </Container>
  );
}
