import styled from "styled-components";

const Container = styled.div`
  width: calc(100vw - 30px);
  padding: 20px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: "Raleway", sans-serif;
`;

const UserName = styled.div`
  font-size: 26px;
  font-weight: 700;

  color: #ffffff;
`;

const ExitIcon = styled.div`
  cursor: pointer;
`;

export { Container, UserName, ExitIcon };
