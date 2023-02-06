import styled from "styled-components";
export const InvisibleButton = styled.button`
  background-color: transparent;
  border: none;
`;
export const PrincipalButton = styled.button`
  height: 37px;
  width: 100%;
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
