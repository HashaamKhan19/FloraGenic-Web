import { Avatar, Group, Rating, Stack, Tabs, Text } from '@mantine/core'
import React from 'react'
import { MdOutlineRateReview } from 'react-icons/md'
import { TbFileDescription } from 'react-icons/tb'
import ProductDescription from './ProductDescription'
import ProductReviews from './ProductReviews'

const ProductTabs = ({ data }) => {
  return (
    <>
      <Tabs defaultValue="description" color="green">
        <Tabs.List>
          <Tabs.Tab
            value="description"
            icon={<TbFileDescription size={14} />}
            style={{
              color: 'darkslategray',
              fontWeight: 600,
            }}
          >
            Description
          </Tabs.Tab>
          <Tabs.Tab
            style={{
              color: 'darkslategray',
              fontWeight: 600,
            }}
            value="reviews"
            icon={<MdOutlineRateReview size={14} />}
          >
            Reviews
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="description" pt="xs">
          <ProductDescription data={data} />
        </Tabs.Panel>

        <Tabs.Panel value="reviews" pt="xs">
          <ProductReviews data={data} />
        </Tabs.Panel>
      </Tabs>
    </>
  )
}

export default ProductTabs
