import { gql, useQuery } from '@apollo/client'
import ViewNursery from '../../../components/Customer/Nursery/ViewNursery'
import { useRouter } from 'next/router'

const GET_NURSERY = gql`
  query Query($nurseryId: ID!) {
    nursery(id: $nurseryId) {
      address
      closingHours
      createdAt
      details
      email
      id
      images
      name
      nurseryOwnerID
      openingHours
      phoneNumber
      rating
      updatedAt
      website
      nurseryOwner {
        firstName
        lastName
        phoneNumber
      }
      products {
        category {
          name
        }
        name
        nursery {
          name
          details
          images
        }
        overallRating
        retailPrice
        sold
        stock
        images
        id
      }
    }
  }
`

export default function ViewSpecificNursery() {
  const router = useRouter()
  const { id } = router.query

  const { loading, error, data } = useQuery(GET_NURSERY, {
    variables: { nurseryId: id },
  })

  return (
    <div
      style={{
        backgroundColor: '#F6F9FC',
      }}
    >
      <ViewNursery data={data?.nursery} loading={loading} error={error} />
    </div>
  )
}
