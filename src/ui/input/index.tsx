import styled from "styled-components";
export const InputNull = styled.input`
  border: none;
  height: 100%;
  width: 100%;
  &:focus {
    outline: none;
  }
`;
export const Input = styled.input`
  border: 3px solid var(--main-contrast-color);
  width: 100%;
  height: 100%;

  border-radius: 8px;
  &:hover {
    box-shadow: 1px 1px 1px red;
  }
`;
type Prop = {
  placeholder: string;
};
export function InputText(prop: Prop) {
  return <Input type={"text"} placeholder={prop.placeholder}></Input>;
}
