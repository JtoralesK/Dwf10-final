import { BodyTextBold } from "@/ui/text";
import styled from "styled-components";
import { AiFillCreditCard, AiOutlineCreditCard } from "react-icons/ai";
import { GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
const ContentCards = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 90px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media (min-width: 678px) {
    margin-top: 50px;
  }
`;
const Card = styled.div`
  width: 285px;
  height: 100%;
  display: none;
`;
const ContentCardResponsive = styled.div`
  place-self: center;
`;
const CircularImg = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.001px solid #e3dede;
`;
type Prop = {
  width: number;
  name: string;
  element: JSX.Element;
};
const ResponsiveCard = (p: Prop) => {
  const Responsive = styled(Card)`
    @media (min-width: ${p.width}px) {
      display: grid;
    }
  `;
  return (
    <Responsive>
      <ContentCardResponsive>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <CircularImg>{p.element}</CircularImg>
          <BodyTextBold>{p.name}</BodyTextBold>
        </div>
      </ContentCardResponsive>
    </Responsive>
  );
};

export function CreditCard() {
  const style = { fontSize: "30px" };
  return (
    <ContentCards>
      <ResponsiveCard
        name={"Tarjeta de crédito"}
        width={200}
        element={<AiFillCreditCard style={style} />}
      />
      <ResponsiveCard
        name={"Tarjeta de débito"}
        width={768}
        element={<AiOutlineCreditCard style={style} />}
      />
      <ResponsiveCard
        name={"Cuotas sin tarjeta"}
        width={1200}
        element={<GiReceiveMoney style={style} />}
      />
      <ResponsiveCard
        name={"Efectivo"}
        width={1400}
        element={<GiTakeMyMoney style={style} />}
      />
    </ContentCards>
  );
}
