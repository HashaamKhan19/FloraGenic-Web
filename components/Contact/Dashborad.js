import { useEffect, useState, useRef } from 'react'
import {
  createStyles,
  Header,
  Group,
  ActionIcon,
  Container,
  Burger,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import links from './DashboardLinks'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import Image from 'next/image'
import FloraGenicLogo from '../../public/Logo/floraGenic.png'

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    width: 420,

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  social: {
    width: 420,

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `8px 12px`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: 'darkslategray',
    fontSize: '1rem',
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  imageContainer: {
    width: '100px',

    [theme.fn.smallerThan('sm')]: {
      width: '80px',
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: 'green',
      }).background,
      color: theme.fn.variant({ variant: 'light', color: 'green' }).color,
      transition: 'all 0.5s ease',
    },
  },
}))

export default function Dashboard() {
  const [opened, { toggle }] = useDisclosure(false)
  const [active, setActive] = useState(links[0].link)
  const { classes, cx } = useStyles()

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault()
        setActive(link.link)
      }}
    >
      {link.label}
    </a>
  ))

  return (
    <Header
      height={80}
      style={{
        position: 'sticky',
      }}
    >
      <Container className={classes.inner} size={'xl'}>
        <Burger
          opened={opened}
          onClick={toggle}
          size="sm"
          className={classes.burger}
        />
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>

        <Image
          src={FloraGenicLogo}
          alt="FloraGenic Logo"
          className={classes.imageContainer}
        />

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <AiOutlineTwitter size="1.2rem" stroke={1.5} color="#00acee" />
          </ActionIcon>
          <ActionIcon size="lg">
            <BsFacebook size="1.2rem" stroke={1.5} color="#3b5998" />
          </ActionIcon>
          <ActionIcon size="lg">
            <AiFillInstagram size="1.2rem" stroke={1.5} color="#e1306c" />
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  )
}
