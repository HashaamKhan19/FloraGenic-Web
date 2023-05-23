import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  gql,
  useMutation,
} from "@apollo/client";
import { Button, Group, Modal, Text } from "@mantine/core";
import { toast } from "react-hot-toast";

const DELETE_ADDRESS = gql`
  mutation AddressDelete($addressDeleteId: ID!) {
    addressDelete(id: $addressDeleteId) {
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

const DeleteAddress = ({
  deleteOpened,
  setDeleteOpened,
  selectedAddress,
  setAddresses,
}) => {
  const [deleteAddress, { loading }] = useMutation(DELETE_ADDRESS, {
    client,
    onCompleted: (data) => {
      setAddresses(data.addressDelete);
      toast.success("Address deleted successfully");
      setDeleteOpened(false);
    },
    onError: (error) => {
      toast.error("Address deletion failed");
    },
  });

  return (
    <Modal
      opened={deleteOpened}
      onClose={() => setDeleteOpened(false)}
      title="Confirm Deletion"
      transition={"fade"}
      transitionDuration={700}
      transitionTimingFunction="ease"
      exitTransitionDuration={700}
      centered
      styles={{
        title: {
          color: "darkslategray",
          fontWeight: 600,
          fontSize: "20px",
        },
      }}
    >
      <Text>Are you sure you want to delete this address?</Text>
      <Group position="right" mt={"xs"}>
        <Button
          style={{
            backgroundColor: "#62A82C",
            color: "white",
          }}
          loading={loading}
          onClick={() => setDeleteOpened(false)}
        >
          Cancel
        </Button>
        <Button
          style={{
            backgroundColor: "red",
            color: "white",
          }}
          loading={loading}
          onClick={() => {
            deleteAddress({
              variables: {
                addressDeleteId: selectedAddress.id,
              },
            });
          }}
        >
          Delete
        </Button>
      </Group>
    </Modal>
  );
};
export default DeleteAddress;
