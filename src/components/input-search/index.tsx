import { ResponsiveDivDisplayNone } from "@/ui/divStyled";
import { InputMobile } from "./inputMobile";
import { Input } from "@/ui/input";
import styled from "styled-components";
import { useRouter } from "next/router";

const BigInput = styled.div`
  width: 60%;
  height: 40px;
  display: none;
  @media (min-width: 768px) {
    display: initial;
  }
`;

export function SearchInput() {
  const router = useRouter();
  const search = (e: any) => {
    e.preventDefault();
    router.push("/search/" + e.target.word.value);
  };
  return (
    <>
      <ResponsiveDivDisplayNone>
        <InputMobile />
      </ResponsiveDivDisplayNone>
      <BigInput>
        <form
          onSubmit={(e) => {
            search(e);
          }}
        >
          <div style={{ height: "35px" }}>
            <Input name="word" placeholder="Buscar Producto" />
          </div>
        </form>
      </BigInput>
    </>
  );
}
