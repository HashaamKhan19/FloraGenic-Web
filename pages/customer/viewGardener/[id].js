import { useRouter } from 'next/router'
import ViewGardener from '../../../components/Customer/Gardener/ViewGardener'
import { gql, useQuery } from '@apollo/client'

const GET_GARDENER = gql`
  query Gardener($gardenerId: ID!) {
    gardener(id: $gardenerId) {
      city
      duration
      experience
      firstName
      gender
      id
      image
      lastName
      phoneNumber
      price
      rating
      skills {
        name
        id
      }
    }
  }
`

export default function ViewSpecificGardener() {
  const router = useRouter()
  const { id } = router.query

  const { loading, error, data } = useQuery(GET_GARDENER, {
    variables: { gardenerId: id },
  })

  return (
    <div
      style={{
        backgroundColor: '#F6F9FC',
      }}
    >
      <ViewGardener data={data?.gardener} loading={loading} error={error} />
    </div>
  )
}
