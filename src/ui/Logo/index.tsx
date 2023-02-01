import SvgLogo from "./Logo.svg";
import styled from "styled-components";

export function Logo() {
  return <SvgLogo></SvgLogo>;
}
export const LogoWhite = styled(SvgLogo)`
  fill: white;
`;
