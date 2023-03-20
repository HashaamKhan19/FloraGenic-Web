import { gql, useMutation, useQuery } from '@apollo/client'
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
import { useMediaQuery } from '@mantine/hooks'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

const ADD_COMPLAINT = gql`
  mutation Mutation($data: ComplaintCreateInput!) {
    complaintCreate(data: $data) {
      name
      email
      type
      description
      title
    }
  }
`

const ContactUs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [title, setTitle] = useState('')
  const [helpType, setHelpType] = useState('')
  const [message, setMessage] = useState('')

  const [addComplaint, { data, loading, error }] = useMutation(ADD_COMPLAINT, {
    variables: {
      data: {
        name: name,
        email: email,
        type: helpType,
        description: message,
        title: title,
      },
    },
    onCompleted: () => {
      toast.success('Complaint Added Successfully')
      setName('')
      setEmail('')
      setTitle('')
      setHelpType('')
      setMessage('')
    },
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name || !email || !title || !helpType || !message) {
      toast.error('Please fill all the fields')
      return
    }
    addComplaint()
  }

  const match768 = useMediaQuery('(max-width: 768px)')

  return (
    <Container size={'xl'} pt={'xl'} pb={'xl'}>
      <Center mt={'xl'}>
        <Stack spacing={'xs'}>
          <Text weight={600} size={'2rem'} color="darkslategray">
            Have some Troubles?
          </Text>
          <Text
            weight={500}
            size={'1.5rem'}
            align="center"
            color="darkslategray"
          >
            Contact Us
          </Text>
        </Stack>
      </Center>

      <Grid mt={'xs'}>
        <Grid.Col md={6} hidden={match768} pt={'xl'}>
          <Center pt={'xl'}>
            <Image src={'/icons/iconMail.png'} width={500} height={500} />
          </Center>
        </Grid.Col>
        <Grid.Col md={6}>
          <form onSubmit={handleSubmit}>
            <Stack pt={'xl'} spacing={'lg'}>
              <TextInput
                placeholder="hashaam"
                label="Name"
                required
                variant="filled"
                mt={'xl'}
                radius={'md'}
                autoComplete="off"
                size="md"
                onChange={(e) => setName(e.target.value)}
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
                placeholder="janedoe@gmail.com"
                label="Email Address"
                required
                variant="filled"
                radius={'md'}
                size="md"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
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
                placeholder="subject..."
                label="Title"
                required
                variant="filled"
                radius={'md'}
                size="md"
                autoComplete="off"
                onChange={(e) => setTitle(e.target.value)}
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
                value={helpType}
                onChange={setHelpType}
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
                  { label: 'Feedback', value: 'Feedback' },
                  { label: 'Complaint', value: 'Complaint' },
                  { label: 'Bug Report', value: 'Bug' },
                  { label: 'Suggestion', value: 'Suggestion' },
                ]}
                placeholder="Choose"
              />
              <Textarea
                placeholder="Write your message here..."
                label="Message"
                required
                variant="filled"
                radius={'md'}
                minLength={10}
                autoComplete="off"
                size="md"
                onChange={(e) => setMessage(e.target.value)}
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
                type="submit"
                loading={loading}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default ContactUs
