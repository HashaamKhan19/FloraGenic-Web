import React from "react";
import ViewReviews from "../../components/Nursery/ViewReviews";
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://floragenic.herokuapp.com/graphql",
  // uri: "http://localhost:4000/graphql",
});

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: localStorage.getItem("token") || "",
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const GET_PRODUCT_REVIEWS = gql`
  query Reviews {
    reviews {
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
        firstName
        lastName
        image
      }
      productDetails {
        name
      }
      totalReviews
    }
  }
`;

const ViewNurseryReviewsTable = () => {
  const { loading, error, data } = useQuery(GET_PRODUCT_REVIEWS, {
    client: client,
  });

  console.log(data);

  return (
    <>
      <ViewReviews rows={data?.reviews} />
    </>
  );
};

export default ViewNurseryReviewsTable;
