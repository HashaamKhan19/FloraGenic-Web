import { Button, Group, Modal, Select, TextInput } from "@mantine/core";

const EditPayment = ({ editOpened, setEditOpened }) => {
  return (
    <Modal
      opened={editOpened}
      onClose={() => setEditOpened(false)}
      title="Edit Payment Details"
      transition={"fade"}
      transitionDuration={700}
      transitionTimingFunction="ease"
      exitTransitionDuration={700}
      centered
    >
      <Select
        label="Payment Method"
        placeholder="Edit name of Payment Method"
        styles={(theme) => ({
          input: {
            "&:focus-within": {
              borderColor: theme.colors.green[7],
            },
          },
          item: {
            "&[data-selected]": {
              "&, &:hover": {
                backgroundColor: "#62A82C",
              },
            },
          },
        })}
        data={[
          { label: "Visa", value: "visa" },
          { label: "Mastercard", value: "mastercard" },
        ]}
      />
      <TextInput
        mt={"md"}
        label="Card Number"
        placeholder="1234 **** **** ****"
        styles={(theme) => ({
          input: {
            "&:focus-within": {
              borderColor: theme.colors.green[7],
            },
          },
        })}
      />
      <Group noWrap>
        <TextInput
          mt={"md"}
          label="Expiry Date"
          placeholder="12/37"
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
          label="CVV"
          placeholder="123"
          styles={(theme) => ({
            input: {
              "&:focus-within": {
                borderColor: theme.colors.green[7],
              },
            },
          })}
        />
      </Group>
      <Group position="right" mt={"lg"}>
        <Button
          style={{
            backgroundColor: "#111",
            color: "white",
          }}
          onClick={() => setEditOpened(false)}
        >
          Cancel
        </Button>
        <Button
          style={{
            backgroundColor: "#62A82C",
            color: "white",
          }}
        >
          Save
        </Button>
      </Group>
    </Modal>
  );
};
export default EditPayment;
