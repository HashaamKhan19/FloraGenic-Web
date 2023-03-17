import { Pagination } from '@mantine/core'
import React from 'react'

const ListingPagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  currentPosts,
  filteredData,
}) => {
  const pageNumbers = []

  filteredData?.length > 0 ? (totalPosts = filteredData.length) : totalPosts

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    currentPosts?.length > 0 && (
      <Pagination
        total={pageNumbers.length}
        onChange={(page) => paginate(page)}
        withEdges
        styles={() => ({
          item: {
            '&[data-active]': {
              backgroundColor: '#62A82C',
            },
          },
        })}
      />
    )
  )
}

export default ListingPagination
