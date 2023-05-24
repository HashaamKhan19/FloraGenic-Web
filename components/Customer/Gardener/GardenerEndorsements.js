import {
  Badge,
  Chip,
  Divider,
  Paper,
  Skeleton,
  Space,
  Stack,
  Text,
} from "@mantine/core";
import React, { useState } from "react";

const GardenerEndorsements = ({ data, loading, error }) => {
  const [checked, setChecked] = useState(false);
  const [endorsements, setEndorsements] = useState(0);

  return (
    <>
      {loading && (
        <Paper>
          <Skeleton height={100} />
        </Paper>
      )}
      {error && (
        <Paper>
          <Text>Error</Text>
        </Paper>
      )}
      <Text
        style={{
          fontSize: "1.3rem",
          fontWeight: 525,
          color: "darkslategray",
        }}
      >
        Skills
      </Text>

      {data?.skills?.map((skill, id) => (
        <Badge
          key={id}
          size="lg"
          color="green"
          style={{
            fontWeight: 500,
            marginInline: "0.5rem",
          }}
        >
          {skill.name || "Skill Name"}
        </Badge>
      ))}
    </>
  );
};

export default GardenerEndorsements;
