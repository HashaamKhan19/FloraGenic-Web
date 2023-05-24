import { gql } from "@apollo/client";

export const GET_ORDERS = gql`
  query Orders {
    orders {
      id
      customerID
      products {
        productDetails {
          name
        }
      }
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
        image
      }
      paymentType
    }
  }
`;
