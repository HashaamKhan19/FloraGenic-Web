import { gql } from "@apollo/client";

export const UPDATE_PROFILE = gql`
  mutation UpdateProfile($details: updateProfileInput!) {
    updateProfile(details: $details)
  }
`;
