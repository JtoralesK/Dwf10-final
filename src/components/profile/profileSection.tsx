import styled from "styled-components";
import { LargueTextBold, BodyTextBold } from "@/ui/text";
import { me } from "@/hooks/me";

const Content = styled.div`
  width: 90%;
  @media (min-width: 768px) {
    width: 30%;
  }
  min-height: 90vh;
  padding-top: 30px;
  margin: auto;
`;
const MyDateCard = styled.div`
  width: 100%;
  height: 50px;
  background-color: var(--fourth-color);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ContendCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

type Prop = {
  changeSection: () => any;
};
export function SectionProfile(p: Prop) {
  const { resp: data } = me();
  const click = () => {
    if (p.changeSection) p.changeSection();
  };
  return (
    <Content>
      <LargueTextBold>Mis datos</LargueTextBold>
      <BodyTextBold>Datos de la cuenta</BodyTextBold>
      <div>
        <button onClick={click}>Editar</button>
      </div>
      <ContendCards>
        <MyDateCard>Email:{data && data.email}</MyDateCard>
      </ContendCards>
      <ContendCards>
        <MyDateCard>
          <p>Nombre:{data && data.nombre}</p>
        </MyDateCard>
      </ContendCards>
      <ContendCards>
        <MyDateCard>
          <p>Direccion:{data && data.address}</p>
        </MyDateCard>
      </ContendCards>
    </Content>
  );
}
