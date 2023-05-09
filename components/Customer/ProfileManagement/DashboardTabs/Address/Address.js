import {
  ActionIcon,
  Box,
  Button,
  Center,
  Grid,
  Group,
  Loader,
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
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://floragenic.herokuapp.com/graphql",
});

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem("token");

  operation.setContext({
    headers: {
      Authorization: token ? `${token}` : "",
    },
  });

  return forward(operation);
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const GET_ADDRESS = gql`
  query Query {
    addresses {
      id
      userID
      name
      location
      city
      setAsDefault
    }
  }
`;

const Address = () => {
  const match768 = useMediaQuery("(max-width: 768px)");
  const match1000 = useMediaQuery("(max-width: 1000px)");

  const [editOpened, setEditOpened] = useState(false);
  const [deleteOpened, setDeleteOpened] = useState(false);
  const [addOpened, setAddOpened] = useState(false);

  const { data, loading, error } = useQuery(GET_ADDRESS, { client });

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

      {loading && (
        <Center>
          <Loader variant="bars" color="green" />
        </Center>
      )}

      {data?.addresses?.length === 0 && (
        <Text
          style={{
            fontWeight: 500,
            fontSize: "18px",
            color: "darkslategray",
            textAlign: "center",
          }}
        >
          {" "}
          You have no addresses yet
        </Text>
      )}

      {data?.addresses?.map((address) => (
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
                  {address.name || "No Name"}
                </Text>
                <Text truncate maw={200} color="darkslategray">
                  {address.location || "No Location"}
                </Text>
                <Text hidden={match768 ? true : false} color="darkslategray">
                  {address.city || "No City"}
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
