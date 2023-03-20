import { gql } from "@apollo/client";

export const GET_NURSERIES = gql`
  query Query {
    nurseries {
      id
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
