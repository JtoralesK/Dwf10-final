import styled from "styled-components";
import { BodyTextBold, LargueText } from "../text";
import { NaranjaButton } from "../buttons";
import { CardProp } from "./props";

const Card = styled.div`
  width: 224px;
  height: 350px;
  background-color: white;
  border: 0.1px solid gray;
  border-radius: 3px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
`;
const ImgCard = styled.img`
  width: 100%;
  height: 55%;
  padding: 5px;
`;

const ContentCard = styled.div`
  padding: 10px;
`;
const ContentTexts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 80px;
`;
export function CardMedium(p: CardProp) {
  const click = () => {
    if (p.onClick) p.onClick();
  };
  return (
    <>
      <Card onClick={click}>
        <ImgCard src={p.img} alt="" />
        <ContentCard>
          <ContentTexts>
            <BodyTextBold>{p.name}</BodyTextBold>
            <LargueText>${p.price}</LargueText>
          </ContentTexts>
          <NaranjaButton>Ver mas</NaranjaButton>
        </ContentCard>
      </Card>
    </>
  );
}
