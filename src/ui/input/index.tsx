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
  width: 100%;
  height: 100%;
  &:hover {
    box-shadow: 1px 1px 1px paleturquoise;
  }
`;
type Prop = {
  placeholder: string;
};
export function InputText(prop: Prop) {
  return <Input type={"text"} placeholder={prop.placeholder}></Input>;
}
