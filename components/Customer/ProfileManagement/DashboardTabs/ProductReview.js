import { Button, Group, Modal, Textarea } from '@mantine/core'
import React, { useState } from 'react'

const ProductReview = ({ opened, setOpened }) => {
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => {
          setOpened(false)
        }}
        title="Product Review"
        centered
        transition={'fade'}
        transitionDuration={500}
        transitionTimingFunction="ease"
        exitTransitionDuration={500}
      >
        <Textarea
          label="Review"
          placeholder="Write your review here"
          required
          style={{ width: '100%' }}
          styles={{
            input: {
              '&:focus-within': {
                borderColor: '#62A82C',
              },
            },
          }}
        />
        <Group position="right">
          <Button
            style={{
              backgroundColor: '#111',
              color: 'white',
            }}
            mt={'xs'}
            onClick={() => {
              setOpened(false)
            }}
          >
            Cancel
          </Button>
          <Button
            style={{
              backgroundColor: '#62A82C',
            }}
            mt={'xs'}
          >
            Submit
          </Button>
        </Group>
      </Modal>
    </>
  )
}

export default ProductReview
