import styled from "styled-components";
import { SectionEmail } from "./sectionEmail";
import { SectionCode } from "./sectionCode";
import { useState } from "react";
import { obtainToken } from "@/lib/api";
import { sendCode } from "@/lib/api";
import { mutate } from "swr";
import { useRouter } from "next/router";
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
  const [errorState, serStateError] = useState(false);
  const router = useRouter();
  const getToken = (code: any) => {
    obtainToken(email, code).then((e: any) => {
      if (e.id) {
        mutate("/me");
        router.push("/profile");
      } else serStateError(true);
    });
  };
  const submitEmail = (e: any) => {
    sendCode(e).then((code) => {
      console.log(code);
    });
    setEmail(e);
    changeSection();
  };
  const changeSection = () => {
    serStateError(false);
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
          incorrectCode={errorState}
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
