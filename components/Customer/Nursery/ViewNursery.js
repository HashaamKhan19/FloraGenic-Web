import {
  Button,
  Container,
  Grid,
  Group,
  Input,
  Modal,
  Pagination,
  Paper,
  SimpleGrid,
  Text,
} from "@mantine/core";
import NurseryInfoCard from "./NurseryInfoCard";
import ProductCard from "../Cards/ProductCard";
import { useMediaQuery } from "@mantine/hooks";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import Filter from "../Filters/Filter";
import { useState } from "react";
import ListingPagination from "../Generic/ListingPagination";

export default function ViewNursery({ data, loading, error }) {
  const match1200 = useMediaQuery("(max-width: 1200px)");
  const [opened, setOpened] = useState(false);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const indexOfLastPost = currentPage * postsPerPage; // = 9
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // = 0
  const currentPosts = data?.products?.slice(indexOfFirstPost, indexOfLastPost); // = 9

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //searching
  const [query, setQuery] = useState("");

  return (
    <>
      <Container size={"xl"} pt={"xl"} mb={"xl"}>
        <Paper
          style={{
            width: "100%",
            height: "300px",
          }}
        >
          <NurseryInfoCard data={data} />
        </Paper>
        <Grid mt={"xl"}>
          <Grid.Col md={3} hidden={match1200 ? true : false}>
            <Filter />
          </Grid.Col>
          <Grid.Col md={!match1200 ? 9 : 12}>
            {data?.products?.length > 0 ? (
              <Group position="apart" noWrap>
                <Text
                  style={{
                    fontWeight: 500,
                    color: "darkslategray",
                    whiteSpace: "nowrap",
                  }}
                >
                  {data?.products?.length}{" "}
                  {data?.products?.length > 1 ? "products" : "product"} found
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
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
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
            ) : (
              <Text
                style={{
                  fontWeight: 525,
                  color: "darkslategray",
                  whiteSpace: "nowrap",
                  textAlign: "center",
                  fontSize: "20px",
                }}
              >
                {loading ? "Loading products..." : "No products found"}
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
                .map((prodData, index) => (
                  <Link
                    href={`/customer/viewProduct/${prodData.id}`}
                    key={index}
                  >
                    <ProductCard key={index} data={prodData} />
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
                  filteredData={
                    data?.products?.length > 0 ? data?.products : undefined
                  }
                />
              )}
            </Group>
          </Grid.Col>
        </Grid>
      </Container>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        size={match1200 ? "xs" : ""}
        transition={"fade"}
        transitionDuration={700}
        transitionTimingFunction="ease"
        exitTransitionDuration={700}
        centered
      >
        <Filter />
      </Modal>
    </>
  );
}
