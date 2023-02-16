import { useProduct } from "@/hooks/hook";
import { useRouter } from "next/router";
import { Layout } from "@/components/layout";
import { CheckoutItem } from "@/components/checkout";

export default function checkoutPage() {
  const router = useRouter();
  const { id } = router.query;
  const { resp: product } = useProduct(id as string);
  console.log(product);
  if (product)
    return (
      <Layout>
        <div style={{ backgroundColor: "#eeeeee", height: "90vh" }}>
          <CheckoutItem
            producId={id as string}
            name={product.name}
            image={product.image}
            colors={product.color}
            price={product.price}
          />
        </div>
      </Layout>
    );
}
//
