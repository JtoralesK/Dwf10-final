import { Item } from "@/components/item";
import { useProduct } from "@/hooks/hook";
import { useRouter } from "next/router";
import { Layout } from "@/components/layout";
export default function ItemPage() {
  const router = useRouter();
  const { id } = router.query;
  const { resp, error, isLoading } = useProduct(id as string);
  return (
    <>
      <Layout>{resp ? <Item data={resp} /> : <h1>loading</h1>}</Layout>
    </>
  );
}
