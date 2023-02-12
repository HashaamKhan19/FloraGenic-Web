import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
} from '@mantine/core'
import { BsTruck } from 'react-icons/bs'
import { AiOutlineDollar } from 'react-icons/ai'
import { GrCertificate } from 'react-icons/gr'
import { MdOutlineFactCheck } from 'react-icons/md'

const mockdata = [
  {
    title: 'Free WorldWide Delivery',
    description:
      'Free shipping on all orders over $1. We ship to over 100 countries around the world.',
    icon: BsTruck,
  },
  {
    title: 'Best Quality Products',
    description:
      'We offer the best quality products at the best prices. We are committed to providing you with the best possible service.',
    icon: MdOutlineFactCheck,
  },
  {
    title: 'Very Affordable Prices',
    description:
      'We offer the best quality products at the best prices. We are committed to providing you with the best possible service.',
    icon: AiOutlineDollar,
  },
]

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan('sm')]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  card: {
    border: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
    '&:hover': {
      boxShadow: `${theme.shadows.md} !important`,
      transform: 'scale(1.02)',
      transition: 'box-shadow 700ms ease , transform 700ms ease-out',
    },
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: '#62A82C',
      width: 50,
      height: 2,
      marginTop: theme.spacing.sm,
    },
    color: 'darkslategray',
    fontWeight: 600,
  },
}))

export default function ServiceCards() {
  const { classes, theme } = useStyles()
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      p="xl"
    >
      <feature.icon size={50} stroke={2} color={'#62A82C'} />
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ))
  return (
    <Container size="xl" mt={80} pb={80}>
      <SimpleGrid
        cols={3}
        spacing="xl"
        breakpoints={[{ maxWidth: 'md', cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  )
}
