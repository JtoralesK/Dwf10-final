import styled from "styled-components";
export const Input = styled.input`
  border: 3px solid var(--main-contrast-color);
  border-radius: 8px;
  height: 37px;
  width: 100%;
  &:hover {
    box-shadow: 1px 1px 1px thistle;
  }
`;
type Prop = {
  placeholder: string;
};
export function InputText(prop: Prop) {
  return <Input type={"text"} placeholder={prop.placeholder}></Input>;
}
