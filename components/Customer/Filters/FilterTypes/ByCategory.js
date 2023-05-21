import { Checkbox } from "@mantine/core";
import { React, useState } from "react";

const ByCategory = ({ categoryValue, setCategoryValue }) => {
  // const [categoryValue, setCategoryValue] = useState([])

  const categories = [
    { label: "Plants" },
    { label: "Medicines" },
    { label: "Tools" },
    { label: "Decorations" },
    { label: "Seeds" },
  ];

  return (
    <>
      {categories.map((category, index) => (
        <Checkbox.Group
          orientation="vertical"
          value={categoryValue}
          onChange={setCategoryValue}
          key={index}
        >
          <Checkbox
            label={category.label}
            value={category.label.toLowerCase()}
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
