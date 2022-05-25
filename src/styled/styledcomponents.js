import { Link } from "react-router-dom";
import styled from "styled-components";

/* TYPOGRAPHYS */
export const LinkRedirect = styled(Link)`
  color: blue;
  font-size: 0.8rem;
  text-decoration: none;
`;

// Buttons

export const ButtonGoogle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 0.4rem;
  cursor: pointer;
  color: #fff;
  background: #13212c;
  borderradius: 2px;
  padding: 0.34rem 0.6rem;
  border: none;
  outline: none;
  width: 100%;
  margintop: 10px;
`;

export const ContainerCard = styled.div`
  background-color: aqua;
`;
