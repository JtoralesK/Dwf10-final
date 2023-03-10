import styled from "styled-components";
import { BodyTextBold } from "@/ui/text";
import { InvisibleButton } from "@/ui/buttons";
import { AiOutlinePlus } from "react-icons/ai";
const Button = styled(InvisibleButton)`
  text-align: left;
  padding: 20px 0;
`;
const WindowLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
type Prop = {
  name: string;
  function: () => any;
};
export function WindowButton(p: Prop) {
  const click = () => {
    if (p.function) p.function();
  };
  return (
    <Button onClick={click}>
      <WindowLink>
        <BodyTextBold>{p.name}</BodyTextBold>
        <AiOutlinePlus style={{ fontSize: "15px" }} />
      </WindowLink>
    </Button>
  );
}
