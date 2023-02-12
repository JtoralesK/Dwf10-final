import { Layout } from "@/components/layout";
import { SectionSearch } from "@/components/search/index";
import { useRouter } from "next/router";
export default function Home() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <SectionSearch typeProduct={id as string}></SectionSearch>
    </Layout>
  );
}
