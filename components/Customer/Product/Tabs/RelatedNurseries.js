import { gql, useQuery } from "@apollo/client";
import {
  Avatar,
  Box,
  Grid,
  Group,
  Loader,
  Paper,
  Skeleton,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";
import ProductCard from "../../Cards/ProductCard";

const RELATED_PRODUCTS = gql`
  query Products($data: ProductSearchInput) {
    products(data: $data) {
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
  }
`;

const cardsData = [
  {
    id: 1,
    name: "Talha Nursery",
  },
  {
    id: 2,
    name: "Hashaam Nursery",
  },
  {
    id: 3,
    name: "Abdullah Nursery",
  },
  {
    id: 4,
    name: "Taha Nursery",
  },
];

const RelatedNurseries = ({ data }) => {
  const {
    data: relatedProductsData,
    loading: relatedProductsLoading,
    error: relatedProductsError,
  } = useQuery(RELATED_PRODUCTS, {
    variables: {
      data: {
        nurseryID: data?.product?.nurseryID,
      },
    },
    skip: !data?.product?.nurseryID,
  });

  if (relatedProductsLoading) return <Loader />;

  if (relatedProductsData?.products?.length !== 1)
    return (
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Stack>
          <Text
            weight={600}
            style={{
              fontSize: 22,
              color: "darkslategray",
            }}
          >
            More from this nursery
          </Text>
          <Grid>
            {relatedProductsData?.products
              ?.map((card, index) => {
                console.log("AUR KAM BHT HAIN", card.id, data?.product?.id);
                if (card.id === data?.product?.id) return null;
                return (
                  <Grid.Col lg={3} sm={6} key={index}>
                    <ProductCard data={card} />
                  </Grid.Col>
                );
              })
              .slice(0, 4)}
          </Grid>
        </Stack>
      </Box>
    );
};

export default RelatedNurseries;
