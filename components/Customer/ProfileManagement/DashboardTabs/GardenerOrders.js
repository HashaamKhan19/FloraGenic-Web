import {
  ActionIcon,
  Badge,
  Center,
  Group,
  Loader,
  ScrollArea,
  Space,
  Table,
  Text,
} from "@mantine/core";
import { React, useState } from "react";
import { BsArrowRight, BsBagCheckFill } from "react-icons/bs";
import OrderDetails from "./OrderDetails";
import { useMediaQuery } from "@mantine/hooks";
import {
  gql,
  useQuery,
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  HttpLink,
} from "@apollo/client";

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

const GET_GARDENER_ORDERS = gql`
  query GardenerOrders {
    gardenerOrders {
      id
      gardener {
        id
        firstName
        lastName
        gender
        phoneNumber
        city
        CNIC
        price
        duration
        rating
        experience
        image
        createdAt
        updatedAt
      }
      service
      date
      requestedTime
      duration
      status
      totalPrice
      createdAt
      updatedAt
    }
  }
`;

const GardenerOrders = ({ ordersLength, setOrdersLength }) => {
  const [orderDetails, setOrderDetails] = useState(null);
  const match768 = useMediaQuery("(max-width: 768px)");

  const { data, loading, error } = useQuery(GET_GARDENER_ORDERS, { client });

  setOrdersLength(data?.orders?.length);

  const rows = loading ? (
    <tr>
      <td colSpan={12}>
        <Center>
          <Loader variant="bars" color="green" />
        </Center>
      </td>
    </tr>
  ) : error ? (
    <Text
      style={{
        fontWeight: 500,
        fontSize: "18px",
        color: "darkslategray",
      }}
    >
      Error fetching data
    </Text>
  ) : data?.gardenerOrders?.length === 0 ? (
    <tr>
      <td colSpan={12}>
        <Center>
          <Text
            style={{
              fontWeight: 500,
              fontSize: "18px",
              color: "darkslategray",
              userSelect: "none",
            }}
          >
            No orders yet
          </Text>
        </Center>
      </td>
    </tr>
  ) : (
    data?.gardenerOrders?.map((item) => (
      <tr
        key={item.id}
        onClick={() => setOrderDetails(item)}
        style={{
          cursor: "pointer",
        }}
      >
        <td>
          <Text
            style={{
              fontWeight: 600,
              color: "darkslategray",
              maxWidth: "100px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {item?.id.slice(-6)}
          </Text>
        </td>

        <td>
          <Badge
            color={
              item.status === "Pending"
                ? "cyan"
                : item.status === "Delivered"
                ? "green"
                : item.status === "Cancelled"
                ? "red"
                : "blue"
            }
            variant={"light"}
          >
            {item?.status}
          </Badge>
        </td>
        <td>
          <Text
            style={{
              fontWeight: 500,
              color: "darkslategray",
            }}
          >
            {new Date(parseInt(item?.date)).toLocaleDateString("en-US", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </Text>
        </td>
        <td>
          <Text
            style={{
              fontWeight: 500,
              color: "darkslategray",
            }}
          >
            Rs.{item?.totalPrice}
          </Text>
        </td>
        <td>
          <Group spacing={0} position="right">
            <ActionIcon
              onClick={(e) => {
                setOrderDetails(item);
              }}
            >
              <BsArrowRight
                size={20}
                style={{
                  color: "darkslategray",
                }}
              />
            </ActionIcon>
          </Group>
        </td>
      </tr>
    ))
  );

  return (
    <>
      {!orderDetails ? (
        <>
          <Group spacing={"xs"}>
            <BsBagCheckFill size={22} color="#62A82C" />
            <Text
              style={{
                fontWeight: 500,
                fontSize: "24px",
                color: "darkslategray",
              }}
            >
              My Orders
            </Text>
          </Group>

          <Space h="xs" />

          <ScrollArea>
            <Table
              sx={{ minWidth: 800 }}
              mt={"sm"}
              verticalSpacing="sm"
              highlightOnHover
            >
              <thead>
                <tr>
                  <th
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      color: "gray",
                    }}
                  >
                    Order #
                  </th>
                  <th
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      color: "gray",
                    }}
                  >
                    Status
                  </th>
                  <th
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      color: "gray",
                    }}
                  >
                    Scheduled Date
                  </th>
                  <th
                    style={{
                      fontWeight: 500,
                      fontSize: "16px",
                      color: "gray",
                    }}
                  >
                    Total
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </Table>
          </ScrollArea>
        </>
      ) : (
        <OrderDetails orderDetails={orderDetails} />
      )}
    </>
  );
};

export default GardenerOrders;
