import { gql } from "@apollo/client";

export const GET_PROFILE_DETAILS = gql`
  query ProfileDetails {
    profileDetails {
      id
      email
      userType
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
          gender
          nationality
          phoneNumber
          CNIC
          image
          createdAt
          updatedAt
        }
        ... on Gardener {
          id
          firstName
          lastName
          gender
          phoneNumber
          city
          CNIC
          price
          duration
          rating
          experience
          image
          createdAt
          updatedAt
        }
        ... on NurseryOwner {
          id
          firstName
          lastName
          gender
          nationality
          phoneNumber
          CNIC
          image
          nurseries
          createdAt
          updatedAt
        }
      }
    }
  }
`;
