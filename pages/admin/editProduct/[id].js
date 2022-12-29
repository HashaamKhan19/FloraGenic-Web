import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import AddProduct from "../../../components/Admin/AddProduct";
import Loader from "../../../components/Generic/Loader";

const GET_PRODUCT_BY_ID = gql`
  query Product($productId: ID!) {
    product(id: $productId) {
      id
      nurseryID
      nursery {
        id
        name
      }
      name
      description
      category {
        id
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
    }
  }
`;

export default function EditProduct() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_PRODUCT_BY_ID, {
    variables: { productId: id },
  });

  if (loading) return <Loader />;
  console.log(data);
  return (
    <>
      <AddProduct data={data?.product} />
    </>
  );
}
