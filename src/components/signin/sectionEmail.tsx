import styled from "styled-components";
import { BodyTextBold } from "@/ui/text";
import { Input } from "@/ui/input";
import { Card } from "./card";
import { sendCode } from "@/lib/api";
const InputContent = styled.div`
  height: 30px;
  width: 100%;
`;
type Prop = {
  state: boolean;
  getEmail: (e: any) => any;
};
export function SectionEmail(p: Prop) {
  const stateCode = p.state ? { display: "initial" } : { display: "none" };
  const send = (e: any) => {
    e.preventDefault();
    const { email } = e.target;
    if (p.getEmail) p.getEmail(email.value);
  };
  return (
    <form
      onSubmit={(e) => {
        send(e);
      }}
      style={stateCode}
    >
      <Card>
        <BodyTextBold>Para continuar ingrese su email</BodyTextBold>
        <InputContent>
          <Input name={"email"} type={"email"} placeholder={"Email"}></Input>
        </InputContent>
      </Card>
    </form>
  );
}
