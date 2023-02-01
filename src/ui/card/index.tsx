import styled from "styled-components";
import { LargueText, Subtitle } from "../text";

const BoxCard = styled.div`
  height: 321px;
  width: 315px;
  border: 4px solid black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: var(--sixth-color);
`;
export function Card() {
  return (
    <BoxCard>
      <img
        style={{ height: "237px", width: "315px" }}
        src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/reloj-hombre-omega-seamaster-300-1621435252.jpg"
        alt="reloj hombre"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          padding: "21px",
        }}
      >
        <LargueText>Reloj super guachiguau</LargueText>
        <Subtitle>$2000</Subtitle>
      </div>
    </BoxCard>
  );
}
/*<img
style={{ height: "237px", width: "315px" }}
src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/reloj-hombre-omega-seamaster-300-1621435252.jpg"
alt="reloj hombre"
/>
<div
style={{
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  backgroundColor: "var(--sixth-color)",
}}
>
<LargueText>Reloj super guachiguau</LargueText>
<Subtitle>$2000</Subtitle>
</div>
*/
