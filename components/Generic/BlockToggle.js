import { gql, useMutation } from "@apollo/client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { useState } from "react";

const BLOCK_USER = gql`
  mutation BlockUser($blockUserId: ID!) {
    blockUser(id: $blockUserId)
  }
`;

const BLOCK_NURSERY = gql`
  mutation NurseryBlock($nurseryBlockId: ID!) {
    nurseryBlock(id: $nurseryBlockId)
  }
`;

export default function BlockToggle({ blocked, id, type }) {
  const [status, setStatus] = useState(blocked);

  const [blockUser] = useMutation(BLOCK_USER, {
    variables: { blockUserId: id },
  });

  const [blockNursery] = useMutation(BLOCK_NURSERY, {
    variables: { blockUserId: id },
  });

  const [buttonTextColor, setButtonTextColor] = useState(
    blocked ? "error" : "primary"
  );

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleBlock = async () => {
    switch (type) {
      case "user": {
        const res = await blockUser();
        if (res.data.blockUser) {
          setStatus(!status);
          setButtonTextColor((prev) => {
            return prev === "primary" ? "error" : "primary";
          });
        } else {
          alert("Something went wrong");
        }
        handleClose();
        break;
      }
      case "nursery": {
        const res = await blockNursery();
        if (res.data.blockUser) {
          setStatus(!status);
          setButtonTextColor((prev) => {
            return prev === "primary" ? "error" : "primary";
          });
        } else {
          alert("Something went wrong");
        }
        handleClose();
        break;
      }
    }
  };

  return (
    <>
      <Button
        onClick={handleClick}
        variant="outlined"
        color={buttonTextColor}
        endIcon={
          <KeyboardArrowDownIcon sx={{ marginLeft: -1, marginRight: 1 }} />
        }
        size="small"
        sx={{
          padding: "1px 0",
          borderWidth: "1px",
          justifyContent: "center",
          fontFamily: "poppins",
          fontSize: "10px",
          maxWidth: "80px",
          paddingLeft: 1,
        }}
      >
        {status ? "Blocked" : "Active"}
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {status ? (
          <MenuItem
            onClick={handleBlock}
            sx={{
              minWidth: "60px",
              justifyContent: "center",
              maxHeight: "10px",
              fontSize: "14px",
            }}
          >
            Unblock
          </MenuItem>
        ) : (
          <MenuItem
            onClick={handleBlock}
            sx={{
              minWidth: "65px",
              justifyContent: "center",
              maxHeight: "10px",
              fontSize: "14px",
            }}
          >
            Block
          </MenuItem>
        )}
      </Menu>
    </>
  );
}
