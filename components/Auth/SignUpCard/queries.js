import { gql } from "@apollo/client";

export const SIGN_UP = gql`
  mutation Register($credentials: UserRegisterInput!) {
    register(credentials: $credentials)
  }
`;

export const SIGN_UP_WITH_TOKEN = gql`
  mutation RegisterWithToken($token: String!, $userType: String!) {
    registerWithToken(token: $token, userType: $userType)
  }
`;
