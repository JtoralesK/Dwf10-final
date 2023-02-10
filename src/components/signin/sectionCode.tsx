import styled from "styled-components";
import { Input } from "@/ui/input";
import { InvisibleButton } from "@/ui/buttons";
import { Card } from "./card";
import { BodyTextBold } from "@/ui/text";

const InputContent = styled.div`
  height: 30px;
  width: 100%;
`;
type Prop = {
  onSubmit: (e: string) => any;
  backSectionEmail?: () => any;
  state: boolean;
  email: string;
};
export function SectionCode(p: Prop) {
  const corregirEmail = () => {
    if (p.backSectionEmail) p.backSectionEmail();
  };
  const sendCode = (e: any) => {
    e.preventDefault();
    const { codigo } = e.target;
    if (p.onSubmit) p.onSubmit(codigo.value);
  };
  const stateCode = !p.state ? { display: "initial" } : { display: "none" };
  return (
    <form
      style={stateCode}
      onSubmit={(e) => {
        sendCode(e);
      }}
    >
      <Card>
        <BodyTextBold>Te enviamos tu código a {p.email}</BodyTextBold>
        <InputContent>
          <Input name="codigo" placeholder="Código"></Input>
          <InvisibleButton type={"button"} onClick={corregirEmail}>
            corregir email
          </InvisibleButton>
        </InputContent>
      </Card>
    </form>
  );
}
