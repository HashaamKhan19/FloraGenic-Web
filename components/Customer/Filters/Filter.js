import { Box, Button, Group, NavLink, Paper, Stack, Text } from "@mantine/core";
import ByCategory from "./FilterTypes/ByCategory";
import { useState } from "react";
import ByPrice from "./FilterTypes/ByPrice";
import ByRatings from "./FilterTypes/ByRatings";
import { useMediaQuery } from "@mantine/hooks";
import ByCity from "./FilterTypes/ByCity";

const Filter = ({
  categoryValue = [],
  setCategoryValue,
  priceRange,
  setPriceRange,
  ratingValue = [],
  setRatingValue,
}) => {
  const [navlinkOpened, setNavLinkOpened] = useState(true);
  const match1200 = useMediaQuery("(max-width: 1200px)");

  return (
    <>
      <Paper
        mt={"xs"}
        pb={match1200 ? 0 : "xl"}
        withBorder={match1200 ? false : true}
        // w={'auto'}
      >
        {!match1200 && (
          <Button
            style={{
              width: "85%",
              backgroundColor: "#62A82C",
              color: "white",
            }}
            mx={"xl"}
            mt={"xs"}
            disabled={
              categoryValue.length === 0 &&
              priceRange[0] === 0 &&
              priceRange[1] === 20000 &&
              ratingValue.length === 0
            }
            sx={{
              "&[disabled]": {
                opacity: 0.3,
                pointerEvents: "all",
              },
            }}
            onClick={() => {
              setCategoryValue([]);
              setPriceRange([0, 20000]);
              setRatingValue([]);
            }}
          >
            Clear Filters
          </Button>
        )}
        <Stack pt={"xl"} px={"xl"}>
          <NavLink
            label="Categories"
            childrenOffset={25}
            styles={{
              label: {
                fontWeight: 525,
                color: "darkslategray",
                fontSize: "1rem",
              },
            }}
            opened={navlinkOpened}
            onClick={() => setNavLinkOpened(!navlinkOpened)}
          >
            <ByCategory categoryValue={categoryValue} setCategoryValue={setCategoryValue} />
          </NavLink>

          <ByPrice priceRange={priceRange} setPriceRange={setPriceRange} />

          <ByRatings ratingValue={ratingValue} setRatingValue={setRatingValue} />
        </Stack>
        {match1200 && (
          <Group mt={30} position="apart" noWrap>
            <Button
              fullWidth
              style={{
                backgroundColor: "#62A82C",
                color: "white",
              }}
            >
              Reset
            </Button>
          </Group>
        )}
      </Paper>
    </>
  );
};

export default Filter;
