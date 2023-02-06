import styled from "styled-components";
import { Subtitle, BodyTextBold } from "@/ui/text";
import { Input } from "@/ui/input";
import { FucsiaButton } from "@/ui/buttons";

const Content = styled.div`
  height: 300px;
  border: 1px solid blue;
  margin-top: 80px;
  @media (min-width: 768px) {
    width: 500px;
  }
`;

const ContentButton = styled(FucsiaButton)`
  display: block;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding: 20px;
`;
const InputContent = styled.div`
  height: 30px;
  width: 100%;
`;
type Prop = {
  onSubmit: (e: string) => any;
};
export function SectionCode(p: Prop) {
  const sendCode = (e: any) => {
    e.preventDefault();
    const { codigo } = e.target;
    if (p.onSubmit) p.onSubmit(codigo.value);
  };

  return (
    <Content>
      <Form onSubmit={sendCode}>
        <Subtitle>Ingresa</Subtitle>
        <BodyTextBold>Te enviamos tu código a jotraoesl@gmail.com</BodyTextBold>
        <InputContent>
          <Input name="codigo" placeholder="Código"></Input>
          corregir email
        </InputContent>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <div style={{ textAlign: "right" }}>
            <ContentButton>Continuar</ContentButton>
          </div>
        </div>
      </Form>
    </Content>
  );
}
