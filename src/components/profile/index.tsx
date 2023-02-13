import { Layout } from "@/components/layout";
import styled from "styled-components";
import { LargueTextBold, BodyTextBold } from "@/ui/text";
import { me } from "@/hooks/me";
const SectionProfile = styled.div`
  width: 100%;
  background-color: var(--second-color);
`;
const Content = styled.div`
  width: 90%;
  @media (min-width: 768px) {
    width: 60%;
  }
  min-height: 90vh;
  padding-top: 30px;
  margin: auto;
`;
const MyDateCard = styled.div`
  width: 100%;
  height: 74px;
  background-color: #ffffff;
  border-radius: 3px;
`;
const ContendCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
export function Profile() {
  const { resp: data } = me();
  console.log(data);
  return (
    <Layout>
      <SectionProfile>
        <Content>
          <LargueTextBold>Mis datos</LargueTextBold>
          <BodyTextBold>Datos de la cuenta</BodyTextBold>
          <ContendCards>
            <MyDateCard>Email:{data && <p>{data.email}</p>}</MyDateCard>
          </ContendCards>
        </Content>
      </SectionProfile>
    </Layout>
  );
}
