import { ProductType } from "@/sanity.types";

function ProductThumb({ product }: { product: ProductType }) {
  return <div>{product.name}</div>;
}

export default ProductThumb;
