import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import AddUser from "../../../components/Admin/AddUser";
import LoadingScreen from "../../../components/Generic/LoadingScreen";
const GET_UER_BY_ID = gql`
  query Users($userId: ID!) {
    user(id: $userId) {
      id
      email
      userType
      bannedStatus
      details {
        ... on Customer {
          id
          firstName
          lastName
          nationality
          phoneNumber
          gender
          image
          createdAt
          updatedAt
        }
        ... on Admin {
          id
          firstName
          lastName
          nationality
          phoneNumber
          gender
          CNIC
          image
          createdAt
          updatedAt
        }
        ... on Gardener {
          id
          firstName
          lastName
          city
          phoneNumber
          gender
          CNIC
          image
          createdAt
          updatedAt
        }
      }
    }
  }
`;

export default function EditUser() {
  const router = useRouter();
  const { id } = router.query;
  const { loading, error, data } = useQuery(GET_UER_BY_ID, {
    variables: { userId: id },
  });

  if (loading) return <LoadingScreen />;

  return (
    <>
      <AddUser data={data?.user} />
    </>
  );
}
