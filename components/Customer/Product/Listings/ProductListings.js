import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Input,
  Modal,
  Pagination,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Filter from "../../Filters/Filter";
import ProductCard from "../../Cards/ProductCard";
import { BiSearch } from "react-icons/bi";
import React, { useContext, useState } from "react";
import Link from "next/link";
import { gql, useQuery } from "@apollo/client";
import CardLoading from "../../Generic/Skeletons/CardLoading";
import SixCardsLoading from "../../Generic/Skeletons/SixCardsLoading";
import ListingPagination from "../../Generic/ListingPagination";
import { ShopContext } from "../../../../context/shopContextProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { filtering } from "./ProductFiltering";

const GET_PRODUCTS = gql`
  query ExampleQuery {
    products {
      id
      nurseryID
      nursery {
        name
        id
        details
        images
      }
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
      reviews {
        createdAt
        likes
        rating
        review
        userID
      }
    }
  }
`;

const ProductListings = () => {
  const match1200 = useMediaQuery("(max-width: 1200px)");

  const [categoryValue, setCategoryValue] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [ratingValue, setRatingValue] = useState([]);

  const [opened, setOpened] = useState(false);

  const { loading, error, data } = useQuery(GET_PRODUCTS);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);
  const [filteredData, setFilteredData] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const indexOfLastPost = currentPage * postsPerPage; // = 9
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // = 0
  const currentPosts = filteredData?.slice(indexOfFirstPost, indexOfLastPost); // = 9

  useEffect(() => {
    console.log(data?.products);
    setFilteredData(data?.products?.length > 0 ? data?.products : []);
    setAllProducts(data?.products?.length > 0 ? data?.products : []);
  }, [data?.products]);

  useEffect(() => {
    console.log(categoryValue, priceRange, ratingValue);
    setFilteredData(filtering(categoryValue, ratingValue, priceRange, allProducts));
  }, [categoryValue, priceRange, ratingValue, allProducts]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const router = useRouter();
  const { search } = router.query;
  //searching
  const [query, setQuery] = useState("");

  if (search !== undefined && query === "") {
    setQuery(search);
  }

  return (
    <Container size={"xl"} pb={"xl"}>
      <Grid pt={"xl"}>
        <Grid.Col md={3} hidden={match1200 ? true : false}>
          <Filter
            categoryValue={categoryValue}
            setCategoryValue={setCategoryValue}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            ratingValue={ratingValue}
            setRatingValue={setRatingValue}
          />
        </Grid.Col>
        <Grid.Col md={!match1200 ? 9 : 12}>
          {loading && (
            <Box mt={"xs"}>
              <SixCardsLoading />
            </Box>
          )}

          {error && (
            <Text
              style={{
                fontWeight: 500,
                color: "darkslategray",
                whiteSpace: "nowrap",
              }}
            >
              Error loading products
            </Text>
          )}

          {!loading && !error && (
            <Group position="apart" noWrap>
              <Text
                style={{
                  fontWeight: 500,
                  color: "darkslategray",
                  whiteSpace: "nowrap",
                }}
              >
                {/* {
                  currentPosts?.filter((data) => {
                    if (query === '') {
                      return data
                    } else if (
                      data?.name?.toLowerCase().includes(query?.toLowerCase())
                    ) {
                      return data
                    }
                  }).length
                }{' '} */}
                {filteredData?.length} Products
              </Text>
              <Input
                placeholder="search..."
                icon={<BiSearch />}
                styles={(theme) => ({
                  input: {
                    "&:focus-within": {
                      borderColor: theme.colors.green[7],
                    },
                  },
                })}
                style={{
                  width: match1200 ? "100%" : "250px",
                }}
                onChange={(e) => setQuery(e.target.value)}
              />
              {match1200 && (
                <Button
                  onClick={() => {
                    setOpened(true);
                  }}
                  style={{
                    backgroundColor: "#62A82C",
                    color: "white",
                  }}
                >
                  Filters
                </Button>
              )}
            </Group>
          )}
          <SimpleGrid
            cols={3}
            breakpoints={[
              { maxWidth: 1040, cols: 2, spacing: "md" },
              { maxWidth: 680, cols: 1, spacing: "sm" },
            ]}
            mt={"xl"}
          >
            {currentPosts
              ?.filter((data) => {
                if (query === "") {
                  return data;
                } else if (data?.name?.toLowerCase().includes(query?.toLowerCase())) {
                  return data;
                }
              })
              .map((data, index) => (
                <Link href={`/customer/viewProduct/${data?.id}`} key={index}>
                  <ProductCard key={index} data={data} />
                </Link>
              ))}
          </SimpleGrid>

          <Group position="center" pt={"xl"}>
            {query === "" && (
              <ListingPagination
                postsPerPage={postsPerPage}
                totalPosts={data?.products?.length}
                paginate={paginate}
                currentPosts={currentPosts}
                filteredData={data?.products?.length > 0 ? data?.products : undefined}
              />
            )}
          </Group>
        </Grid.Col>
      </Grid>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        transition={"fade"}
        transitionDuration={700}
        transitionTimingFunction="ease"
        exitTransitionDuration={700}
        size={match1200 ? "xs" : ""}
        centered
      >
        <Filter
          categoryValue={categoryValue}
          setCategoryValue={setCategoryValue}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          ratingValue={ratingValue}
          setRatingValue={setRatingValue}
        />
      </Modal>
    </Container>
  );
};

export default ProductListings;
