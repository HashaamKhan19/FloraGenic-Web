import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Users {
    users {
      id
      email
      userType
      bannedStatus
      details {
        ... on Customer {
          id
          firstName
          lastName

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
