import { Carousel } from '@mantine/carousel'
import {
  Avatar,
  Badge,
  Button,
  Container,
  Grid,
  Group,
  Image,
  Paper,
  Rating,
  Stack,
  Tabs,
  Text,
} from '@mantine/core'
import { MdOutlineRateReview } from 'react-icons/md'
import { TbFileDescription } from 'react-icons/tb'
import Autoplay from 'embla-carousel-autoplay'
import ProductCard from '../Cards/ProductCard'
import { useRef } from 'react'
import { useHover } from '@mantine/hooks'

export default function ProductPage() {
  const autoplay = useRef(Autoplay({ delay: 2500 }))
  const { hovered, ref } = useHover()

  const images = [
    {
      id: 1,
      url:
        'https://images.unsplash.com/photo-1528475563668-e15742001b92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGxhbnQlMjBwb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
    {
      id: 2,
      url:
        'https://images.unsplash.com/photo-1609062111394-0427aa22d6c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGxhbnQlMjBwb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    },
  ]

  const slides = images.map((url) => (
    <Carousel.Slide key={url.id} ref={ref}>
      <Image radius={'md'} src={url.url} height={380} />
    </Carousel.Slide>
  ))

  return (
    <Container size={'xl'} pt={80}>
      <Grid mb={'xl'}>
        <Grid.Col span={6}>
          <Carousel
            sx={{ maxWidth: 400 }}
            mx="auto"
            withIndicators
            loop
            styles={{
              control: {
                color: 'green',
              },
            }}
            withControls={false}
            plugins={[autoplay.current]}
            onMouseEnter={autoplay.current.stop}
            onMouseLeave={autoplay.current.reset}
          >
            {slides}
          </Carousel>
        </Grid.Col>
        <Grid.Col span={6}>
          <Text
            weight={600}
            style={{
              fontSize: 28,
              color: 'darkslategray',
            }}
          >
            Oliver Buzz Plant
          </Text>
          <Group align="center" spacing={'sm'}>
            <Rating value={4} size="md" readOnly />
            <Text
              weight={400}
              style={{
                fontSize: 14,
                color: 'darkslategray',
              }}
            >
              4.0 (10 Reviews)
            </Text>
          </Group>
          <Group mt={'lg'}>
            <Text
              weight={600}
              style={{
                fontSize: 14,
                color: 'darkslategray',
              }}
            >
              Category:{' '}
            </Text>
            <Badge color="green" variant="filled">
              Decorations
            </Badge>
          </Group>
          <Group spacing={'xs'} mt={'sm'}>
            <Text
              weight={600}
              style={{
                fontSize: 14,
                color: 'darkslategray',
              }}
            >
              Seller:
            </Text>
            <Text
              style={{
                fontSize: 14,
                cursor: 'pointer',
              }}
              weight={600}
              c={'green'}
            >
              TRA Nursery
            </Text>
          </Group>
          <Stack spacing={0}>
            <Text
              weight={600}
              style={{
                fontSize: 14,
                color: 'darkslategray',
              }}
              mt={'md'}
            >
              Description:
            </Text>
            <Text
              mt={'xs'}
              style={{
                color: 'darkslategray',
                fontSize: 14,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut omnis
              in ullam repudiandae laboriosam quas, fuga similique ipsa! Nemo a
              facere cupiditate labore totam dignissimos quisquam enim dolore
              nam dolor.
            </Text>
          </Stack>
          <Stack spacing={0}>
            <Text
              weight={600}
              style={{
                fontSize: 23,
                color: '#d4172e',
              }}
              mt={'md'}
            >
              Rs. 1000
            </Text>
            <Text
              weight={600}
              style={{
                fontSize: 14,
                color: 'darkslategray',
              }}
            >
              Stock Available: 10
            </Text>
          </Stack>
          <Button mt={'lg'} color="green">
            Add To Cart
          </Button>
        </Grid.Col>
      </Grid>
      <Container size={'xl'} mt={50}>
        <Tabs defaultValue="description" color="green">
          <Tabs.List>
            <Tabs.Tab
              value="description"
              icon={<TbFileDescription size={14} />}
              style={{
                color: 'darkslategray',
                fontWeight: 600,
              }}
            >
              Description
            </Tabs.Tab>
            <Tabs.Tab
              style={{
                color: 'darkslategray',
                fontWeight: 600,
              }}
              value="reviews"
              icon={<MdOutlineRateReview size={14} />}
            >
              Reviews
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="description" pt="xs">
            <Stack mt={'lg'} spacing={0}>
              <Text
                style={{
                  color: 'darkslategray',
                }}
              >
                Oliver Buzz Plant
              </Text>
              <Text
                style={{
                  color: 'darkslategray',
                }}
              >
                Eryngium x oliverianum (Oliver Sea Holly) is an upright
                perennial with basal rosettes of heart-shaped, strongly toothed,
                dark green leaves. From mid-summer to early fall, sturdy leafy
                violet-blue stems bear large, cone-shaped, thistle-like, blue to
                lavender-blue flower heads.
              </Text>
              <Text
                style={{
                  color: 'darkslategray',
                }}
              >
                This plant comes with a pot
              </Text>
              <Text
                style={{
                  color: 'darkslategray',
                }}
              >
                Height: 1.5 feet
              </Text>
              <Text
                style={{
                  color: 'darkslategray',
                }}
              >
                Width: 1.5 feet
              </Text>
              <Text
                style={{
                  color: 'darkslategray',
                }}
              >
                Watering: Once a week
              </Text>
              <Text
                style={{
                  color: 'darkslategray',
                }}
              >
                Light: Full sun
              </Text>
              <Text
                style={{
                  color: 'darkslategray',
                }}
              >
                Soil: Well-drained
              </Text>
            </Stack>
          </Tabs.Panel>

          <Tabs.Panel value="reviews" pt="xs">
            <Group>
              <Stack mt={'lg'}>
                <Group spacing={'xs'}>
                  <Avatar radius="xl" size={'lg'} />
                  <Stack spacing={0}>
                    <Text
                      weight={500}
                      style={{
                        fontSize: 14,
                        color: 'darkslategray',
                      }}
                    >
                      John Doe
                    </Text>
                    <Group>
                      <Rating value={4.5} fractions={2} size="md" readOnly />{' '}
                      4.5
                    </Group>
                  </Stack>
                </Group>
                <Text
                  mt={'xs'}
                  pl={'xs'}
                  style={{
                    fontSize: 14,
                    color: 'darkslategray',
                  }}
                >
                  This plant is very beautiful and it is very easy to maintain.
                </Text>
              </Stack>
            </Group>
          </Tabs.Panel>
        </Tabs>
      </Container>
      <Container size={'xl'} mt={80}>
        <Stack>
          <Text
            weight={600}
            style={{
              fontSize: 22,
              color: 'darkslategray',
            }}
          >
            Also Available at
          </Text>
          <Group spacing={50}>
            <Paper
              style={{
                width: 200,
                height: 140,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid #ebebeb',
                cursor: 'pointer',
              }}
              radius={'md'}
            >
              <Stack align="center">
                <Avatar radius="xl" size={'lg'} />
                <Text
                  style={{
                    color: 'darkslategray',
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  Hashaam Nursery
                </Text>
              </Stack>
            </Paper>
            <Paper
              style={{
                width: 200,
                height: 140,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid #ebebeb',
                cursor: 'pointer',
              }}
            >
              <Stack align="center">
                <Avatar radius="xl" size={'lg'} />
                <Text
                  style={{
                    color: 'darkslategray',
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  Abdullah Nursery
                </Text>
              </Stack>
            </Paper>
            <Paper
              style={{
                width: 200,
                height: 140,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid #ebebeb',
                cursor: 'pointer',
              }}
            >
              <Stack align="center">
                <Avatar radius="xl" size={'lg'} />
                <Text
                  style={{
                    color: 'darkslategray',
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  Talha Nursery
                </Text>
              </Stack>
            </Paper>
            <Paper
              style={{
                width: 200,
                height: 140,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border: '1px solid #ebebeb',
                cursor: 'pointer',
              }}
            >
              <Stack align="center">
                <Avatar radius="xl" size={'lg'} />
                <Text
                  style={{
                    color: 'darkslategray',
                    fontSize: 16,
                    fontWeight: 500,
                  }}
                >
                  Ali Nursery
                </Text>
              </Stack>
            </Paper>
          </Group>
        </Stack>
      </Container>
      <Container size={'xl'} mt={80} pb={80}>
        <Stack>
          <Text
            weight={600}
            style={{
              fontSize: 22,
              color: 'darkslategray',
            }}
          >
            Related Products
          </Text>
          <Group spacing={50}>
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <ProductCard key={i} />
              ))}
          </Group>
        </Stack>
      </Container>
    </Container>
  )
}
