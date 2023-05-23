import { Button, Group, Modal, TextInput } from "@mantine/core";
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  gql,
  useMutation,
} from "@apollo/client";
import { useForm } from "@mantine/form";

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

const ADD_ADDRESS = gql`
  mutation Mutation($input: AddressInput!) {
    addressCreate(input: $input) {
      name
      city
      location
      pin
      setAsDefault
    }
  }
`;

const AddAddress = ({ addOpened, setAddOpened }) => {
  const form = useForm({
    initialValues: {
      name: "",
      location: "",
      city: "",
    },
  });

  const [input] = useMutation(
    ADD_ADDRESS,
    { client },
    {
      onCompleted: () => {
        console.log("ADDRESS Added");
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const handleSubmit = (values) => {
    console.log("handle submit reached.");
    input({
      variables: {
        input: {
          name: values.name,
          location: values.location,
          city: values.city,
          setAsDefault: false,
          pin: "asd",
        },
      },
    });
  };

  return (
    <Modal
      opened={addOpened}
      onClose={() => setAddOpened(false)}
      title="Enter Address Details"
      transition={"fade"}
      transitionDuration={700}
      transitionTimingFunction="ease"
      exitTransitionDuration={700}
      centered
    >
      <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
        <TextInput
          label="Address Name"
          placeholder="Enter name of address"
          styles={(theme) => ({
            input: {
              "&:focus-within": {
                borderColor: theme.colors.green[7],
              },
            },
          })}
          {...form.getInputProps("name")}
        />
        <TextInput
          mt={"md"}
          label="Address City"
          placeholder="Enter City of address"
          styles={(theme) => ({
            input: {
              "&:focus-within": {
                borderColor: theme.colors.green[7],
              },
            },
          })}
          {...form.getInputProps("city")}
        />
        <TextInput
          mt={"md"}
          label="Address Location"
          placeholder="Enter location of address"
          styles={(theme) => ({
            input: {
              "&:focus-within": {
                borderColor: theme.colors.green[7],
              },
            },
          })}
          {...form.getInputProps("location")}
        />
        <Group position="right" mt={"xs"}>
          <Button
            style={{
              backgroundColor: "#111",
              color: "white",
            }}
            onClick={() => setAddOpened(false)}
          >
            Cancel
          </Button>
          <Button
            style={{
              backgroundColor: "#62A82C",
              color: "white",
            }}
            type="submit"
          >
            Save
          </Button>
        </Group>
      </form>
    </Modal>
  );
};
export default AddAddress;
