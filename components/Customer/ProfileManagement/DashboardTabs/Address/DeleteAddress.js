import { Button, Group, Modal, Text } from "@mantine/core";

const DeleteAddress = ({ deleteOpened, setDeleteOpened }) => {
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
          onClose={() => setDeleteOpened(false)}
        >
          Cancel
        </Button>
        <Button
          style={{
            backgroundColor: "red",
            color: "white",
          }}
          onClose={() => setDeleteOpened(false)}
        >
          Delete
        </Button>
      </Group>
    </Modal>
  );
};
export default DeleteAddress;
