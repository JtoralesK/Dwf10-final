import { InputNull } from "@/ui/input";
import { useRouter } from "next/router";
import { useState } from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  border-bottom: solid 0.2px;
`;
const BigInput = {
  width: "100%",
  height: "100%",
};
const NormalInput = {
  width: "220px",
  height: "30px",
};

export function InputMobile() {
  const [focus, setFocus] = useState(false);
  const router = useRouter();

  const styleInput = focus ? BigInput : NormalInput;
  const inputStyle: any = focus ? { position: "absolute" } : {};
  const stateFlecha = focus ? { display: "initial" } : { display: "none" };
  const changeState = () => {
    setFocus(!focus);
  };
  const submit = (e: any) => {
    e.preventDefault();
    router.push("/search/" + e.target.word.value);
  };
  return (
    <InputDiv style={inputStyle}>
      <div style={stateFlecha} onClick={changeState}>
        <AiOutlineArrowLeft style={{ margin: "20px" }} />
      </div>

      <form style={styleInput} onSubmit={submit}>
        <InputNull
          name="word"
          onFocus={changeState}
          type="text"
          placeholder="Estoy Buscando"
        />
      </form>
    </InputDiv>
  );
}
