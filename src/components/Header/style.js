import styled from "styled-components";

const Container = styled.div`
  width: calc(100vw - 50px);
  padding: 25px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-family: "Raleway", sans-serif;
`;

const UserName = styled.div`
  font-size: 26px;
  line-height: 31px;
  font-weight: 700;

  color: #ffffff;
`;

const ExitIcon = styled.div`
  cursor: pointer;
`;

export { Container, UserName, ExitIcon };
