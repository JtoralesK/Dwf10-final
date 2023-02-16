import styled from "styled-components";
import { LargueText } from "@/ui/text";
import { MpLoader } from "@/ui/loaders/mpLoader";
const Section = styled.section`
  height: 90vh;
`;
const DivContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
`;
export function SectionLoading() {
  return (
    <Section>
      <DivContent>
        <div style={{ textAlign: "center" }}>
          <LargueText>Esta siendo redireccionado a Mercado pago..</LargueText>
        </div>
        <div style={{ marginTop: "50px" }}>
          <MpLoader />
        </div>
      </DivContent>
    </Section>
  );
}
