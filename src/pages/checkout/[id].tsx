import styled from "styled-components";
import { LargueTextBold } from "@/ui/text";
import { useProduct } from "@/hooks/hook";
import { useRouter } from "next/router";
import { FucsiaButton } from "@/ui/buttons";
import { createOrder } from "@/lib/api";
import { GoMercadoPago } from "@/hooks/hook";
const WhiteText = styled(LargueTextBold)`
  color: var(--main-color);
`;
const CheckoutBody = styled.div`
  width: 100%;
  height: 100vh;
`;
const HeaderCheckout = styled.div`
  background-color: var(--main-contrast-color);
  height: 100px;
  text-align: center;
  padding: 10px;
`;
const BodyCheckout = styled.section`
  padding: 10px;
`;
export default function OrderId() {
  const { loading, go } = GoMercadoPago();
  const router = useRouter();
  const { id } = router.query;
  const { resp, error, isLoading } = useProduct(id as string);
  console.log({ loading }, 12);
  const buy = () => {
    createOrder(id as string).then((e) => {
      go(e.link);
    });
  };

  if (isLoading || loading)
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          backgroundColor: "papayawhip",
        }}
      >
        loading
      </div>
    );
  if (resp)
    return (
      <CheckoutBody>
        <HeaderCheckout>
          <WhiteText>Tu producto</WhiteText>
        </HeaderCheckout>
        <BodyCheckout>
          <div>Domicilio:Av croacia 2931</div>
          <div>Tu producto :</div>
          <p>{resp.price}</p>
          <FucsiaButton onClick={buy}>Aceptar compra</FucsiaButton>
        </BodyCheckout>
      </CheckoutBody>
    );
}
//
