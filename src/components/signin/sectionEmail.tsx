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
export function SectionEmail(p: Prop) {
  const sendCode = (e: any) => {
    e.preventDefault();
    const { email } = e.target;
    if (p.onSubmit) p.onSubmit(email.value);
  };

  return (
    <Content>
      <Form
        onSubmit={(e) => {
          sendCode(e);
        }}
      >
        <Subtitle>Ingresa</Subtitle>
        <BodyTextBold>Para continuar ingrese su email</BodyTextBold>
        <InputContent>
          <Input name={"email"} type={"email"} placeholder={"Email"}></Input>
        </InputContent>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            width: "100%",
          }}
        >
          <div style={{ textAlign: "right" }}>
            <ContentButton>Empezad</ContentButton>
          </div>
        </div>
      </Form>
    </Content>
  );
}
