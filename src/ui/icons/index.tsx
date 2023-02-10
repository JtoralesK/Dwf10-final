import Twitter from "./icon-twitter.svg";
import Instagram from "./icon-instagram.svg";
import Burger from "./icon-burguer.svg";
import Cross from "./icon-delete.svg";
import styled from "styled-components";
import Logo from "./icon-logo-xing.svg";
export function TwitterLogo() {
  return <Twitter />;
}
export function InstagramLogo() {
  return <Instagram />;
}
export function BurguerLogo() {
  return <Burger />;
}
export const CrossWhiteLogo = styled(Cross)`
  fill: white;
  width: 50px;
`;
export const WhiteLogo = styled(Logo)`
  fill: white;
  width: 30px;
`;
export function CrossLogo() {
  return <Cross />;
}
