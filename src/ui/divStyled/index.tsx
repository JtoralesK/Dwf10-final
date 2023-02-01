import styled from "styled-components";
export const DisplayFlexDiv = styled.div`
  display: flex;
`;
const FlexRowDiv = styled(DisplayFlexDiv)`
  flex-direction: row;
`;
export const FlexRowDivAlingCenter = styled(FlexRowDiv)`
  align-items: center;
`;

export const FlexRowDivSpaceBetween = styled(FlexRowDiv)`
  justify-content: space-between;
`;

export const FlexCenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ResponsiveDivDisplayNone = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;
export const ResponsiveDivDisplayInitial = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: initial;
  }
`;
