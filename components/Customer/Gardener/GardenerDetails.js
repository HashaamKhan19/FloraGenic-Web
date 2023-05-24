import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  gql,
  useMutation,
} from "@apollo/client";
import {
  Avatar,
  Button,
  Group,
  Modal,
  Paper,
  Rating,
  Select,
  Skeleton,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import { DateInput, DatePicker } from "@mantine/dates";
import { useForm } from "@mantine/form";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { toast } from "react-hot-toast";
import { BiMap } from "react-icons/bi";
import { GiSuitcase } from "react-icons/gi";
import { IoPaperPlane } from "react-icons/io5";

const HIRE_GARDENER = gql`
  mutation GardenerOrderCreate($data: GardenerOrderCreateInput!) {
    gardenerOrderCreate(data: $data)
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

const GardenerDetails = ({ data, loading, error }) => {
  const match475 = useMediaQuery("(max-width: 475px)");

  const [addOpened, setAddOpened] = React.useState(false);

  const [hireGardener] = useMutation(HIRE_GARDENER, {
    client,
    onCompleted: () => {
      toast.success("Gardener hired successfully");
      setAddOpened(false);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const form = useForm({
    initialValues: {
      date: new Date(),
      requestedTime: "",
      duration: "Hours",
      service: "",
    },
    validate: {
      date: (value) => (value ? null : "Date is required"),
      requestedTime: (value) =>
        /^\d+$/.test(value) && value.trim().length
          ? null
          : "Hiring Duration is required",
      duration: (value) => (value ? null : "Duration is required"),
      service: (value) =>
        value?.trim()?.length ? null : "Service is required",
    },
  });

  const handleSubmit = (values) => {
    hireGardener({
      variables: {
        data: {
          gardener: data?.id,
          date: values.date,
          requestedTime: parseInt(values.requestedTime),
          duration: values.duration,
          service: values.service,
        },
      },
    });
  };

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
      <Avatar
        size={100}
        radius={"50%"}
        style={{
          position: "absolute",
          top: "-50px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        src={data?.image}
      />
      <Group position="apart" noWrap>
        <Stack spacing={"xs"} mt={match475 ? "xl" : ""}>
          <Text
            style={{
              fontSize: "1.5rem",
              fontWeight: 525,
              color: "darkslategray",
            }}
          >
            {data?.firstName + " " + data?.lastName || "Gardener Name"}
          </Text>
          <Group spacing={2}>
            <BiMap />
            <Text
              style={{
                fontSize: "1rem",
                fontWeight: 500,
                color: "darkslategray",
              }}
            >
              {data?.city || "Location"}
            </Text>
          </Group>
          <Group pt={"xs"}>
            {/* <Button
              leftIcon={<IoPaperPlane />}
              radius={'xl'}
              style={{
                backgroundColor: '#62A82C',
              }}
            >
              Message
            </Button> */}
            <Button
              leftIcon={<GiSuitcase size={18} />}
              radius={"xl"}
              style={{
                backgroundColor: "#62A82C",
              }}
              onClick={() => setAddOpened(true)}
            >
              Hire Now
            </Button>
          </Group>
        </Stack>

        <Stack spacing={"xs"} pt={40}>
          <Group spacing={2}>
            <Rating value={data?.rating} size="md" readOnly />
          </Group>
          <Group>
            <Text
              style={{
                fontSize: "1rem",
                fontWeight: 500,
                color: "darkslategray",
              }}
            >
              Pricing:
            </Text>
            <Text
              style={{
                fontSize: "1rem",
                fontWeight: 500,
                color: "#D92228",
              }}
            >
              Rs. {data?.price || "Price"} {data?.duration || ""}
            </Text>
          </Group>

          <Group>
            <Text
              style={{
                fontSize: "14px",
                fontWeight: 400,
                color: "darkslategray",
              }}
            >
              Experience:
            </Text>
            <Text
              style={{
                fontSize: "14px",
                fontWeight: 400,
                color: "#D92228",
              }}
            >
              {data?.experience || "Experience"} years
            </Text>
          </Group>
        </Stack>
      </Group>
      <Modal
        opened={addOpened}
        onClose={() => setAddOpened(false)}
        title={`Hire ${data?.firstName} ${data?.lastName}`}
        transition={"fade"}
        transitionDuration={700}
        transitionTimingFunction="ease"
        exitTransitionDuration={700}
        centered
      >
        <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
          <DatePicker
            minDate={new Date()}
            label="Hire Date"
            placeholder="Select date"
            styles={(theme) => ({
              input: {
                "&:focus-within": {
                  borderColor: theme.colors.green[7],
                },
              },
            })}
            {...form.getInputProps("date")}
          />
          <TextInput
            mt={"md"}
            label="Hiring Duration"
            placeholder="Enter Hiring Duration"
            styles={(theme) => ({
              input: {
                "&:focus-within": {
                  borderColor: theme.colors.green[7],
                },
              },
            })}
            {...form.getInputProps("requestedTime")}
          />
          <Select
            mt={"md"}
            label="Hours / Days"
            placeholder="Select Hours / Days"
            styles={(theme) => ({
              input: {
                "&:focus-within": {
                  borderColor: theme.colors.green[7],
                },
              },
            })}
            data={[
              { value: "Hours", label: "Hours" },
              { value: "Days", label: "Days" },
            ]}
            {...form.getInputProps("duration")}
          />
          <TextInput
            mt={"md"}
            label="Service"
            placeholder="Enter Service Name"
            styles={(theme) => ({
              input: {
                "&:focus-within": {
                  borderColor: theme.colors.green[7],
                },
              },
            })}
            {...form.getInputProps("service")}
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
    </>
  );
};

export default GardenerDetails;
