import { gql, useQuery } from "@apollo/client";
import { Checkbox } from "@mantine/core";
import { React, useState } from "react";

const ByCategory = ({ categoryValue, setCategoryValue }) => {
  // const [categoryValue, setCategoryValue] = useState([])

  const GET_CATEGORIES = gql`
    query Categories {
      categories {
        name
        id
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_CATEGORIES);

  const categories = [
    { label: "Plants" },
    { label: "Medicines" },
    { label: "Tools" },
    { label: "Decorations" },
    { label: "Seeds" },
  ];

  return (
    <>
      {data?.categories?.map((category, index) => (
        <Checkbox.Group
          orientation="vertical"
          value={categoryValue}
          onChange={setCategoryValue}
          key={index}
        >
          <Checkbox
            label={category.name}
            value={category.name.toLowerCase()}
            key={index}
            radius={"xs"}
            my={1}
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
    </>
  );
};

export default ByCategory;
