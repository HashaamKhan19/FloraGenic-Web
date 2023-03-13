import {
  Button,
  Center,
  Container,
  Grid,
  Image,
  Paper,
  Select,
  Stack,
  Text,
  TextInput,
  Textarea,
} from '@mantine/core'
import React, { useState } from 'react'

const ContactUs = () => {
  return (
    <Container size={'xl'} pt={'xl'} pb={'xl'}>
      <Center mt={'xl'}>
        <Stack spacing={'xs'}>
          <Text weight={600} size={'2rem'}>
            Have some Troubles?
          </Text>
          <Text weight={525} size={'1.5rem'} align="center">
            Contact Us
          </Text>
        </Stack>
      </Center>

      <Grid mt={'xs'}>
        <Grid.Col md={6}>
          <Image src={'/icons/iconMail.png'} width={500} height={500} />
        </Grid.Col>
        <Grid.Col md={6}>
          <Stack pt={'xl'} spacing={'lg'}>
            <TextInput
              placeholder="hashaam"
              label="Username"
              required
              variant="filled"
              mt={'xl'}
              radius={'md'}
              size="md"
              styles={(theme) => ({
                label: {
                  color: 'darkslategray',
                  fontWeight: 425,
                  marginLeft: '4px',
                },
                input: {
                  '&:focus-within': {
                    borderColor: theme.colors.green[7],
                  },
                  border: '1px solid lightgray',
                },
              })}
            />
            <TextInput
              placeholder="something@gmail.com"
              label="Email Address"
              required
              variant="filled"
              radius={'md'}
              size="md"
              styles={(theme) => ({
                label: {
                  color: 'darkslategray',
                  fontWeight: 425,
                  marginLeft: '4px',
                },
                input: {
                  '&:focus-within': {
                    borderColor: theme.colors.green[7],
                  },
                  border: '1px solid lightgray',
                },
              })}
            />

            <Select
              label="Select Help Type"
              required
              variant="filled"
              radius={'md'}
              size="md"
              styles={(theme) => ({
                label: {
                  color: 'darkslategray',
                  fontWeight: 425,
                  marginLeft: '4px',
                },
                input: {
                  '&:focus-within': {
                    borderColor: theme.colors.green[7],
                  },
                  border: '1px solid lightgray',
                },
                item: {
                  '&[data-selected]': {
                    '&, &:hover': {
                      backgroundColor: '#62A82C',
                      color: '#fff',
                    },
                  },
                },
              })}
              clearable
              data={[
                { label: 'Feedback', value: 'Help Type 1' },
                { label: 'Bug Report', value: 'Help Type 2' },
                { label: 'Feature Request', value: 'Help Type 3' },
              ]}
              placeholder="Choose"
            />
            <Textarea
              placeholder="Write your message here..."
              label="Message"
              required
              variant="filled"
              radius={'md'}
              size="md"
              styles={(theme) => ({
                label: {
                  color: 'darkslategray',
                  fontWeight: 425,
                  marginLeft: '4px',
                },
                input: {
                  '&:focus-within': {
                    borderColor: theme.colors.green[7],
                  },
                  border: '1px solid lightgray',
                },
              })}
              minRows={5}
            />
            <Button
              color="green"
              variant="filled"
              radius={'md'}
              size="md"
              styles={(theme) => ({
                button: {
                  '&:hover': {
                    backgroundColor: theme.colors.green[7],
                  },
                },
              })}
            >
              Submit
            </Button>
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default ContactUs
