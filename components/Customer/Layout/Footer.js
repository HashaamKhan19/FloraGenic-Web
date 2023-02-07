import {
  ActionIcon,
  Anchor,
  Box,
  Button,
  createStyles,
  Grid,
  Group,
  Stack,
  Text,
} from '@mantine/core'
import Image from 'next/image'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { FaGooglePlay } from 'react-icons/fa'
import FloraGenicLogo from '../../../public/Logo/floraGenic.png'

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 50,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
    backgroundColor: 'rgba(98, 168, 44, 0.3)',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: '30px',
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 50px',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  links: {
    fontWeight: 600,
    fontSize: 20,
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.sm,
    },
  },
}))

export default function Footer() {
  const aboutUsLinks = [
    {
      link: '#',
      label: 'Careers',
    },
    {
      link: '#',
      label: 'Our Stores',
    },
    {
      link: '#',
      label: 'Our Cares',
    },
    {
      link: '#',
      label: 'Terms & Conditions',
    },
    {
      link: '#',
      label: 'Privacy Policy',
    },
  ]

  const customerCareLinks = [
    {
      link: '#',
      label: 'Help Center',
    },
    {
      link: '#',
      label: 'How to Buy',
    },
    {
      link: '#',
      label: 'Track your Order',
    },
    {
      link: '#',
      label: 'Corporate & Bulk Purchasing',
    },
    {
      link: '#',
      label: 'Returns & Refunds',
    },
  ]

  const { classes } = useStyles()
  const aboutUsItems = aboutUsLinks.map((link) => (
    <Anchor
      color={'dimmed'}
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ))

  const customerCareItems = customerCareLinks.map((link) => (
    <Anchor
      color={'dimmed'}
      key={link.label}
      href={link.link}
      sx={{ lineHeight: 1 }}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ))

  return (
    <footer className={classes.footer}>
      <Grid>
        <Grid.Col span={3}>
          <Image src={FloraGenicLogo} alt="FloraGenic Logo" width={120} />
          <Text
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: 'rgba(0, 0, 0, 0.4)',
              maxWidth: '300px',
            }}
          >
            Shop now to revamp your outdoor space into a stunning oasis with our
            all-in-one gardening solution
          </Text>
          <Group mt={'md'}>
            <Button
              href="#"
              leftIcon={<FaGooglePlay size={18} />}
              variant="filled"
              style={{
                backgroundColor: '#777',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '5px',
                fontSize: '14px',
                fontWeight: 500,
                marginRight: '10px',
              }}
            >
              Google Play
            </Button>
            <Button
              href="#"
              leftIcon={<FaGooglePlay size={18} />}
              variant="filled"
              style={{
                backgroundColor: '#777',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '5px',
                fontSize: '14px',
                fontWeight: 500,
                marginRight: '10px',
              }}
            >
              App Store
            </Button>
          </Group>
        </Grid.Col>
        <Grid.Col span={3}>
          <Stack>
            <Text
              style={{
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '10px',
                color: '#000',
              }}
            >
              About Us
            </Text>
            {aboutUsItems}
          </Stack>
        </Grid.Col>
        <Grid.Col span={3}>
          <Stack>
            <Text
              style={{
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '10px',
                color: '#000',
              }}
            >
              Customer Care
            </Text>
            {customerCareItems}
          </Stack>
        </Grid.Col>
        <Grid.Col span={3}>
          <Stack>
            <Text
              style={{
                fontSize: '20px',
                fontWeight: 600,
                marginBottom: '10px',
                color: '#000',
              }}
            >
              Contact Us
            </Text>
            <Text
              style={{
                fontSize: '14px',
                fontWeight: 400,
                color: 'rgba(0, 0, 0, 0.4)',
              }}
            >
              Zaki Center Room 1, 2nd Floor, 1st Street, i8 Markaz, Islamabad,
              Pakistan
            </Text>
            <Text
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'rgba(0, 0, 0, 0.4)',
              }}
            >
              Email: floraGenic@gmail.com
            </Text>
            <Text
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: 'rgba(0, 0, 0, 0.4)',
              }}
            >
              Phone: +92-313-6942069
            </Text>
            <Group spacing="xs" position="left" noWrap>
              <ActionIcon size="lg" variant="default" radius="xl">
                <AiOutlineTwitter size={18} stroke={1.5} opacity={0.5} />
              </ActionIcon>
              <ActionIcon size="lg" variant="default" radius="xl">
                <BsFacebook size={18} stroke={1.5} opacity={0.5} />
              </ActionIcon>
              <ActionIcon size="lg" variant="default" radius="xl">
                <AiFillInstagram size={18} stroke={1.5} opacity={0.5} />
              </ActionIcon>
            </Group>
          </Stack>
        </Grid.Col>
      </Grid>
    </footer>
  )
}
