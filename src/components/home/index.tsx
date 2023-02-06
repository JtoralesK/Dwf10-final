import { SectionEccomerce } from "./sectionSearchProduct";
import { SectionProducts } from "./sectionProducts";
import { Products } from "./products";
export function HomeSection() {
  return (
    <div>
      <SectionEccomerce />
      <SectionProducts>
        <Products />
      </SectionProducts>
    </div>
  );
}
