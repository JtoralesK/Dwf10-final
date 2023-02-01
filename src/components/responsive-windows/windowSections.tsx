import styled from "styled-components";
export const SectionLinks = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
  justify-content: space-around;
`;
const CruzBox = styled.header`
  height: 84px;
  width: 100%;
  padding: 18px 24px;
`;
const RightLogo = styled.div`
  text-align: right;
`;
export function SectionCross({ children }: any) {
  return (
    <CruzBox>
      <RightLogo>{children}</RightLogo>
    </CruzBox>
  );
}
