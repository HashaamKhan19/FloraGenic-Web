import {
  Box,
  Button,
  Group,
  Input,
  Pagination,
  SimpleGrid,
  Text,
} from "@mantine/core";
import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import { BiSearch } from "react-icons/bi";

const Wishlist = () => {
  const match768 = useMediaQuery("(max-width: 768px)");
  const match1000 = useMediaQuery("(max-width: 1000px)");

  return (
    <Box pt={match1000 ? "xl" : ""}>
      <Group position="apart">
        <Button
          style={{
            backgroundColor: "#62A82C",
            color: "white",
          }}
        >
          Remove All <Text pl={2}>(9)</Text>
        </Button>
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
            width: match768 ? "100%" : "250px",
          }}
        />
      </Group>
      <SimpleGrid
        cols={3}
        breakpoints={[
          { maxWidth: 1040, cols: 2, spacing: "md" },
          { maxWidth: 680, cols: 1, spacing: "sm" },
        ]}
        mt={"xl"}
      >
        <Text>Wishlist items here</Text>
      </SimpleGrid>
      <Group position="center" pt={"xl"}>
        <Pagination
          total={3}
          position="center"
          styles={(theme) => ({
            item: {
              "&[data-active]": {
                backgroundImage: theme.fn.gradient({
                  from: "#62A82C",
                  to: "#62A82C",
                }),
              },
            },
          })}
        />
      </Group>
    </Box>
  );
};

export default Wishlist;
