import {
  Badge,
  Button,
  Checkbox,
  Container,
  Flex,
  Grid,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/authContext";
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  gql,
  useMutation,
  useQuery,
} from "@apollo/client";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Box } from "@mui/material";
import { useForm } from "@mantine/form";
import { toast } from "react-hot-toast";

const GET_ADDRESSES = gql`
  query Addresses {
    addresses {
      id
      userID
      name
      location
      pin
      city
      setAsDefault
    }
  }
`;

const ADD_ADDRESS = gql`
  mutation AddressCreate($input: AddressInput!) {
    addressCreate(input: $input)
  }
`;

// const UPDATE_ADDRESS = gql`

const SET_AS_DEFAULT_ADDRESS = gql`
  mutation SetDefaultAddress($setDefaultAddressId: ID!) {
    setDefaultAddress(id: $setDefaultAddressId) {
      id
      userID
      name
      location
      pin
      city
      setAsDefault
    }
  }
`;

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

const ShippingDetails = ({ selectedAddress, setSelectedAddress }) => {
  const { user } = useContext(AuthContext);

  const [addresses, setAddresses] = useState([]);

  const [mode, setMode] = useState("select");

  useEffect(() => {
    setSelectedAddress(addresses?.[0]);
  }, [addresses]);

  const { loading, error, data } = useQuery(GET_ADDRESSES, {
    client,
    onCompleted: (data) => {
      setAddresses(data.addresses);
      if (data.addresses.length === 0) {
        setMode("add");
      }
    },
    onError: (error) => {
      toast.error(error.message);
    },
    skip: !user,
  });

  const [addAddress, { loading: addLoading }] = useMutation(ADD_ADDRESS, {
    client,
    onCompleted: (data) => {
      toast.success("Address added successfully");
      setMode("select");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const [setDefaultAddress, { loading: setDefaultLoading }] = useMutation(
    SET_AS_DEFAULT_ADDRESS,
    {
      client,
      onCompleted: (data) => {
        toast.success("Address set as default successfully");
        console.log(data.setDefaultAddress);
      },
      onError: (error) => {
        toast.error(error.message);
      },
    }
  );

  const handleFormSubmit = (values) => {
    addAddress({
      variables: {
        input: {
          ...values,
        },
      },
    });
  };

  const form = useForm({
    initialValues: {
      name: "",
      location: "",
      setAsDefault: false,
      city: "",
    },

    validate: {
      name: (value) =>
        mode === "add" && value.trim().length > 0 ? null : "Name is required",
      location: (value) =>
        mode === "add" && value.trim().length > 0
          ? null
          : "Location is required",
      city: (value) =>
        mode === "add" && value.trim().length > 0 ? null : "City is required",
    },
  });

  return (
    <Container size={"xl"} py={"xl"}>
      {mode === "select" ? (
        <>
          {addresses.map((address, index) => (
            <Paper
              onClick={() => {
                form.setFieldValue("address", address.id);
                setSelectedAddress(address);
              }}
              p={"xl"}
              my={"xl"}
              shadow="xs"
              key={index}
              style={{
                backgroundColor:
                  selectedAddress?.id === address.id ? "#6aa82c" : "white",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.2)",
                borderRadius: "10px",
              }}
            >
              <Flex align={"center"} justify={"space-between"}>
                <Flex align={"center"} gap={20}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: 40,
                      width: 40,
                      borderRadius: "50%",
                      background:
                        selectedAddress?.id === address.id
                          ? "white"
                          : "linear-gradient(90.9deg, #6aa82c 0.75%, #80c936 99.23%)",
                    }}
                  >
                    <LocationOnIcon
                      sx={{
                        height: 30,
                        width: 30,
                        color:
                          selectedAddress?.id === address.id
                            ? "#6aa82c"
                            : "white",
                      }}
                    />
                  </Box>
                  <Stack spacing={0} justify="center">
                    <Text
                      size={"xl"}
                      fw={600}
                      style={{
                        color:
                          selectedAddress?.id === address.id
                            ? "white"
                            : "black",
                      }}
                    >
                      {address.name}
                    </Text>
                    <Text
                      style={{
                        color:
                          selectedAddress?.id === address.id
                            ? "white"
                            : "black",
                      }}
                    >
                      {address.location}, {address.city}
                    </Text>
                  </Stack>
                </Flex>
                {address.setAsDefault ? (
                  <Badge size={"md"} fw={600} color="green">
                    Default
                  </Badge>
                ) : (
                  <Button
                    variant="outline"
                    color="blue"
                    radius="sm"
                    onClick={() => {
                      setDefaultAddress({
                        variables: {
                          setDefaultAddressId: address.id,
                        },
                      });
                    }}
                  >
                    Set as Default
                  </Button>
                )}
              </Flex>
            </Paper>
          ))}
          <Flex>
            <Button
              variant="outline"
              color="green"
              radius="sm"
              mx={"auto"}
              onClick={() => setMode("add")}
            >
              Add New Address
            </Button>
          </Flex>
        </>
      ) : (
        <Paper p={"xl"} my={"xl"} shadow="xs">
          <form onSubmit={form.onSubmit((values) => handleFormSubmit(values))}>
            <Grid columns={12} py={"xs"}>
              <Text
                style={{
                  color: "darkslategray",
                  fontSize: "0.95rem",
                }}
                pb={"xs"}
              >
                Shipping Address
              </Text>
              <SimpleGrid
                cols={2}
                breakpoints={[{ maxWidth: "sm", cols: 1 }]}
                style={{
                  width: "100%",
                }}
                spacing={"xl"}
                mt={"xs"}
              >
                <TextInput
                  placeholder="Address Name"
                  radius="sm"
                  styles={(theme) => ({
                    input: {
                      "&:focus-within": {
                        borderColor: theme.colors.green[7],
                      },
                      border: "1px solid #C7C6C1",
                    },
                  })}
                  {...form.getInputProps("name")}
                />
                <TextInput
                  placeholder="Location"
                  radius="sm"
                  styles={(theme) => ({
                    input: {
                      "&:focus-within": {
                        borderColor: theme.colors.green[7],
                      },
                      border: "1px solid #C7C6C1",
                    },
                  })}
                  {...form.getInputProps("location")}
                />
                <TextInput
                  placeholder="City"
                  radius="sm"
                  styles={(theme) => ({
                    input: {
                      "&:focus-within": {
                        borderColor: theme.colors.green[7],
                      },
                      border: "1px solid #C7C6C1",
                    },
                  })}
                  {...form.getInputProps("city")}
                />

                <Checkbox
                  color="green"
                  label="Set as Default"
                  {...form.getInputProps("setAsDefault")}
                />
              </SimpleGrid>

              <Button
                variant="outline"
                color="green"
                radius="sm"
                mt={"lg"}
                fullWidth
                type="submit"
              >
                Add Address
              </Button>
              <Button
                variant="outline"
                color="red"
                radius="sm"
                mt={"lg"}
                fullWidth
                onClick={() => setMode("select")}
              >
                Cancel
              </Button>
            </Grid>
          </form>
        </Paper>
      )}
    </Container>
  );
};

export default ShippingDetails;
