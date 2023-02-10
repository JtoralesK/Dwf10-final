import styled from "styled-components";
import { SectionEmail } from "./sectionEmail";
import { SectionCode } from "./sectionCode";
import { useState } from "react";
import { obtainToken } from "@/lib/api";
import { sendCode } from "@/lib/api";

const SectionSigning = styled.section`
  width: 100%;
  min-height: 100vh;
  display: grid;
  padding: 20px;
  justify-content: center;
`;

export function SigninContent() {
  const [sectionState, setSectionState] = useState(true);
  const [email, setEmail] = useState("");
  const getToken = (code: any) => {
    obtainToken(email, code).then((e) => {
      console.log({ e });
    });
  };
  const submitEmail = (e: any) => {
    sendCode(e).then((e) => {
      console.log(e);
    });
    setEmail(e);
    changeSection();
  };
  const changeSection = () => {
    setSectionState(!sectionState);
  };
  return (
    <>
      <SectionSigning>
        <SectionEmail
          getEmail={(e) => {
            submitEmail(e);
          }}
          state={sectionState}
        />
        <SectionCode
          onSubmit={(code) => {
            getToken(code);
          }}
          state={sectionState}
          email={email}
          backSectionEmail={changeSection}
        />
      </SectionSigning>
    </>
  );
}
