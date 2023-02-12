import { searchProducts } from "@/hooks/hook";
import { CardSmall } from "@/ui/card/card-small";
import { CardMedium } from "@/ui/card/card-Big";
import { useRouter } from "next/router";
import styled from "styled-components";
type Prop = {
  responsive: boolean;
};
export function Products(p: Prop) {
  const cant = p.responsive ? 5 : 4;
  const { resp, error, isLoading } = searchProducts("a", cant, 0);
  const router = useRouter();
  const BoxCardItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    gap: 10px;
  `;
  if (isLoading) return <h1>loaging</h1>;
  if (error) return <>error</>;
  const click = (objectID: any) => {
    router.push("/item/" + objectID);
  };
  const CardRespnsive = p.responsive ? CardMedium : CardSmall;
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center;",
        }}
      >
        <BoxCardItems>
          {resp ? (
            resp.map((obj: any) => {
              return (
                <CardRespnsive
                  key={obj.objectID}
                  img={obj.image}
                  name={obj.name}
                  price={obj.price}
                  onClick={() => {
                    click(obj.objectID);
                  }}
                />
              );
            })
          ) : (
            <p>cargando</p>
          )}
        </BoxCardItems>
      </div>
    </>
  );
}
