import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import AddCategory from "../../../components/Admin/AddCategory";
import LoadingScreen from "../../../components/Generic/LoadingScreen";

const GET_CATEGORY_BY_ID = gql`
  query Category($categoryId: ID!) {
    category(id: $categoryId) {
      id
      name
      description
      hiddenStatus
      image
      createdAt
      updatedAt
    }
  }
`;

export default function EditCategory() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_CATEGORY_BY_ID, {
    variables: { categoryId: id },
  });

  if (loading) return <LoadingScreen />;
  console.log(data);
  return (
    <>
      <AddCategory data={data?.category} />
    </>
  );
}
