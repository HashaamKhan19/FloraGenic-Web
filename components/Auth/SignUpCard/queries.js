import { gql } from "@apollo/client";

export const SIGN_UP = gql`
  mutation Register($credentials: UserRegisterInput!) {
    register(credentials: $credentials)
  }
`;
