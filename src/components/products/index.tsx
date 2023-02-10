import { meProdcuts } from "@/hooks/hook";
import { Card } from "@/ui/card";
import { useRouter } from "next/router";

export function Products() {
  const router = useRouter();
  const { id } = router.query;
  const idString = JSON.stringify(id);
  const { resp, error, isLoading } = meProdcuts(idString, 2, 0);
  console.log(resp, error);
  const click = (productId: any) => {
    router.push("/item/" + productId);
  };
  if (isLoading) return <h1>loaging</h1>;
  if (error) return <>error</>;
  return (
    <>
      {resp
        ? resp.map((e: any) => {
            return (
              <Card
                viewProduct={() => {
                  click(e.objectID);
                }}
                key={e.objectID}
                url={e.image}
                price={e.price}
                name={e.name}
              />
            );
          })
        : null}
    </>
  );
}
