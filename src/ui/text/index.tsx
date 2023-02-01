import styled from "styled-components";

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  font-family: "Inter", sans-serif;
  margin: 0;
`;
export const Subtitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  font-family: "Inter", sans-serif;
  margin: 0;
`;
export const LargueText = styled.p`
  font-size: 20px;
  font-weight: 400;
  font-family: "Inter", sans-serif;
  margin: 0;
`;
export const LargueTextBold = styled(LargueText)`
  font-size: 20px;
  font-weight: 700;
  font-family: "Inter", sans-serif;
`;
export const BodyText = styled(LargueText)`
  font-size: 16px;
`;

export const BodyTextBold = styled(BodyText)`
  font-size: 16px;
  font-weight: 700;
`;
export const TinyText = styled(LargueText)`
  font-size: 12px;
  margin: 0;
`;
