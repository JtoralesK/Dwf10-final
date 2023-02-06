import styled from "styled-components";
import { LargueText, Subtitle } from "../text";

const BoxCard = styled.div`
  min-height: 321px;
  width: 315px;
  border: 4px solid black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: var(--sixth-color);
  cursor: pointer;
`;
type Prop = {
  price: string;
  name: string;
  url: string;
  viewProduct: (e: any) => any;
};
export function Card(p: Prop) {
  const click = (e: any) => {
    if (p.viewProduct) p.viewProduct(e);
  };
  return (
    <BoxCard
      onClick={(e) => {
        click(e);
      }}
    >
      <img style={{ height: "237px" }} src={p.url} alt="reloj hombre" />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          padding: "21px",
        }}
      >
        <LargueText>{p.name}</LargueText>
        <Subtitle>${p.price}</Subtitle>
      </div>
    </BoxCard>
  );
}
