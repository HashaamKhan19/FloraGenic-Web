import { gql } from "@apollo/client";

export const GET_COMPLAINTS = gql`
  query Query {
    complaints {
      id
      userId
      type
      title
      description
      date
      read
      userDetails {
        email
      }
    }
  }
`;
