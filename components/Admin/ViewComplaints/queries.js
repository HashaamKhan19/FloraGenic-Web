import { gql } from '@apollo/client'

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
`
