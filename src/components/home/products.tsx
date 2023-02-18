import { searchProducts } from "@/hooks/hook";
import { CardSmall } from "@/ui/card/card-small";
import { CardMedium } from "@/ui/card/card-Big";
import { useRouter } from "next/router";
import styled from "styled-components";
export function Products() {
  let cant = 4;
  if (process.browser) {
    if (window.innerWidth > 678) cant = 5;
  }

  const { resp, error, isLoading } = searchProducts("a", cant, 0);
  const router = useRouter();
  const BoxCardItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    gap: 15px;
    @media (min-width: 678px) {
      justify-content: space-between;
      gap: 0px;
    }
  `;
  const SectionProductsContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;
  if (isLoading) return <h1>loaging</h1>;
  if (error) return <>error</>;
  const click = (objectID: any) => {
    router.push("/item/" + objectID);
  };
  const CardRespnsive = cant > 4 ? CardMedium : CardSmall;
  return (
    <>
      <SectionProductsContent>
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
      </SectionProductsContent>
    </>
  );
}
