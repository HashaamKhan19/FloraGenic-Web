import { gql, useMutation } from "@apollo/client";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CircularProgress } from "@mui/material";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";

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

const HIDE_PRODUCT = gql`
  mutation ProductHide($productHideId: ID!) {
    productHide(id: $productHideId)
  }
`;

const HIDE_CATEGORY = gql`
  mutation CategoryHide($categoryHideId: ID!) {
    categoryHide(id: $categoryHideId)
  }
`;

const HIDE_SKILL = gql`
  mutation SkillHide($skillHideId: ID!) {
    skillHide(id: $skillHideId)
  }
`;

export default function BlockToggle({ blocked, id, type, hide = false }) {
  const [status, setStatus] = useState(blocked);

  const [blockUser, { loading: userBlockLoading }] = useMutation(BLOCK_USER, {
    variables: { blockUserId: id },
    onCompleted: (res) => {
      toast.success(res.blockUser);
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  const [blockNursery, { loading: nurseryBlockLoading }] = useMutation(
    BLOCK_NURSERY,
    {
      variables: { nurseryBlockId: id },
      onCompleted: (res) => {
        toast.success(res.nurseryBlock);
      },
      onError: (err) => {
        toast.error(err.response.data.message);
      },
    }
  );

  const [hideProduct, { loading: productHideLoading }] = useMutation(
    HIDE_PRODUCT,
    {
      variables: { productHideId: id },
      onCompleted: (res) => {
        toast.success(res.productHide);
      },
      onError: (err) => {
        toast.error(err.response.data.message);
      },
    }
  );

  const [hideCategory, { loading: categoryHideLoading }] = useMutation(
    HIDE_CATEGORY,
    {
      variables: { categoryHideId: id },
      onCompleted: (res) => {
        toast.success(res.categoryHide);
      },
      onError: (err) => {
        toast.error(err.response.data.message);
      },
    }
  );

  const [hideSkill, { loading: skillHideLoading }] = useMutation(HIDE_SKILL, {
    variables: { skillHideId: id },
    onCompleted: (res) => {
      toast.success(res.skillHide);
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
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
        console.log(res);
        if (res.data.nurseryBlock) {
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
      case "product": {
        const res = await hideProduct();
        console.log(res);
        if (res.data.productHide) {
          setStatus(!status);
          setButtonTextColor((prev) => {
            return prev === "primary" ? "error" : "primary";
          });
        }
        handleClose();
        break;
      }
      case "category": {
        const res = await hideCategory();
        console.log(res);
        if (res.data.categoryHide) {
          setStatus(!status);
          setButtonTextColor((prev) => {
            return prev === "primary" ? "error" : "primary";
          });
        }
        handleClose();
        break;
      }
      case "skill": {
        const res = await hideSkill();
        console.log(res);
        if (res.data.skillHide) {
          setStatus(!status);
          setButtonTextColor((prev) => {
            return prev === "primary" ? "error" : "primary";
          });
        }
        handleClose();
        break;
      }
    }
  };

  if (
    userBlockLoading ||
    nurseryBlockLoading ||
    productHideLoading ||
    categoryHideLoading ||
    skillHideLoading
  )
    return <CircularProgress size={30} />;

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
        {status ? (hide ? "Hidden" : "Blocked") : "Active"}
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
            {hide ? "Activate" : "Unblock"}
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
            {hide ? "Hide" : "Block"}
          </MenuItem>
        )}
      </Menu>
    </>
  );
}
