import { defineQuery } from "next-sanity";
import { sanityFetch } from "../live";

export const getProductsByCategory = async (categorySlug: string) => {
  const PRODUCTS_BY_CATEGORY_QUERY = defineQuery(`
        *[
            _type == "productType" && references(*[_type == "category" && slug.current == $categorySlug]._id)
        ] | order(name asc)
        `);

  try {
    //use sanityFetch to send the query and pass the category slug
    const products = await sanityFetch({
      query: PRODUCTS_BY_CATEGORY_QUERY,
      params: {
        categorySlug,
      },
    });
    return products.data || [];
  } catch (error) {
    console.error("Error fetcing products by category:", error);
    return [];
  }
};
