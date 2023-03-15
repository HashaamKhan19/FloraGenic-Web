import React from 'react'
import ProductPage from '../../../components/Customer/Product/ProductPage'
import { useRouter } from 'next/router'
import { gql, useQuery } from '@apollo/client'

const GET_PRODUCT = gql`
  query ExampleQuery($productId: ID!) {
    product(id: $productId) {
      id
      nurseryID
      nursery {
        id
        nurseryOwnerID
        name
        details
        blockedStatus
        openingHours
        closingHours
        rating
        address
        phoneNumber
        email
        website
        images
        createdAt
        updatedAt
      }
      reviews {
        createdAt
        likes
        rating
        review
        customerDetails {
          details {
            ... on Customer {
              firstName
              lastName
              image
            }
          }
        }
      }
      name
      description
      category {
        name
      }
      hidden
      retailPrice
      wholesalePrice
      stock
      sold
      images
      overallRating
      tags
      createdAt
      updatedAt
    }
  }
`

export default function ViewProduct() {
  const router = useRouter()
  const { id } = router.query

  const { loading, error, data } = useQuery(GET_PRODUCT, {
    variables: { productId: id },
  })

  return (
    <div
      style={{
        backgroundColor: '#F6F9FC',
      }}
    >
      <ProductPage data={data} loading={loading} error={error} />
    </div>
  )
}
