import styled from "styled-components";
import { SectionProduct } from "./sectionProduct";
import { SectionDirection } from "./sectionDirection";
import { createOrder } from "@/lib/api";
import { useState } from "react";
import { useRouter } from "next/router";
import { SectionLoading } from "./sectionLoading";
const BodyCheckout = styled.section`
  width: 95%;
  padding: 30px 0;
  display: flex;
  gap: 20px;
  flex-direction: column;
  margin: auto;
  @media (min-width: 678px) {
    padding-top: 30px;
    flex-direction: row;
    width: 70%;
    justify-content: space-around;
  }
`;

type Prop = {
  name: string;
  colors: [];
  image: string;
  price: number;
  producId: string;
};
export function CheckoutItem(p: Prop) {
  const [loadingLink, setLoadingLink] = useState(false);
  const router = useRouter();
  const buy = () => {
    setLoadingLink(true);
    createOrder(p.producId).then((e) => {
      router.push(e.link);
    });
  };
  if (loadingLink) return <SectionLoading />;
  return (
    <BodyCheckout>
      <SectionDirection></SectionDirection>
      <SectionProduct
        onClick={buy}
        name={p.name}
        colors={p.colors}
        image={p.image}
        price={p.price}
      ></SectionProduct>
    </BodyCheckout>
  );
}
