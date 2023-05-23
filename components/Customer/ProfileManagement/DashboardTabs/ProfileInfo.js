import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Center,
  Grid,
  Group,
  Input,
  Modal,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Tooltip,
  createStyles,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { React, useContext, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { AuthContext } from "../../../../context/authContext";
import { useForm } from "@mantine/form";
import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  gql,
  useMutation,
} from "@apollo/client";
import { toast } from "react-hot-toast";

const useStyles = createStyles(() => ({
  title: {
    color: "darkslategray",
    fontWeight: 500,
    fontSize: "16px",
  },
  text: {
    color: "gray",
    fontWeight: 400,
    fontSize: "14px",
    maxWidth: "230px",
  },
}));

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

const UPDATE_PROFILE = gql`
  mutation UpdateProfile($details: updateProfileInput!) {
    updateProfile(details: $details) {
      firstName
      lastName
      phoneNumber
      gender
      image
    }
  }
`;

const ProfileInfo = ({ ordersLength }) => {
  const { classes } = useStyles();
  const match600 = useMediaQuery("(max-width: 600px)");
  const match1000 = useMediaQuery("(max-width: 1100px)");

  const { user, setUser } = useContext(AuthContext);
  console.log(user);

  const [opened, setOpened] = useState(false);
  const [editOpened, setEditOpened] = useState(false);

  const [updateProfile, { loading }] = useMutation(UPDATE_PROFILE, {
    client,
    onCompleted: (data) => {
      setUser({ ...user, details: data.updateProfile });
      toast.success("Profile updated successfully");
      setEditOpened(false);
    },
    onError: (error) => {
      toast.error("Error updating profile");
    },
  });

  const form = useForm({
    initialValues: {
      firstName: user?.details?.firstName,
      lastName: user?.details?.lastName,
      email: user?.email,
      phoneNumber: user?.details?.phoneNumber,
    },
    validate: {
      firstName: (value) =>
        value.trim().length >= 3
          ? null
          : "First name must be at least 3 characters long",
      lastName: (value) =>
        value.trim().length >= 3
          ? null
          : "Last name must be at least 3 characters long",
      phoneNumber: (value) =>
        /^\+92 3\d{2} \d{7}$/.test(value.trim())
          ? null
          : "Phone number must be in the format +92 3XX XXXXXXX",
    },
  });

  const onSubmit = (values) => {
    updateProfile({
      variables: {
        details: {
          firstName: values.firstName,
          lastName: values.lastName,
          phoneNumber: values.phoneNumber,
        },
      },
    });
  };

  return (
    <>
      <Group position="apart" mt={match1000 ? "xl" : "0"}>
        <Group spacing={"xs"}>
          <BsFillPersonFill size={22} color="#62A82C" />
          <Text
            style={{
              fontWeight: 500,
              fontSize: "24px",
              color: "darkslategray",
            }}
          >
            My Profile
          </Text>
        </Group>

        <Button
          variant="light"
          c={"#62A82C"}
          onClick={() => setEditOpened(true)}
        >
          <Text weight={400}>Edit Profile</Text>
        </Button>
      </Group>

      <Grid>
        <Grid.Col md={7}>
          <Paper p={"lg"} mt={"xl"} shadow="xs" radius={"md"}>
            <Group position="apart">
              <Avatar
                size={"lg"}
                radius={"xl"}
                src={user?.details?.image}
                alt="https://i.pravatar.cc/300"
              />
              {!match600 && (
                <Stack spacing={"xs"}>
                  <Text className={classes.title}>Username</Text>
                  <Text className={classes.text} truncate>
                    {user?.details?.firstName + " " + user?.details?.lastName ||
                      "No Name"}
                  </Text>
                </Stack>
              )}
              {match600 && (
                <ActionIcon onClick={() => setOpened(true)}>
                  <AiOutlineEye size={22} color="#62A" />
                </ActionIcon>
              )}
              <Stack spacing={"xs"}>
                <Text className={classes.title}>Email Address</Text>
                <Text className={classes.text} truncate>
                  {user?.email || "No Email"}
                </Text>
              </Stack>
            </Group>
          </Paper>
        </Grid.Col>
        <Grid.Col md={5}>
          <Paper p={"lg"} mt={"xl"} shadow="xs" radius={"md"}>
            <Group position="apart">
              <Stack spacing={"xs"}>
                <Text className={classes.title}>Total Orders</Text>
                <Text className={classes.text}>{ordersLength}</Text>
              </Stack>
              <Stack spacing={"xs"}>
                <Text className={classes.title}>Total Spent</Text>
                <Text className={classes.text}>
                  $ {user?.details?.userDetails?.totalSpent || "Null"}
                </Text>
              </Stack>
            </Group>
          </Paper>
        </Grid.Col>
      </Grid>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Profile Details"
        transition={"fade"}
        transitionDuration={700}
        transitionTimingFunction="ease"
        exitTransitionDuration={700}
        centered
      >
        <Stack>
          <Center mb={"xl"}>
            <Avatar
              size={150}
              radius={"50%"}
              src={user?.details?.image}
              alt="https://i.pravatar.cc/300"
            />
          </Center>
          <Group position="apart">
            <Text className={classes.title}>Username</Text>
            <Text className={classes.text}>
              {user?.details?.firstName + " " + user?.details?.lastName ||
                "No Name"}
            </Text>
          </Group>
          <Group position="apart">
            <Text className={classes.title}>Email Address</Text>
            <Text className={classes.text}>{user?.email || "No Email"}</Text>
          </Group>
          <Group position="apart">
            <Text className={classes.title}>Phone Number</Text>
            <Text className={classes.text}>
              {user?.details?.phoneNumber || "Nill"}
            </Text>
          </Group>
          <Group position="apart">
            <Text className={classes.title}>Total Orders</Text>
            <Text className={classes.text}>{ordersLength}</Text>
          </Group>
          <Group position="apart">
            <Text className={classes.title}>Total Spent</Text>
            <Text className={classes.text}>
              $ {user?.details?.userDetails?.totalSpent || "Null"}
            </Text>
          </Group>
        </Stack>
      </Modal>

      <Modal
        opened={editOpened}
        onClose={() => setEditOpened(false)}
        transition={"fade"}
        transitionDuration={700}
        transitionTimingFunction="ease"
        exitTransitionDuration={700}
        centered
        withCloseButton={false}
      >
        <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
          <Center>
            <Avatar
              size={180}
              radius={"50%"}
              src={user?.details?.image}
              alt="https://i.pravatar.cc/300"
            />
          </Center>
          <Stack spacing={"xs"}>
            <TextInput
              label="First Name"
              styles={(theme) => ({
                input: {
                  "&:focus-within": {
                    borderColor: theme.colors.green[7],
                  },
                },
              })}
              {...form.getInputProps("firstName")}
            />
            <TextInput
              label="Last Name"
              styles={(theme) => ({
                input: {
                  "&:focus-within": {
                    borderColor: theme.colors.green[7],
                  },
                },
              })}
              {...form.getInputProps("lastName")}
            />
            <TextInput
              label="Email"
              styles={(theme) => ({
                input: {
                  "&:focus-within": {
                    borderColor: theme.colors.green[7],
                  },
                },
              })}
              disabled
              {...form.getInputProps("email")}
            />
            <TextInput
              label="Phone Number"
              styles={(theme) => ({
                input: {
                  "&:focus-within": {
                    borderColor: theme.colors.green[7],
                  },
                },
              })}
              {...form.getInputProps("phoneNumber")}
            />
          </Stack>
          <Group position="right" pt={"sm"}>
            <Button
              style={{
                backgroundColor: "#000",
                color: "#fff",
              }}
              loading={loading}
              onClick={() => setEditOpened(false)}
            >
              <Text weight={400}>Cancel</Text>
            </Button>
            <Button
              style={{
                backgroundColor: "#62A82C",
                color: "#fff",
              }}
              loading={loading}
              type="submit"
            >
              <Text weight={400}>Save</Text>
            </Button>
          </Group>
        </form>
      </Modal>
    </>
  );
};

export default ProfileInfo;
