import styled from "styled-components";
export const InvisibleButton = styled.button`
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
  }
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
export const ContrastButton = styled(PrincipalButton)`
  background-color: #5e4a43;
  color: var(--main-color);
`;
export const NaranjaButton = styled(ContrastButton)`
  background-color: var(--fourth-color);
`;
export const FucsiaButton = styled(ContrastButton)`
  background-color: var(--sixth-color);
`;
