import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";
import { Avatar, Group, Rating, Stack, Text } from "@mantine/core";
import React from "react";

const GET_PRODUCT_REVIEWS = gql`
  query Reviews($productId: ID!) {
    reviews(productID: $productId) {
      id
      userID
      productID
      productType
      rating
      review
      likes
      createdAt
      updatedAt
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
    }
  }
`;
const httpLink = new HttpLink({
  uri: "https://floragenic.herokuapp.com/graphql",
});

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("token");

  operation.setContext({
    headers: {
      Authorization: token ? `${token}` : "",
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const ProductReviews = ({ data }) => {
  const {
    loading,
    error,
    data: data1,
  } = useQuery(GET_PRODUCT_REVIEWS, {
    variables: { productId: data?.id },
  });

  return (
    <>
      {data1?.reviews?.length === 0 && (
        <Text
          style={{
            fontSize: 14,
            color: "darkslategray",
            fontWeight: 500,
          }}
        >
          No reviews yet
        </Text>
      )}
      {data1?.reviews?.map((review, index) => (
        <Group key={index}>
          <Stack mt={"lg"}>
            <Group spacing={"xs"}>
              <Avatar
                radius="xl"
                size={"lg"}
                src={
                  review?.customerDetails?.image || "https://i.pravatar.cc/300"
                }
              />
              <Stack spacing={0}>
                <Text
                  weight={500}
                  style={{
                    fontSize: 14,
                    color: "darkslategray",
                  }}
                >
                  {review?.customerDetails?.firstName || "Anonymous"}{" "}
                  {review?.customerDetails?.lastName || "User"}
                </Text>
                <Group>
                  <Rating
                    value={review?.rating || 4}
                    fractions={2}
                    size="md"
                    readOnly
                  />{" "}
                  {review?.rating || 0}
                </Group>
              </Stack>
            </Group>
            <Text
              mt={"xs"}
              pl={"xs"}
              style={{
                fontSize: 14,
                color: "darkslategray",
              }}
            >
              {review?.review || "Product Review"}
            </Text>
          </Stack>
        </Group>
      ))}
    </>
  );
};

export default ProductReviews;
