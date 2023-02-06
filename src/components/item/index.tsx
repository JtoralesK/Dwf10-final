import { Prop } from "./ItemTypes";
import styled from "styled-components";
import { LargueText, BodyTextBold, LargueTextBold, BodyText } from "@/ui/text";
import { NaranjaButton } from "@/ui/buttons";
const DivImg = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 20px 20px 5px 5px;
`;

const ItemContent = styled.div`
  border-radius: 20px 20px 0px 0px;
  min-height: 600px;
`;
const PriceAndNameDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export function Item(prop: Prop) {
  const item = prop.data;
  return (
    <>
      <div style={{ padding: "10px" }}>
        <ItemContent>
          <DivImg src={item.image} alt="gorra de programación"></DivImg>
          <div
            style={{
              padding: "0 30px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              margin: "20px 0",
            }}
          >
            <PriceAndNameDiv>
              <LargueText>{item.name}</LargueText>
              <LargueText>${item.price}</LargueText>
            </PriceAndNameDiv>
            <BodyTextBold>5 estrellas</BodyTextBold>
            <LargueTextBold>Descripcion:</LargueTextBold>
            <BodyText>{item.description}</BodyText>
            <NaranjaButton>Comprar</NaranjaButton>
          </div>
        </ItemContent>
      </div>
    </>
  );
}
