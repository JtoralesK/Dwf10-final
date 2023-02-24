import { Layout } from "@/components/layout";
import { Success } from "@/components/payment/succes";
import styled from "styled-components";
const Section = styled.section`
  width: 100%;
  height: 95vh;
  background-color: var(--second-color);
`;
export default function Payment() {
  return (
    <>
      <Layout>
        <Section>
          <Success />
        </Section>
      </Layout>
    </>
  );
}
