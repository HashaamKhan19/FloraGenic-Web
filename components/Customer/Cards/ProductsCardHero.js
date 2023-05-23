import {
  createStyles,
  Card,
  Image,
  ActionIcon,
  Group,
  Text,
  Avatar,
  Badge,
  Stack,
  Box,
} from "@mantine/core";
import { useContext } from "react";
import { FiHeart } from "react-icons/fi";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { ShopContext } from "../../../context/shopContextProvider";

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 18,
  },

  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    //   marginTop: theme.spacing.xs,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}));

export default function ProductsCardHero({ heart, data }) {
  const { classes, theme } = useStyles();

  const { addToCart } = useContext(ShopContext);

  return (
    <Card
      withBorder
      p="lg"
      radius="md"
      sx={{
        maxHeight: 400,
        transition: "all 0.5s ease",
        ":hover": {
          border: "1px solid #62A82C",
          boxShadow: "0 0 10px 0 rgba(0,0,0,0.1)",
        },
      }}
    >
      <Card.Section mb="sm">
        <Image
          src={data?.images[0] || "no image"}
          alt="Product image"
          height={190}
          style={{
            position: "relative",
          }}
        />
        <Badge
          color="green"
          style={{
            position: "absolute",
            top: 10,
            right: 10,
          }}
        >
          {data?.category?.name}
        </Badge>
      </Card.Section>

      <Text weight={600} className={classes.title} mt="xs">
        {data?.name}
      </Text>

      <Group noWrap spacing={"xs"}>
        <Text
          color="red"
          weight={600}
          mb={0}
          my={"xs"}
          style={{
            fontSize: 18,
          }}
          strikethrough
        >
          Rs. {data?.retailPrice + 100}
        </Text>

        <Text
          color="red"
          weight={600}
          mb={0}
          my={"xs"}
          style={{
            fontSize: 18,
          }}
        >
          Rs. {data?.retailPrice}
        </Text>
      </Group>
      <Card.Section className={classes.footer}>
        <Group position="apart">
          <Text size="xs" color="dimmed">
            {data?.sold} people bought this
          </Text>
          <Group spacing={"xs"}>
            <ActionIcon
              color="blue"
              variant="subtle"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                addToCart(data?.id, 1);
              }}
              disabled={data?.stock === 0}
            >
              <MdOutlineAddShoppingCart size={16} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  );
}
