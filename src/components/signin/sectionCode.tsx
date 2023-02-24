import styled from "styled-components";
import { Input } from "@/ui/input";
import { InvisibleButton } from "@/ui/buttons";
import { Card } from "./card";
import { BodyTextBold } from "@/ui/text";
import { useForm } from "react-hook-form";
import { stateStyle } from "@/external-functions";
const BodyTextBoldRed = styled(BodyTextBold)`
  color: red;
  text-align: center;
`;
const ButtonYellow = styled(InvisibleButton)`
  background-color: var(--fourth-color);
  display: block;
`;
const InputContent = styled.div`
  height: 30px;
  width: 100%;
`;
type Prop = {
  onSubmit: (e: string) => any;
  backSectionEmail?: () => any;
  state: boolean;
  email: string;
  incorrectCode: boolean;
};
export function SectionCode(p: Prop) {
  const { register, handleSubmit } = useForm();

  const corregirEmail = () => {
    if (p.backSectionEmail) p.backSectionEmail();
  };
  const onSubmit = (data: any) => {
    const { codigo } = data;
    if (p.onSubmit) p.onSubmit(codigo);
  };

  const stateCode = stateStyle(!p.state);
  const stateError = stateStyle(p.incorrectCode);

  return (
    <form style={stateCode} onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <BodyTextBold>Te enviamos tu código a {p.email}</BodyTextBold>
        <InputContent>
          <Input placeholder="Código" {...register("codigo")}></Input>
          <ButtonYellow type={"button"} onClick={corregirEmail}>
            corregir email
          </ButtonYellow>
          <BodyTextBoldRed style={stateError}>
            Tu código es incorrecto
          </BodyTextBoldRed>
        </InputContent>
      </Card>
    </form>
  );
}
