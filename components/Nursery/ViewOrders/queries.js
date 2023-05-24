import { gql } from "@apollo/client";

export const GET_ORDERS = gql`
  query Orders {
    orders {
      id
      customerID
      products {
        productID
        quantity
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
        id
        firstName
        lastName
        nationality
        phoneNumber
        gender
        image
        createdAt
        updatedAt
      }
      paymentType
    }
  }
`;
