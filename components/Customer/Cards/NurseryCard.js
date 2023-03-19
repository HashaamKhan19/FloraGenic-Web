import {
  Badge,
  Button,
  Card,
  createStyles,
  Group,
  Overlay,
  Rating,
  Text,
  ThemeIcon,
  useMantineTheme,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { AiOutlineClockCircle } from 'react-icons/ai'

const useStyles = createStyles((theme) => ({
  card: {
    height: 185,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  nurseryCard: {
    height: 300,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  content: {
    position: 'absolute',
    padding: theme.spacing.lg,
    zIndex: 1,
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },

  action: {
    position: 'absolute',
    bottom: theme.spacing.xl,
    right: theme.spacing.xl,
  },

  title: {
    color: theme.white,
    marginBottom: theme.spacing.xs,
    fontSize: theme.fontSizes.xl,
  },

  description: {
    color: theme.white,
    fontSize: 14,
  },
}))

export default function NurseryCard({ data }) {
  const { classes } = useStyles()
  const theme = useMantineTheme()

  return (
    <Card
      radius="md"
      style={{
        backgroundImage: `url(${data?.images[0]})`,
      }}
      className={classes.card}
    >
      <Overlay
        gradient={`linear-gradient(105deg, ${theme.black} 30%, #312f2f 60%, ${theme.colors.gray[4]} 100%)`}
        opacity={0.25}
        zIndex={0}
      />

      <div className={classes.content}>
        <Group noWrap>
          <Text weight={600} className={classes.title} truncate>
            {data?.name}
          </Text>
        </Group>

        <Group spacing={'xs'}>
          <Rating value={data?.rating} readOnly size="md" />
          <Text
            style={{
              color: theme.white,
            }}
            mt={1}
          >
            {data?.rating}
          </Text>
        </Group>

        <Group noWrap pt={'xs'}>
          <ThemeIcon variant="filled" color="dark">
            <AiOutlineClockCircle />
          </ThemeIcon>

          <Group spacing={'xs'}>
            <Text
              style={{
                color: theme.white,
              }}
            >
              {new Date(data?.openingHours).toLocaleTimeString('en-US')}
            </Text>
            <Text
              style={{
                color: theme.white,
              }}
            >
              -
            </Text>
            <Text
              style={{
                color: theme.white,
              }}
            >
              {new Date(data?.closingHours).toLocaleTimeString('en-US')}
            </Text>
          </Group>
        </Group>

        <Group
          style={{
            width: '100%',
          }}
          pt={'xs'}
        >
          <Button
            fullWidth
            color="green"
            style={{
              backgroundColor: '#62A82C',
              color: '#fff',
            }}
          >
            Contact Nursery
          </Button>
        </Group>
      </div>
    </Card>
  )
}
