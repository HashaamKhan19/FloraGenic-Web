import {
  Card,
  Container,
  createStyles,
  Group,
  SimpleGrid,
  Stack,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { AiOutlineDollar } from "react-icons/ai";
import { BiTimer } from "react-icons/bi";
import { BsTruck } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineFactCheck } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

const mockdata = [
  {
    title: "Fast Delivery",
    description: "Start from Rs. 99",
    icon: BsTruck,
  },
  {
    title: "Money Guarantee",
    description: "7 Days Back",
    icon: GiReceiveMoney,
  },
  {
    title: "3 Days",
    description: "For Free Return",
    icon: BiTimer,
  },
  {
    title: "Payment",
    description: "Secure System",
    icon: RiSecurePaymentLine,
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    border: `1px solid ${theme.colors.gray[3]}`,
    transition: "all 0.3s ease",
    "&:hover": {
      transform: "translateY(-10px)",
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
}));

export default function ServiceCards() {
  const match768 = useMediaQuery("(max-width: 768px)");

  const { classes } = useStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="xs"
      radius="md"
      className={classes.card}
      style={{
        height: 100,
        width: match768 ? "100%" : 295,
        border: "1px solid #62a82c",
        boxShadow: "0px 5px 5px 0px #62a82c99",
      }}
    >
      <Group>
        <Group pl={"xs"}>
          <feature.icon size={50} stroke={2} color={"gray"} />
        </Group>
        <Stack spacing={2}>
          <Text
            size="lg"
            style={{
              color: "darkslategray",
              fontWeight: 500,
            }}
          >
            {feature.title}
          </Text>
          <Text
            size="sm"
            style={{
              color: "darkslategray",
              fontWeight: 400,
            }}
          >
            {feature.description}
          </Text>
        </Stack>
      </Group>
    </Card>
  ));
  return (
    <Container size="xl" mt={80} pb={"xl"}>
      <SimpleGrid
        cols={4}
        spacing="xl"
        breakpoints={[
          { maxWidth: 768, cols: 1 },
          { maxWidth: 940, cols: 2 },
          { maxWidth: 1200, cols: 3 },
        ]}
        px={"lg"}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
