import { Layout } from "@/components/layout";
import { useRouter } from "next/router";
import { meProdcuts } from "@/hooks/hook";
import { SectionProducts } from "@/components/home/sectionProducts";
import { Products } from "@/components/products";
export default function Home() {
  return (
    <Layout>
      <div
        style={{ minHeight: "80vh", width: "100%", backgroundColor: "beige" }}
      >
        <SectionProducts>
          <Products />
        </SectionProducts>
      </div>
    </Layout>
  );
}
