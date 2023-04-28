import { gql, useQuery } from "@apollo/client";
import Dashboard from "../../../components/Customer/ProfileManagement/Dashboard";
import { useRouter } from "next/router";

const GET_CUSTOMER = gql`
  query Query($userId: ID!) {
    user(id: $userId) {
      id
      userType
      details {
        ... on Customer {
          firstName
          lastName
          image
          nationality
          gender
          addresses {
            city
            location
            name
          }
          payments {
            cardCVV
            cardExpiryDate
            cardHolderName
            cardNumber
          }
          userDetails {
            email
          }
          phoneNumber
        }
      }
    }
  }
`;

export default function CustomerDashboard() {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(GET_CUSTOMER, {
    variables: { userId: id },
  });

  return (
    <div
      style={{
        backgroundColor: "#F6F9FC",
      }}
    >
      <Dashboard data={data} loading={loading} error={error} />
    </div>
  );
}
