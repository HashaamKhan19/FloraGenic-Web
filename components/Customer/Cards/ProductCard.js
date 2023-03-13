import {
  createStyles,
  Card,
  Image,
  ActionIcon,
  Group,
  Text,
  Avatar,
  Badge,
  Stack,
  Box,
} from '@mantine/core'
import { FiHeart } from 'react-icons/fi'
import { MdOutlineAddShoppingCart } from 'react-icons/md'

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 18,
  },

  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.xs,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },
}))

export default function ProductCard({ heart, data }) {
  const { classes, theme } = useStyles()

  return (
    <Card
      withBorder
      p="lg"
      radius="md"
      sx={{
        maxHeight: 400,
        border: '1px solid #62A82C',
      }}
    >
      <Card.Section mb="sm">
        <Image
          src={data?.images[0] || 'no image'}
          alt="Product image"
          height={190}
          style={{
            position: 'relative',
          }}
        />
        <Badge
          color="green"
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
          }}
        >
          {data?.category?.name}
        </Badge>
      </Card.Section>

      <Text weight={600} className={classes.title} mt="xs">
        {data?.name}
      </Text>

      <Group mt="lg" noWrap>
        <Box
          style={{
            maxHeight: 50,
            maxWidth: 50,
          }}
        >
          <Avatar src={data?.nursery?.images[0]} radius="sm" />
        </Box>
        <Stack spacing={0}>
          <Group
            style={{
              maxWidth: 200,
            }}
          >
            <Text
              weight={500}
              style={{
                color: 'darkslategrey',
              }}
              truncate
            >
              {data?.nursery?.name}
            </Text>
          </Group>
          <Group
            style={{
              maxWidth: 200,
            }}
          >
            <Text size="xs" color="dimmed" truncate>
              {data?.nursery?.details}
            </Text>
          </Group>
        </Stack>
      </Group>

      <Text
        color="red"
        weight={600}
        mb={0}
        mt={'xs'}
        style={{
          fontSize: 20,
        }}
      >
        Rs. {data?.retailPrice}
      </Text>

      <Card.Section className={classes.footer}>
        <Group position="apart">
          <Text size="xs" color="dimmed">
            {data?.sold} people bought this
          </Text>
          <Group spacing={'xs'}>
            {!heart && (
              <ActionIcon
                color="red"
                variant="subtle"
                onClick={(e) => {
                  e.stopPropagation()
                  e.preventDefault()
                }}
              >
                <FiHeart size={18} />
              </ActionIcon>
            )}
            <ActionIcon
              color="blue"
              variant="subtle"
              onClick={(e) => {
                e.stopPropagation()
                e.preventDefault()
              }}
              disabled={data?.stock === 0}
            >
              <MdOutlineAddShoppingCart size={16} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Group>
      </Card.Section>
    </Card>
  )
}
