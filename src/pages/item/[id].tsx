import { Item } from "@/components/item";
import { useProduct } from "@/hooks/hook";
import { useRouter } from "next/router";
import { Layout } from "@/components/layout";
import { Skeleton } from "@mui/material";
import styled from "styled-components";
const Barra = styled.div`
  height: 25px;
`;

export default function ItemPage() {
  const router = useRouter();
  const { id } = router.query;
  const { resp, error, isLoading } = useProduct(id as string);
  return (
    <>
      <Layout>
        {resp ? (
          <Item data={resp} />
        ) : (
          <div style={{ padding: "10px" }}>
            <Skeleton variant="rectangular" width={"100%"} height={300} />
            <br />
            <Skeleton animation="wave" height={40} />
            <Skeleton animation={false} height={30} width={"65%"} />
            <Skeleton animation={false} height={30} width={"65%"} />
          </div>
        )}
      </Layout>
    </>
  );
}
