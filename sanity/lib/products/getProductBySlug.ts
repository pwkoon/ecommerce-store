import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getProductBySlug = async (slug: string) => {
  const PRODUCT_BY_ID_QUERY = defineQuery(`
        *[
            _type == "productType" && slug.current == $slug
        ] | order(name asc) [0 ]
        `);

  try {
    const product = await sanityFetch({
      query: PRODUCT_BY_ID_QUERY,
      params: {
        slug,
      },
    });
    //Return the list of products, or an empty array if none are found
    return product.data || null;
  } catch (error) {
    console.error("Error fetching products by ID", error);
    return null;
  }
};
