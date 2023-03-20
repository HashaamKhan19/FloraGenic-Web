import {
  ActionIcon,
  Button,
  Center,
  Modal,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import FloraGenicLogo from '../../../public/Logo/floraGenic.png'
import React from 'react'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import { AiFillEyeInvisible } from 'react-icons/ai'

const Login = ({ opened, setOpened }) => {
  return (
    <>
      <Modal
        opened={opened}
        onClose={() => {
          setOpened(false)
        }}
        centered
        transition={'fade'}
        transitionDuration={500}
        transitionTimingFunction="ease"
        exitTransitionDuration={500}
        withCloseButton={false}
        radius={'md'}
      >
        <Stack align="center" spacing={2}>
          <Image src={FloraGenicLogo} alt="Logo" width={100} />
          <Text
            style={{
              fontSize: '1rem',
              fontWeight: 525,
              color: 'darkslategray',
            }}
          >
            Welcome to FloraGenic
          </Text>

          <Stack
            spacing={'xs'}
            style={{
              width: '100%',
            }}
            pt={'md'}
          >
            <TextInput
              label="Email Address"
              placeholder="janedoe@gmail.com"
              styles={(theme) => ({
                input: {
                  '&:focus-within': {
                    borderColor: theme.colors.green[7],
                  },
                  ':placeholder-shown': {
                    color: 'darkslategray',
                    fontSize: '0.8rem',
                    fontWeight: 400,
                  },
                },
                label: {
                  fontSize: '0.8rem',
                  color: 'darkslategray',
                },
              })}
              style={{
                width: '100%',
              }}
              size="md"
            />

            <PasswordInput
              label="Password"
              placeholder="********"
              styles={(theme) => ({
                input: {
                  '&:focus-within': {
                    borderColor: theme.colors.green[7],
                  },
                  ':placeholder-shown': {
                    color: 'darkslategray',
                    fontSize: '0.8rem',
                    fontWeight: 400,
                  },
                },
                label: {
                  fontSize: '0.8rem',
                  color: 'darkslategray',
                },
              })}
              style={{
                width: '100%',
              }}
              size="md"
            />

            <Button
              style={{
                backgroundColor: '#62A82C',
                color: 'white',
              }}
              fullWidth
              mt={'md'}
              size="md"
              styles={{
                label: {
                  fontSize: '0.9rem',
                  fontWeight: 500,
                },
              }}
            >
              Login
            </Button>

            <Center>
              <Text
                style={{
                  fontSize: '0.8rem',
                  color: 'darkslategray',
                  fontWeight: 500,
                }}
              >
                or
              </Text>
            </Center>

            <Button
              style={{
                background: 'rgb(66, 133, 244)',
                color: 'white',
              }}
              fullWidth
              size="md"
              leftIcon={
                <ActionIcon
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                  }}
                >
                  <FcGoogle />
                </ActionIcon>
              }
              styles={{
                label: {
                  fontSize: '0.8rem',
                  fontWeight: 500,
                },
              }}
            >
              Continue with Google
            </Button>

            <Center pt={2}>
              <Text
                style={{
                  fontSize: '0.8rem',
                  color: 'darkslategray',
                  fontWeight: 500,
                }}
              >
                Don't have an account?{' '}
              </Text>
              <Text
                style={{
                  color: '#62A82C',
                  fontWeight: 500,
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                }}
              >
                &nbsp; Sign Up
              </Text>
            </Center>
          </Stack>
        </Stack>
      </Modal>
    </>
  )
}

export default Login
