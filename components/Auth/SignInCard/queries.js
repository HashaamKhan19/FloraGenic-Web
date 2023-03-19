import { gql } from "@apollo/client";

export const LOGIN_QUERY = gql`
  mutation Login($credentials: UserLoginInput!) {
    login(credentials: $credentials) {
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
          skills {
            skill {
              name
            }
            endorsements
          }
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
      token
    }
  }
`;
