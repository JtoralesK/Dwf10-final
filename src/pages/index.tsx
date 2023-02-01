import {
  Title,
  Subtitle,
  LargueText,
  LargueTextBold,
  BodyText,
  BodyTextBold,
  TinyText,
} from "@/ui/text";
import { Logo } from "@/ui/Logo";
import {
  PrincipalButton,
  BlueButton,
  NaranjaButton,
  FucsiaButton,
} from "@/ui/buttons";
import { InputText } from "@/ui/input";
import { Card } from "@/ui/card";
import { Footer } from "@/ui/footer";
export default function Home() {
  return (
    <div>
      <Logo></Logo>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Title>Title</Title>
        <Subtitle>Subtitle</Subtitle>
        <LargueText>HI EVERYBODY , HOW ARE YOU BOYS?</LargueText>
        <LargueTextBold>I AM THE BOY </LargueTextBold>
        <BodyText>
          Body: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet eros suscipit pulvinar euismod. Suspendisse
          potenti.
        </BodyText>
        <BodyTextBold>
          Body: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet eros suscipit pulvinar euismod. Suspendisse
          potenti.
        </BodyTextBold>
        <TinyText>
          Tiny text: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus imperdiet eros suscipi
        </TinyText>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <PrincipalButton>Texto del botón</PrincipalButton>
        <BlueButton>Texto del botón</BlueButton>
        <NaranjaButton>Texto del botón</NaranjaButton>
        <FucsiaButton>Texto del botón</FucsiaButton>
      </div>
      <InputText placeholder="Placeholder"></InputText>
      <Card></Card>
      <Footer></Footer>
    </div>
  );
}
