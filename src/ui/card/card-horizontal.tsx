import styled from "styled-components";
import { BodyTextBold, LargueText } from "../text";
import { CardProp } from "./props";
const Card = styled.div`
  width: 370px;
  background-color: white;
  border: 0.1px solid gray;
  border-radius: 3px;
  @media (min-width: 768px) {
    min-width: 750px;
  }
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
`;
const ImgCard = styled.img`
  width: 144px;
  height: 192px;
  padding: 5px;
`;

const ContentCard = styled.div`
  padding: 10px;
`;
const ContentTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export function HorizontalCard(p: CardProp) {
  const click = () => {
    if (p.onClick) p.onClick();
  };
  return (
    <>
      <Card onClick={click}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <ImgCard src={p.img} alt="" />
          <ContentCard>
            <ContentTexts>
              <BodyTextBold>{p.name}</BodyTextBold>
              <LargueText>${p.price}</LargueText>
            </ContentTexts>
          </ContentCard>
        </div>
      </Card>
    </>
  );
}
