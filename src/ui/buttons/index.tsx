import styled from "styled-components";
export const PrincipalButton = styled.button`
  height: 37px;
  width: 163px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 700;
  font-family: "Inter", sans-serif;
`;
export const BlueButton = styled(PrincipalButton)`
  background-color: var(--second-color);
  color: var(--main-color);
`;
export const NaranjaButton = styled(BlueButton)`
  background-color: var(--fourth-color);
`;
export const FucsiaButton = styled(BlueButton)`
  background-color: var(--sixth-color);
`;
