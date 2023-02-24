import styled from "styled-components";
import { BodyTextBold } from "@/ui/text";
import { InvisibleButton } from "@/ui/buttons";
import { useRouter } from "next/router";
import { AiOutlinePlus } from "react-icons/ai";
import { me } from "@/hooks/me";

type Page = "/signin" | "/" | "/profile";
export const SectionLinks = styled.div`
  display: flex;
  flex-direction: column;
  height: 75vh;
`;
const Button = styled(InvisibleButton)`
  text-align: left;
  padding: 20px 0;
`;
type ButtonProp = {
  name: string;
  page: Page;
};
const WindowLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export function WindowButton(p: ButtonProp) {
  const router = useRouter();
  const { resp } = me();
  const onClick = () => {
    if (p.page == "/profile") {
      if (resp) {
        router.push("/profile");
      } else router.push("/signin");
    }
    if (p.page == "/signin") {
      router.push("/signin");
    }
    if (p.page == "/") router.push("/");
  };
  return (
    <Button onClick={onClick}>
      <WindowLink>
        <BodyTextBold>{p.name}</BodyTextBold>
        <AiOutlinePlus style={{ fontSize: "15px" }} />
      </WindowLink>
    </Button>
  );
}
