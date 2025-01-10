import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Shopr Ecommerce Website")
    .items([
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("productType").title("Products"),
      S.documentTypeListItem("orderType").title("Orders"),
      S.documentTypeListItem("salesType").title("Sales"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["productType", "category", "orderType", "salesType"].includes(
            item.getId()!
          )
      ),
    ]);
