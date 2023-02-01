import styled from "styled-components";
import { TinyText } from "../text";
export const Input = styled.input`
  border: 3px solid var(--main-contrast-color);
  border-radius: 8px;
  height: 37px;
  width: 167px;
  &:hover {
    box-shadow: 1px 1px 1px thistle;
  }
`;
type Prop = {
  placeholder: string;
};
export function InputText(prop: Prop) {
  return (
    <label htmlFor="name">
      <TinyText>Label</TinyText>
      <Input type={"text"} placeholder={prop.placeholder}></Input>
    </label>
  );
}
