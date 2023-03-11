import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import AddGig from "../../../components/Admin/AddGig";
import LoadingScreen from "../../../components/Generic/LoadingScreen";

const GET_GIG_BY_ID = gql`
  query Gig($gigId: ID!) {
    gig(id: $gigId) {
      id
      name
      description
      image
      hidden
    }
  }
`;

export default function EditCategory() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_GIG_BY_ID, {
    variables: { gigId: id },
  });

  if (loading) return <LoadingScreen />;
  console.log(data);
  return (
    <>
      <AddGig data={data?.gig} />
    </>
  );
}
