import { Divider, Group, Input, RangeSlider, Stack, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useState } from "react";
import { ImLeaf } from "react-icons/im";

const ByPrice = ({ priceRange, setPriceRange }) => {
  const match1200 = useMediaQuery("(max-width: 1200px)");

  const handleSliderChange = (value) => {
    setPriceRange(value);
  };

  return (
    <Stack px={"xs"} mt={"xs"}>
      <Text
        style={{
          fontWeight: 525,
          color: "darkslategray",
        }}
      >
        Price Range
      </Text>
      <Group noWrap>
        <Input
          placeholder="Min"
          styles={(theme) => ({
            input: {
              "&:focus-within": {
                borderColor: theme.colors.green[7],
              },
            },
          })}
          icon={"Rs."}
          w={match1200 ? 150 : 100}
          value={priceRange?.[0]}
          onChange={(e) => {
            if (parseInt(e.target.value) > 20000 || e.target.value < 0) {
              e.target.value = 0;
            }
            setPriceRange((prevPriceRange) => [
              e.target.value,
              prevPriceRange?.[1],
            ]);
          }}
        />
        <Divider w={match1200 ? 10 : 8} size={match1200 ? 3 : 2} />
        <Input
          placeholder="Max"
          icon={"Rs."}
          styles={(theme) => ({
            input: {
              "&:focus-within": {
                borderColor: theme.colors.green[7],
              },
            },
          })}
          w={match1200 ? 150 : 100}
          value={priceRange?.[1]}
          onChange={(e) => {
            if (parseInt(e.target.value) > 20000 || e.target.value < 0) {
              e.target.value = 20000;
            }
            setPriceRange((prevPriceRange) => [
              prevPriceRange?.[0],
              e.target.value,
            ]);
          }}
        />
      </Group>
      <RangeSlider
        mt="xl"
        styles={{
          thumb: {
            borderWidth: 2,
            padding: 3,
            color: "#62A82C",
            borderColor: "#62A82C",
          },
          bar: { backgroundColor: "#62A82C" },
        }}
        max={20000}
        label={null}
        defaultValue={[priceRange?.[0], priceRange?.[1]]}
        value={priceRange}
        onChange={handleSliderChange}
        thumbSize={26}
        thumbChildren={[
          <ImLeaf size="1rem" key="1" />,
          <ImLeaf size="1rem" key="2" />,
        ]}
      />
    </Stack>
  );
};

export default ByPrice;
