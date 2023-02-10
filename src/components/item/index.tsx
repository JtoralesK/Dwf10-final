import { Prop } from "./ItemTypes";
import styled from "styled-components";
import { LargueText, BodyTextBold, LargueTextBold, BodyText } from "@/ui/text";
import { NaranjaButton } from "@/ui/buttons";
import { useRouter } from "next/router";
import { getToken } from "@/lib/localStorage";
const DivImg = styled.img`
  width: 100%;
  height: 300px;
  @media (min-width: 768px) {
    width: 500px;
    height: 100%;
  }
`;
const ItemContent = styled.div`
  min-height: 600px;
  display: flex;
  background-color: #e6e6e6;
  flex-direction: column;
  margin: auto;
  @media (min-width: 768px) {
    flex-direction: row;
    width: 80%;
    margin-top: 100px;
  }
`;
const PriceAndNameDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ItemContentDescription = styled.div`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
`;
export function Item(prop: Prop) {
  const item = prop.data;
  const router = useRouter();
  const buy = () => {
    const token = getToken();
    if (token === null) router.push("/signin");
    router.push("/checkout/" + item.objectID);
  };
  return (
    <>
      <div style={{ padding: "10px" }}>
        <ItemContent>
          <DivImg src={item.image} alt="gorra de programación"></DivImg>
          <ItemContentDescription>
            <PriceAndNameDiv>
              <LargueText>{item.name}</LargueText>
              <LargueText>${item.price}</LargueText>
            </PriceAndNameDiv>
            <BodyTextBold>5 estrellas</BodyTextBold>
            <LargueTextBold>Descripcion:</LargueTextBold>
            <BodyText>{item.description}</BodyText>
            <NaranjaButton onClick={buy}>Comprar</NaranjaButton>
          </ItemContentDescription>
        </ItemContent>
      </div>
    </>
  );
}
