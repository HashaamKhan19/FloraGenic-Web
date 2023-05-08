import { Button, Group, Modal, TextInput } from "@mantine/core";

const AddAddress = ({ addOpened, setAddOpened }) => {
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
      />
      <TextInput
        mt={"md"}
        label="Address Details"
        placeholder="Enter details of address"
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
          onClick={() => setAddOpened(false)}
        >
          Cancel
        </Button>
        <Button
          style={{
            backgroundColor: "#62A82C",
            color: "white",
          }}
          onClick={() => setAddOpened(false)}
        >
          Save
        </Button>
      </Group>
    </Modal>
  );
};
export default AddAddress;
