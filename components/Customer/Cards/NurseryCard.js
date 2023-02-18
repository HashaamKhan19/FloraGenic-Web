import {
  createStyles,
  Card,
  Overlay,
  Button,
  Text,
  Rating,
  Group,
  Stack,
  useMantineTheme,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

const useStyles = createStyles((theme) => ({
  card: {
    height: 180,
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
    padding: theme.spacing.xl,
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

export default function NurseryCard() {
  const { classes } = useStyles()
  const theme = useMantineTheme()

  const match1080 = useMediaQuery('(max-width: 1080px)')
  const match768 = useMediaQuery('(max-width: 768px)')
  const match576 = useMediaQuery('(max-width: 576px)')

  return (
    <Card
      radius="md"
      style={{
        backgroundImage: `url(${'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'})`,
      }}
      className={classes.card}
    >
      <Overlay
        gradient={`linear-gradient(105deg, ${theme.black} 20%, #312f2f 50%, ${theme.colors.gray[4]} 100%)`}
        opacity={0.55}
        zIndex={0}
      />

      <div className={classes.content}>
        <Group noWrap>
          <Text weight={600} className={classes.title}>
            Hashaam Nursery
          </Text>
        </Group>

        <Group spacing={'xs'}>
          <Rating value={4} readOnly size="md" />
          <Text
            style={{
              color: theme.white,
            }}
            mt={1}
          >
            4.0
          </Text>
        </Group>

        <Group
          style={{
            width: '100%',
          }}
          mt={'lg'}
        >
          <Button
            variant="filled"
            style={{
              backgroundColor: '#bfe6a1',
              color: '#62A82C',
            }}
            fullWidth
          >
            Contact Nursery
          </Button>
        </Group>
      </div>
    </Card>
  )
}
