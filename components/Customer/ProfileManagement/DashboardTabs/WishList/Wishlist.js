import {
  Box,
  Button,
  Center,
  Group,
  Input,
  Pagination,
  SimpleGrid,
  Text,
} from "@mantine/core";
import React, { useContext, useState } from "react";
import { useMediaQuery } from "@mantine/hooks";
import { BiSearch } from "react-icons/bi";
import { WishlistContext } from "../../../../../context/wishlistContext";
import ProductCard from "../../../Cards/ProductCard";
import Link from "next/link";
import ListingPagination from "../../../Generic/ListingPagination";

const Wishlist = () => {
  const match768 = useMediaQuery("(max-width: 768px)");
  const match1000 = useMediaQuery("(max-width: 1000px)");

  const { wishlistItems, clearWishlist } = useContext(WishlistContext);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage; // = 9
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // = 0
  const currentPosts = wishlistItems.slice(indexOfFirstPost, indexOfLastPost); // = 9

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //searching
  const [query, setQuery] = useState("");

  return (
    <Box pt={match1000 ? "xl" : ""}>
      <Group position="apart">
        <Button
          style={{
            backgroundColor: "#62A82C",
            color: "white",
          }}
          sx={{
            "&[disabled]": {
              opacity: 0.5,
              pointerEvents: "all",
            },
          }}
          disabled={wishlistItems.length === 0}
          onClick={() => clearWishlist()}
        >
          Remove All <Text pl={2}>{"(" + wishlistItems.length + ")"}</Text>
        </Button>
        <Input
          placeholder="search..."
          icon={
            <BiSearch
              style={{
                display: wishlistItems.length === 0 ? "none" : "",
              }}
            />
          }
          styles={(theme) => ({
            input: {
              "&:focus-within": {
                borderColor: theme.colors.green[7],
              },
            },
          })}
          hidden={wishlistItems.length === 0}
          style={{
            width: match768 ? "100%" : "250px",
          }}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Group>

      {wishlistItems.length === 0 && (
        <Text align="center" mt={"xl"}>
          No favourite products yet.
        </Text>
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
            } else if (
              data?.name?.toLowerCase().includes(query?.toLowerCase())
            ) {
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
            totalPosts={wishlistItems.length}
            paginate={paginate}
            currentPosts={currentPosts}
            filteredData={wishlistItems?.length > 0 ? wishlistItems : undefined}
          />
        )}
      </Group>
    </Box>
  );
};

export default Wishlist;
