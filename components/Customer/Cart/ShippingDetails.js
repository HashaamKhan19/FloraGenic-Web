import {
  Checkbox,
  Container,
  Grid,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React from "react";

const ShippingDetails = ({ form }) => {
  return (
    <Container size={"xl"} py={"xl"}>
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
                placeholder="Full Name"
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
                placeholder="Email Address"
                radius="sm"
                styles={(theme) => ({
                  input: {
                    "&:focus-within": {
                      borderColor: theme.colors.green[7],
                    },
                    border: "1px solid #C7C6C1",
                  },
                })}
                {...form.getInputProps("email")}
              />
              <TextInput
                placeholder="Phone Number"
                radius="sm"
                styles={(theme) => ({
                  input: {
                    "&:focus-within": {
                      borderColor: theme.colors.green[7],
                    },
                    border: "1px solid #C7C6C1",
                  },
                })}
                {...form.getInputProps("phoneNumber")}
              />
              <TextInput
                placeholder="CNIC"
                radius="sm"
                styles={(theme) => ({
                  input: {
                    "&:focus-within": {
                      borderColor: theme.colors.green[7],
                    },
                    border: "1px solid #C7C6C1",
                  },
                })}
                {...form.getInputProps("cnic")}
              />
              <TextInput
                placeholder="Address"
                radius="sm"
                multiple
                styles={(theme) => ({
                  input: {
                    "&:focus-within": {
                      borderColor: theme.colors.green[7],
                    },
                    border: "1px solid #C7C6C1",
                  },
                })}
                {...form.getInputProps("address")}
              />
            </SimpleGrid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default ShippingDetails;
