import styled from "styled-components";
import { LargueText } from "@/ui/text";
import { BlueButton } from "@/ui/buttons";
import { useRouter } from "next/router";
const DivSucces = styled.div`
  width: 330px;
  height: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0 0 0;
`;
const DivButton = styled.div`
  width: 40%;
  margin-top: 10px;
`;
export function Success() {
  const router = useRouter();
  const home = () => {
    router.push("/");
  };
  return (
    <DivSucces>
      <LargueText>Pago realizado con exito</LargueText>
      <DivButton>
        <BlueButton onClick={home}>Home</BlueButton>
      </DivButton>
    </DivSucces>
  );
}
