import styled from "styled-components";
import { LargueTextBold } from "@/ui/text";
import {
  HorizontalCard,
  HorizontalCardEskeleton,
} from "@/ui/card/card-horizontal";
import { searchProducts } from "@/hooks/hook";
import { useRouter } from "next/router";
const SectionSearchContent = styled.section`
  background-color: #dfdfdf;
  min-height: 100vh;
  @media (min-width: 768px) {
  }
`;
export const SectionConten = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const SubtitleDiv = styled.div`
  margin-top: 55px;
  @media (min-width: 768px) {
    margin-top: 70px;
  }
`;

type Prop = {
  typeProduct: string;
};
const v = [1, 2, 3];
export function SectionSearch(p: Prop) {
  const router = useRouter();
  const click = (objectID: any) => {
    router.push("/item/" + objectID);
  };
  const { resp, error, isLoading } = searchProducts(p.typeProduct, 10, 0);
  if (resp) console.log(resp);
  return (
    <SectionSearchContent>
      <SectionConten>
        <SubtitleDiv>
          <LargueTextBold>Productos Destacados</LargueTextBold>
        </SubtitleDiv>
        <div style={{ margin: "10px" }}>
          {resp ? (
            resp.map((obj: any) => {
              return (
                <HorizontalCard
                  onClick={() => {
                    click(obj.objectID);
                  }}
                  key={obj.objectID}
                  img={obj.image}
                  name={obj.name}
                  price={obj.price}
                />
              );
            })
          ) : (
            <div>
              <HorizontalCardEskeleton></HorizontalCardEskeleton>
              <HorizontalCardEskeleton></HorizontalCardEskeleton>
              <HorizontalCardEskeleton></HorizontalCardEskeleton>
            </div>
          )}
        </div>
      </SectionConten>
    </SectionSearchContent>
  );
}
