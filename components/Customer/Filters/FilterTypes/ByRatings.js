import { Checkbox, Group, Rating, Stack, Text } from "@mantine/core";
import React from "react";

const ratings = [{ value: "5" }, { value: "4" }, { value: "3" }, { value: "2" }, { value: "1" }];

const ByRatings = ({ ratingValue, setRatingValue }) => {
  return (
    <>
      <Stack px={"xs"} mt={"xl"}>
        <Text
          style={{
            fontWeight: 525,
            color: "darkslategray",
          }}
        >
          Ratings
        </Text>
        {ratings.map((rating, index) => (
          <Checkbox.Group
            orientation="vertical"
            value={ratingValue}
            onChange={setRatingValue}
            key={index}
          >
            <Checkbox
              key={index}
              value={rating.value}
              label={
                <>
                  <Rating value={rating.value} readOnly />
                </>
              }
              radius={"xs"}
              styles={{
                input: {
                  "&:checked": {
                    backgroundColor: "#62A82C",
                    borderColor: "#62A82C",
                  },
                  "&:hover": {
                    cursor: "pointer",
                  },
                  borderColor: "#62A82C",
                },
              }}
              unselectable="on"
            />
          </Checkbox.Group>
        ))}
      </Stack>
    </>
  );
};

export default ByRatings;
