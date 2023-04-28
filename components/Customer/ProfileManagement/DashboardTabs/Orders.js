import {
  ActionIcon,
  Anchor,
  Avatar,
  Badge,
  Box,
  Burger,
  Group,
  Pagination,
  Paper,
  ScrollArea,
  Space,
  Table,
  Text,
  createStyles,
} from "@mantine/core";
import Link from "next/link";
import { React, useState } from "react";
import { BsArrowRight, BsBagCheckFill } from "react-icons/bs";
import OrderDetails from "./OrderDetails";
import { useMediaQuery } from "@mantine/hooks";
import { gql, useQuery } from "@apollo/client";
import ListingPagination from "../../Generic/ListingPagination";

const GET_ORDERS = gql`
  query Query {
    orders {
      id
      orderStatus
      orderingDate
      totalPrice
    }
  }
`;

const Orders = ({ ordersLength, setOrdersLength }) => {
  const [orderDetails, setOrderDetails] = useState(false);
  const match768 = useMediaQuery("(max-width: 768px)");

  const { data, loading, error } = useQuery(GET_ORDERS);

  setOrdersLength(data?.orders?.length);

  const rows = data?.orders?.map((item) => (
    <tr
      key={item.id}
      onClick={() => setOrderDetails(true)}
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
          {item?.id}
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
          {item?.orderStatus}
        </Badge>
      </td>
      <td>
        <Text
          style={{
            fontWeight: 500,
            color: "darkslategray",
          }}
        >
          {new Date(parseInt(item?.orderingDate)).toLocaleDateString("en-US", {
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
          <ActionIcon onClick={() => setOrderDetails(true)}>
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
  ));

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
                    Date Purchased
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
        <OrderDetails />
      )}
    </>
  );
};

export default Orders;
