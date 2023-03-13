import {
  Title,
  Text,
  Container,
  Button,
  Overlay,
  createStyles,
} from '@mantine/core'

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    paddingTop: 160,
    paddingBottom: 110,
    backgroundImage:
      'url(https://images.unsplash.com/photo-1601001815894-4bb6c81416d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    [theme.fn.smallerThan('xs')]: {
      paddingTop: 80,
      paddingBottom: 50,
    },
  },

  inner: {
    position: 'relative',
    zIndex: 1,
  },

  title: {
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    color: theme.white,
    marginBottom: theme.spacing.xs,
    textAlign: 'center',
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
      textAlign: 'left',
    },
  },

  highlight: {
    color: '#62A82C',
  },

  description: {
    color: theme.colors.gray[0],
    textAlign: 'center',

    [theme.fn.smallerThan('xs')]: {
      fontSize: theme.fontSizes.md,
      textAlign: 'left',
    },
  },

  controls: {
    marginTop: `calc(${theme.spacing.xl} * 1.5)`,
    display: 'flex',
    justifyContent: 'center',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  control: {
    height: 42,
    fontSize: theme.fontSizes.md,

    '&:not(:first-of-type)': {
      marginLeft: theme.spacing.md,
    },

    [theme.fn.smallerThan('xs')]: {
      '&:not(:first-of-type)': {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },

  secondaryControl: {
    color: theme.white,
    backgroundColor: 'rgba(255, 255, 255, .4)',

    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, .45) !important',
    },
  },
}))

export default function Hero() {
  const { classes, cx } = useStyles()

  return (
    <div className={classes.wrapper}>
      <Overlay color="#000" opacity={0.65} zIndex={1} />

      <div className={classes.inner}>
        <Title className={classes.title}>
          Get the help you need to create the garden of{' '}
          <Text component="span" inherit className={classes.highlight}>
            {' '}
            your Dreams!
          </Text>
        </Title>

        <Container size={600}>
          <Text size="lg" className={classes.description}>
            We're here to help you with all your gardening and nursery needs.
            Whether you're a seasoned gardener or just starting out, we've got
            the expertise and products you need to make your garden flourish.
          </Text>
        </Container>
      </div>
    </div>
  )
}
