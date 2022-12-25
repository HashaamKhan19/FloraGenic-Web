import React from "react";
import AddNursery from "../../../components/Admin/AddNursery";
import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import Loader from "../../../components/Generic/Loader";
const GET_NURSERY_BY_ID = gql`
  query Nursery($nurseryId: ID!) {
    nursery(id: $nurseryId) {
      id
      nurseryOwnerID
      name
      details
      openingHours
      closingHours
      rating
      address
      phoneNumber
      email
      website
      images
      createdAt
      updatedAt
    }
  }
`;

export default function EditNursery() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_NURSERY_BY_ID, {
    variables: { nurseryId: id },
  });

  if (loading) return <Loader />;
  console.log(data);
  return (
    <>
      <AddNursery data={data?.nursery} />
    </>
  );
}
