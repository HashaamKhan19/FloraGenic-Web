import { gql } from "@apollo/client";

export const REQUEST_PASSWORD_RESET = gql`
  mutation RequestPasswordReset($email: String!, $userType: String!) {
    requestPasswordReset(email: $email, userType: $userType)
  }
`;

export const RESET_PASSWORD = gql`
  mutation ResetPassword($token: String!, $password: String!) {
    resetPassword(token: $token, password: $password)
  }
`;
