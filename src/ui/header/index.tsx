import styled from "styled-components";
import { LogoWhite } from "../Logo";
import { BurguerLogo } from "../icons";
const Header = styled.header`
  background-color: var(--main-contrast-color);
  height: 84px;
  padding: 18px 24px;

  @media (min-width: 768px) {
    height: 106px;
    padding: 38px 80px;
  }
`;

export function HeaderNav() {
  return (
    <Header>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <LogoWhite />
        <BurguerLogo />
      </div>
    </Header>
  );
}
