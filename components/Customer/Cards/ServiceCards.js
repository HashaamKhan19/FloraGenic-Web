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

const mockdata = [
  {
    title: 'Extreme performance',
    description:
      'This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit',
    icon: BsTruck,
  },
  {
    title: 'Privacy focused',
    description:
      'People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma',
    icon: AiOutlineDollar,
  },
  {
    title: 'No third parties',
    description:
      'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
    icon: GrCertificate,
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
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
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
      <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ))
  return (
    <Container size="xl">
      <SimpleGrid
        cols={3}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: 'md', cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  )
}
