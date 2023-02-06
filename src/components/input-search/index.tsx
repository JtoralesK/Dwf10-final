import { ResponsiveDivDisplayNone } from "@/ui/divStyled";
import { InputMobile } from "./inputMobile";
import { Input } from "@/ui/input";
import styled from "styled-components";

const BigInput = styled.div`
  width: 50%;
  height: 40px;
  display: none;
  @media (min-width: 768px) {
    display: initial;
  }
`;

export function SearchInput() {
  return (
    <>
      <ResponsiveDivDisplayNone>
        <InputMobile />
      </ResponsiveDivDisplayNone>
      <BigInput>
        <Input placeholder="Buscar Producto" />
      </BigInput>
    </>
  );
}
