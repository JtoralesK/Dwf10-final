import styled from "styled-components";
import { LargueText, BodyText } from "@/ui/text";
import { SectionProduct } from "./sectionProduct";
import { AiOutlineEnvironment } from "react-icons/ai";

const Dirreccion = styled.div`
  background-color: #ffffff;
  height: 92px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

const SectionDirrection = styled.div`
  @media (min-width: 678px) {
    width: 50%;
  }
`;
const CircularDiv = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #4c4c4c;
  display: flex;
  align-items: center;
  justify-content: center;
`;
type Prop = {
  name: string;
  colors: [];
  image: string;
  price: number;
};
export function SectionDirection() {
  return (
    <SectionDirrection>
      <Dirreccion>
        <CircularDiv>
          <AiOutlineEnvironment
            style={{ fontSize: "50px", fill: "Scrollbar" }}
          />
        </CircularDiv>
        <div>
          <LargueText>Av croacia 2931</LargueText>
        </div>
      </Dirreccion>
    </SectionDirrection>
  );
}
//          <FucsiaButton onClick={buy}>Aceptar compra</FucsiaButton>
