import styled from "styled-components";
import { BodyTextBold } from "@/ui/text";
import { Input } from "@/ui/input";
import { Card } from "./card";
import { useForm } from "react-hook-form";
import { stateStyle } from "@/external-functions";
const InputContent = styled.div`
  height: 30px;
  width: 100%;
`;
type Prop = {
  state: boolean;
  getEmail: (e: any) => any;
};
export function SectionEmail(p: Prop) {
  const { register, handleSubmit } = useForm();
  const stateCode = stateStyle(p.state);

  const onSubmit = (data: any) => {
    const { email } = data;
    if (p.getEmail) p.getEmail(email);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={stateCode}>
      <Card>
        <BodyTextBold>Para continuar ingrese su email</BodyTextBold>
        <InputContent>
          <Input
            placeholder="Email"
            {...register("email")}
            type={"email"}
          ></Input>
        </InputContent>
      </Card>
    </form>
  );
}
