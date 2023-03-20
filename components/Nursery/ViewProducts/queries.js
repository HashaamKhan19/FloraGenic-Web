import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query Query($data: ProductSearchInput) {
    products(data: $data) {
      id
      nurseryID
      name
      description
      category {
        name
      }
      hidden
      retailPrice
      wholesalePrice
      stock
      sold
      images
      overallRating
      tags
      createdAt
      updatedAt
      nursery {
        id
        name
      }
    }
  }
`;
