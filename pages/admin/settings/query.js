import { gql } from "@apollo/client";

export const UPDATE_PROFILE = gql`
  mutation UpdateProfile($details: updateProfileInput!) {
    updateProfile(details: $details) {
      firstName
      lastName
      phoneNumber
      gender
      image
    }
  }
`;

export const UPDATE_PASSWORD = gql`
  mutation ChangePassword($oldPassword: String!, $newPassword: String!) {
    changePassword(oldPassword: $oldPassword, newPassword: $newPassword)
  }
`;
