import { gql } from "@apollo/client";

export const GET_COMPLAINTS = gql`
  query Query {
    complaints {
      id
      name
      email
      type
      title
      description
      date
      read
    }
  }
`;

export const DELETE_COMPLAINT = gql`
  mutation ComplaintDelete($complaintDeleteId: ID!) {
    complaintDelete(id: $complaintDeleteId)
  }
`;
