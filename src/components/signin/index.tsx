import styled from "styled-components";
import { SectionEmail } from "./sectionEmail";
import { SectionCode } from "./sectionCode";
import { useState } from "react";
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

  const stateEmail = sectionState
    ? { display: "initial" }
    : { display: "none" };
  const stateCode = !sectionState
    ? { display: "initial" }
    : { display: "none" };
  const changeToCodeSection = (e: string) => {
    setEmail(e);
    setSectionState(false);
  };
  return (
    <>
      <SectionSigning>
        <div style={stateEmail}>
          <SectionEmail
            onSubmit={(e) => {
              changeToCodeSection(e);
            }}
          />
        </div>
        <div style={stateCode}>
          <SectionCode
            onSubmit={(e) => {
              console.log(e);
            }}
          />
        </div>
      </SectionSigning>
    </>
  );
}
