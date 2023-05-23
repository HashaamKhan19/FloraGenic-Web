import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  gql,
  useMutation,
} from "@apollo/client";
import { Button, Group, Modal, TextInput } from "@mantine/core";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const UPDATE_ADDRESS = gql`
  mutation AddressUpdate($addressUpdateId: ID!, $input: AddressUpdateInput!) {
    addressUpdate(id: $addressUpdateId, input: $input) {
      id
      city
      location
      name
      pin
      setAsDefault
      userID
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

const EditAddress = ({
  editOpened,
  setEditOpened,
  selectedAddress,
  setAddresses,
}) => {
  const [updateAddress, { loading }] = useMutation(UPDATE_ADDRESS, {
    client,
    onCompleted: (data) => {
      console.log(data);
      setAddresses(data.addressUpdate);
      toast.success("Address updated successfully");
      setEditOpened(false);
    },
    onError: (error) => {
      toast.error("Error updating address");
      console.log(error);
    },
  });

  const [name, setName] = useState(selectedAddress?.name);
  const [location, setLocation] = useState(selectedAddress?.location);
  const [city, setCity] = useState(selectedAddress?.city);

  useEffect(() => {
    setName(selectedAddress?.name);
    setLocation(selectedAddress?.location);
    setCity(selectedAddress?.city);
  }, [selectedAddress]);

  return (
    <Modal
      opened={editOpened}
      onClose={() => setEditOpened(false)}
      title="Edit Address Details"
      transition={"fade"}
      transitionDuration={700}
      transitionTimingFunction="ease"
      exitTransitionDuration={700}
      centered
    >
      <TextInput
        label="Address Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter name of address"
        styles={(theme) => ({
          input: {
            "&:focus-within": {
              borderColor: theme.colors.green[7],
            },
          },
        })}
      />
      <TextInput
        mt={"md"}
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        label="Address Location"
        placeholder="Enter location of address"
        styles={(theme) => ({
          input: {
            "&:focus-within": {
              borderColor: theme.colors.green[7],
            },
          },
        })}
      />
      <TextInput
        mt={"md"}
        value={city}
        onChange={(e) => setCity(e.target.value)}
        label="Address City"
        placeholder="Enter city of address"
        styles={(theme) => ({
          input: {
            "&:focus-within": {
              borderColor: theme.colors.green[7],
            },
          },
        })}
      />
      <Group position="right" mt={"xs"}>
        <Button
          style={{
            backgroundColor: "#111",
            color: "white",
          }}
          loading={loading}
          onClick={() => setEditOpened(false)}
        >
          Cancel
        </Button>
        <Button
          style={{
            backgroundColor: "#62A82C",
            color: "white",
          }}
          loading={loading}
          onClick={() => {
            updateAddress({
              variables: {
                addressUpdateId: selectedAddress?.id,
                input: {
                  name,
                  location,
                  city,
                },
              },
            });
          }}
        >
          Save
        </Button>
      </Group>
    </Modal>
  );
};
export default EditAddress;
