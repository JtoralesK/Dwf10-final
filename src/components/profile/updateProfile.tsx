import styled from "styled-components";
import { LargueTextBold, BodyTextBold } from "@/ui/text";
import { me } from "@/hooks/me";
import { Input } from "@/ui/input";
import { FucsiaButton } from "@/ui/buttons";
const Content = styled.div`
  width: 90%;
  @media (min-width: 768px) {
    width: 30%;
  }
  min-height: 90vh;
  padding-top: 30px;
  margin: auto;
`;
const MyDateCard = styled.div`
  width: 100%;
  min-height: 74px;
  background-color: #ffffff;
  border-radius: 3px;
`;
const ContendCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
type Prop = {
  must: boolean;
  changeSection: () => any;
  onSubmit: (e: any) => any;
};
export function UpdateProfile(p: Prop) {
  const { resp: data } = me();
  const click = () => {
    if (p.changeSection) p.changeSection();
  };
  const submit = (e: any) => {
    e.preventDefault();
    const { nombre, address } = e.target;
    if (p.onSubmit)
      p.onSubmit({ nombre: nombre.value, address: address.value });
  };
  return (
    <Content>
      <LargueTextBold>Actualizar pefil</LargueTextBold>
      <BodyTextBold>Datos de la cuenta</BodyTextBold>
      <div style={p.must ? { display: "initial" } : { display: "none" }}>
        <button onClick={click}>Volver</button>
      </div>
      <ContendCards>
        <MyDateCard>
          <form onSubmit={submit}>
            <label>
              <p>Nombre</p>
              <Input
                placeholder={data.nombre ? data.nombre : "Nombre"}
                name={"nombre"}
              />
            </label>
            <label>
              <p>Dirección</p>
              <Input
                placeholder={
                  data.address ? data.address : "Direccion a enviar el producto"
                }
                name={"address"}
              />
            </label>
            <div style={{ width: "50%", marginTop: "30px" }}>
              <FucsiaButton>Actualizar</FucsiaButton>
            </div>
          </form>
        </MyDateCard>
      </ContendCards>
    </Content>
  );
}
