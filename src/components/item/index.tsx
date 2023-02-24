import { Prop } from "./ItemTypes";
import styled from "styled-components";
import {
  LargueText,
  BodyTextBold,
  LargueTextBold,
  BodyText,
  Subtitle,
} from "@/ui/text";
import { ContrastButton } from "@/ui/buttons";
import { useRouter } from "next/router";
import { me } from "@/hooks/me";
const DivImg = styled.img`
  width: 100%;
  height: 300px;
  @media (min-width: 768px) {
    width: 450px;
    height: 100%;
  }
`;
const ItemContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 380px;
  @media (min-width: 768px) {
    flex-direction: row;
    margin: 50px auto;
    width: 1000px;
  }
`;

const ItemContentDescription = styled.div`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
`;
const SectionItem = styled.section`
  background-color: var(--second-color);
  padding: 10px;
  min-height: 80vh;
`;
const TopButton = styled.div`
  margin-top: 15px;
  width: 40%;
`;
export function Item(prop: Prop) {
  const { resp } = me();
  let logged: boolean = false;
  if (resp) logged = !resp.error ?? true;
  console.log(logged);

  const item = prop.data;
  const router = useRouter();
  const buy = () => {
    if (!logged) router.push("/signin");
    else {
      router.push("/checkout/" + item.objectID);
    }
  };

  return (
    <>
      <SectionItem>
        <ItemContent>
          <DivImg src={item.image} alt={item.name}></DivImg>
          <ItemContentDescription>
            <Subtitle>{item.name}</Subtitle>
            <LargueText>${item.price}</LargueText>
            <BodyTextBold>5 estrellas</BodyTextBold>
            <LargueTextBold>Descripcion:</LargueTextBold>
            <BodyText>{item.description}</BodyText>
            <TopButton>
              <ContrastButton onClick={buy}>Comprar</ContrastButton>
            </TopButton>
          </ItemContentDescription>
        </ItemContent>
      </SectionItem>
    </>
  );
}
