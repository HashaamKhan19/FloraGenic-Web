import { useState } from "react";
import { Chip } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import { gql, useQuery } from "@apollo/client";

const GET_SKILLS = gql`
  query Query {
    skills {
      id
      name
      description
      image
    }
  }
`;
export default function CheckableChips({selected, setSelected}) {

  const { loading, error, data } = useQuery(GET_SKILLS);
  

  const handleChipClick = (value) => {
    if (selected.includes(value.id)) {
      setSelected(selected.filter((item) => item !== value.id));
    } else {
      setSelected([...selected, value.id]);
    }
  };

  const renderChips = () => {
    const chips = data?.skills?.map((skill) => {
      return { name: skill.name, id: skill.id };
    }) || [
      { id: 1, name: "Chip 1" },
      { id: 2, name: "Chip 2" },
      { id: 3, name: "Chip 3" },
    ];

    return chips.map((chip) => {
      const isSelected = selected.includes(chip.id);

      return (
        <Chip
          key={chip.id}
          label={chip.name}
          onClick={() => handleChipClick(chip)}
          clickable={!isSelected}
          icon={
            isSelected ? (
              <DoneIcon color={isSelected ? "#fff" : "inherit"} />
            ) : null
          }
          sx={{
            backgroundColor: isSelected ? "#62A82C" : "#E5E5E5",
            color: isSelected ? "#fff" : "text.primary",
            paddingX: "0.3rem",
            marginX: "0.2rem",
            cursor: "pointer",
            marginY: "0.2rem",
          }}
        />
      );
    });
  };

  return <div>{renderChips()}</div>;
}
