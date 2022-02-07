import { ExitOutline } from "react-ionicons";
import { Container, UserName, ExitIcon } from "./style";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function Header() {
  const { auth, setAuth } = useAuth();
  const navigate = useNavigate();

  let formattedName;

  if (auth) {
    formattedName = auth.name.replace(auth.name[0], auth.name[0].toUpperCase());
  } else {
    navigate("/");
  }

  function logout() {
    api.deleteSession(auth.token).then(() => {
      localStorage.removeItem("auth");
      setAuth(null);
      navigate("/");
    });
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
