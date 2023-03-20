import { gql } from "@apollo/client";

export const GET_ORDERS = gql`
  query Query {
    orders {
      id
      customerID
      totalPrice
      discount
      totalPriceAfterDiscount
      shippingAddress
      orderingDate
      shipmentDate
      receivedDate
      paymentStatus
      orderStatus
      customerDetails {
        firstName
        lastName
        userDetails {
          email
        }
      }
    }
  }
`;
