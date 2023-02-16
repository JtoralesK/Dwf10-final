import styled from "styled-components";
import { BodyTextBold, LargueText } from "../text";
import { CardProp } from "./props";
import { Skeleton } from "@mui/material";
const Eskeleto = styled.div`
  width: 370px;
  @media (min-width: 768px) {
    min-width: 750px;
  }
`;

export const HorizontalCardEskeleton = () => {
  return (
    <CardSkeleton>
      <Skeleton variant="rectangular" width={"35%"} height={192} />
      <div style={{ width: "65%" }}>
        <br />
        <br />
        <br />
        <Skeleton variant="rectangular" width={"90%"} height={20} />
        <br />
        <Skeleton variant="rectangular" width={"80%"} height={20} />
        <br />
        <Skeleton variant="rectangular" width={"65%"} height={20} />
      </div>
    </CardSkeleton>
  );
};
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
const CardSkeleton = styled(Card)`
  display: flex;
  flex-direction: row;
  padding: 5px;
  justify-content: space-between;
  gap: 5px;
`;
const ImgCard = styled.img`
  width: 35%;
  height: 192px;
  padding: 5px;
`;

const ContentCard = styled.div`
  padding: 10px;
  width: 65%;
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
