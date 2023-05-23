import { gql } from "@apollo/client";

export const GET_CART_ITEMS = gql`
  query CartItems {
    cartItems {
      id
      productID
      userID
      quantity
      totalPrice
      productDetails {
        id
        nurseryID
        name
        description
        category {
          name
        }
        hidden
        retailPrice
        wholesalePrice
        stock
        sold
        images
        overallRating
        tags
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;

export const CREATE_CART_ITEM = gql`
  mutation CartItemCreate($data: CartItemCreateInput!) {
    cartItemCreate(data: $data) {
      id
      productID
      userID
      quantity
      totalPrice
      productDetails {
        id
        nurseryID
        name
        description
        category {
          name
        }
        hidden
        retailPrice
        wholesalePrice
        stock
        sold
        images
        overallRating
        tags
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;

export const UPDATE_CART_ITEM = gql`
  mutation CartItemUpdate($cartItemUpdateId: ID!, $quantity: Int!) {
    cartItemUpdate(id: $cartItemUpdateId, quantity: $quantity) {
      id
      productID
      userID
      quantity
      totalPrice
      productDetails {
        id
        nurseryID
        name
        description
        category {
          name
        }
        hidden
        retailPrice
        wholesalePrice
        stock
        sold
        images
        overallRating
        tags
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;

export const DELETE_CART_ITEM = gql`
  mutation CartItemDelete($cartItemDeleteId: ID!) {
    cartItemDelete(id: $cartItemDeleteId) {
      id
      productID
      userID
      quantity
      totalPrice
      productDetails {
        id
        nurseryID
        name
        description
        category {
          name
        }
        hidden
        retailPrice
        wholesalePrice
        stock
        sold
        images
        overallRating
        tags
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;

export const CLEAR_CART = gql`
  mutation Mutation {
    cartItemDeleteAll
  }
`;
