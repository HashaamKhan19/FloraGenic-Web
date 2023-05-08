import {
  ActionIcon,
  Box,
  Button,
  Grid,
  Group,
  Modal,
  Paper,
  Text,
  TextInput,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useState } from "react";
import { AiOutlineDelete, AiOutlineEye } from "react-icons/ai";
import { BiMap } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
import { CiEdit } from "react-icons/ci";
import DeleteAddress from "./DeleteAddress";
import EditAddress from "./EditAddress";
import AddAddress from "./AddAddress";

const addresses = [
  {
    id: 1,
    name: "Home",
    address: "123, Main Street, New York, USA",
    phone: "+1 9876543210",
    isDefault: true,
  },
];

const Address = () => {
  const match768 = useMediaQuery("(max-width: 768px)");
  const match1000 = useMediaQuery("(max-width: 1000px)");

  const [editOpened, setEditOpened] = useState(false);
  const [deleteOpened, setDeleteOpened] = useState(false);
  const [addOpened, setAddOpened] = useState(false);

  return (
    <>
      <Group position="apart" mt={match1000 ? "xl" : "0"} mb={"xl"}>
        <Group spacing={"xs"}>
          <BiMap size={22} color="#62A82C" />
          <Text
            style={{
              fontWeight: 500,
              fontSize: "24px",
              color: "darkslategray",
            }}
          >
            My Addresses
          </Text>
        </Group>

        <Button
          variant="light"
          c={"#62A82C"}
          onClick={() => setAddOpened(true)}
        >
          <Text weight={400}>Add Address</Text>
        </Button>
      </Group>

      {addresses.map((address) => (
        <Paper key={address.id} p={"md"} my={"xs"} shadow="xs">
          <Grid>
            <Grid.Col span={8}>
              <Group
                noWrap
                spacing={"xl"}
                style={{
                  justifyContent: "space-between",
                }}
              >
                <Text maw={100} truncate color="darkslategray">
                  {address.name}
                </Text>
                <Text truncate maw={200} color="darkslategray">
                  {address.address}
                </Text>
                <Text hidden={match768 ? true : false} color="darkslategray">
                  {address.phone}
                </Text>
              </Group>
            </Grid.Col>
            <Grid.Col span={4}>
              <Group spacing={"md"} position="right" noWrap>
                <ActionIcon
                  variant="light"
                  color="blue"
                  size="lg"
                  onClick={() => setEditOpened(true)}
                >
                  <CiEdit size={22} />
                </ActionIcon>
                <ActionIcon
                  variant="light"
                  color="red"
                  size="lg"
                  onClick={() => setDeleteOpened(true)}
                >
                  <AiOutlineDelete size={21} />
                </ActionIcon>
              </Group>
            </Grid.Col>
          </Grid>
        </Paper>
      ))}

      <AddAddress addOpened={addOpened} setAddOpened={setAddOpened} />
      <EditAddress editOpened={editOpened} setEditOpened={setEditOpened} />
      <DeleteAddress
        deleteOpened={deleteOpened}
        setDeleteOpened={setDeleteOpened}
      />
    </>
  );
};

export default Address;
