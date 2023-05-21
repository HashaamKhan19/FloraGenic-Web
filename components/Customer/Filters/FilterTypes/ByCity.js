import React from "react";
import { PakistanCities } from "../Cities";
import { MultiSelect, Stack, Text } from "@mantine/core";

const cityData = PakistanCities.map((city) => ({
  label: city.label,
  value: city.value,
}));

const ByCity = ({ cities, setCities }) => {
  return (
    <>
      <Text
        style={{
          fontWeight: 525,
          color: "darkslategray",
        }}
      >
        City
      </Text>
      <MultiSelect
        data={cityData}
        placeholder="Select city"
        styles={(theme) => ({
          input: {
            "&:focus-within": {
              borderColor: theme.colors.green[7],
            },
          },
        })}
        value={cities}
        onChange={(value) => {
          setCities(value);
        }}
      />
    </>
  );
};

export default ByCity;
