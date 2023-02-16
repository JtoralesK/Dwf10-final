import styled from "styled-components";
import { LargueText, BodyText } from "@/ui/text";
import { FucsiaButton } from "@/ui/buttons";

const Product = styled.div`
  width: 100%;
  height: 550px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

const ImgItem = styled.img`
  height: 80px;
  border-radius: 50%;
`;
const SectionProductComp = styled.div`
  @media (min-width: 678px) {
    width: 35%;
  }
`;

const DivFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  width: 80%;
`;
const ProductDivPrice = styled(DivFlexRow)`
  border-bottom: 0.1px solid #4c4c4c;
  border-top: 0.1px solid #4c4c4c;
  margin-top: 20px;
`;
type Prop = {
  name: string;
  colors: [];
  image: string;
  price: number;
  onClick: () => any;
};
export function SectionProduct(p: Prop) {
  const click = () => {
    if (p.onClick) p.onClick();
  };
  return (
    <SectionProductComp>
      <Product>
        <ImgItem src={p.image} />
        <BodyText>{p.name}</BodyText>
        <BodyText>
          Colores :
          {p.colors.map((e) => {
            return e;
          })}
        </BodyText>
        <br />
        <BodyText>Cantidad : 1</BodyText>
        <ProductDivPrice>
          <BodyText>Producto</BodyText>
          <BodyText>${p.price}</BodyText>
        </ProductDivPrice>
        <DivFlexRow>
          <LargueText>Pagás</LargueText>
          <LargueText>${p.price}</LargueText>
        </DivFlexRow>
        <div style={{ width: "50%", marginTop: "50px" }}>
          <FucsiaButton onClick={click}>Aceptar compra</FucsiaButton>
        </div>
      </Product>
      <div style={{ width: "50%" }}></div>
    </SectionProductComp>
  );
}
