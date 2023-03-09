import {
  createStyles,
  Paper,
  Text,
  Avatar,
  Container,
  Stack,
  Rating,
  Menu,
  Badge,
  UnstyledButton,
  Group,
} from '@mantine/core'
import { GoChevronDown } from 'react-icons/go'
import { BiMap } from 'react-icons/bi'

const useStyles = createStyles(() => ({
  card: {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    maxWidth: 500,
  },
}))

const gardeners = [
  {
    id: 1,
    name: 'Hashaam Khan',
    location: 'Islamabad',
    rating: 4.5,
    skills: ['Gardening', 'Landscaping', 'Fertilizer'],
    price: '5000/Month',
    available: true,
  },
]

const GardenerInfoCard = () => {
  const { classes } = useStyles()

  return (
    <>
      {gardeners.map((gardener) => (
        <Paper
          withBorder
          radius={'md'}
          sx={{
            backgroundImage: `url(${'https://images.unsplash.com/photo-1528731708534-816fe59f90cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGlnaHQlMjBncmF5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'})`,
            position: 'relative',
            cursor: 'pointer',
          }}
          my={'xl'}
          className={classes.card}
        >
          <Badge
            variant="dot"
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
            }}
            color={gardener.available ? 'green' : 'red'}
          >
            {gardener.available ? 'Available' : 'Not Available'}
          </Badge>
          <Stack align="center" p={'sm'} spacing={'xs'}>
            <Avatar
              size={'xl'}
              radius={'50%'}
              src="https://i.pravatar.cc/300"
            />

            <Text
              style={{
                fontWeight: 'bold',
                fontSize: '1.5rem',
              }}
            >
              {gardener.name}
            </Text>
            <Group spacing={2}>
              <BiMap />
              <Text
                style={{
                  fontWeight: 500,
                  fontSize: '1.1rem',
                }}
              >
                {gardener.location}
              </Text>
            </Group>
            <Rating
              value={gardener.rating}
              size="md"
              fractions={2}
              readOnly
              mb={5}
            />

            <Menu
              width={170}
              shadow="md"
              transition={'scale-y'}
              transitionDuration={300}
              exitTransitionDuration={100}
              withArrow
            >
              <Menu.Target>
                <UnstyledButton>
                  <Badge
                    variant="outline"
                    pr={3}
                    rightSection={
                      <GoChevronDown
                        style={{
                          paddingRight: 3,
                        }}
                      />
                    }
                  >
                    Skills
                  </Badge>
                </UnstyledButton>
              </Menu.Target>

              <Menu.Dropdown>
                {gardener.skills.map((skill) => (
                  <Menu.Item key={skill}>{skill}</Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>
            <Text
              style={{
                fontSize: '1.2rem',
                fontWeight: 500,
                color: '#D92228',
              }}
              mt={'xs'}
            >
              {gardener.price}
            </Text>
          </Stack>
        </Paper>
      ))}
    </>
  )
}

export default GardenerInfoCard
