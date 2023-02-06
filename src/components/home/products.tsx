import { meProdcuts } from "@/hooks/hook";
import { Card } from "@/ui/card";
import { useRouter } from "next/router";

export function Products() {
  const { resp, error, isLoading } = meProdcuts("a", 2, 0);
  const router = useRouter();

  if (isLoading) return <h1>loaging</h1>;
  if (error) return <>error</>;
  console.log(resp);
  const click = (e: any) => {
    console.log({ e, 1: 1 });
    /*router.push("/products/" + e.target.word.value);*/
  };
  return (
    <>
      {resp.map((e: any) => {
        return (
          <Card
            viewProduct={(e) => {
              click(e);
            }}
            key={e.price}
            url={e.image}
            price={e.price}
            name={e.name}
          />
        );
      })}
    </>
  );
}
