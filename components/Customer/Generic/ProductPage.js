import { Carousel } from '@mantine/carousel'
import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Grid,
  Group,
  Image,
  Rating,
  Stack,
  Tabs,
  Text,
} from '@mantine/core'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { MdOutlineRateReview } from 'react-icons/md'
import { TbFileDescription } from 'react-icons/tb'

export default function ProductPage() {
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
    <Carousel.Slide key={url.id}>
      <Image src={url.url} height={380} />
    </Carousel.Slide>
  ))

  return (
    <Container size={'xl'}>
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
            nextControlIcon={<AiOutlineArrowRight />}
            previousControlIcon={<AiOutlineArrowLeft />}
          >
            {slides}
          </Carousel>
        </Grid.Col>
        <Grid.Col span={6}>
          <Text
            weight={600}
            style={{
              fontSize: 28,
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
              }}
            >
              4.0 (10 Reviews)
            </Text>
          </Group>
          <Group mt={'lg'}>
            <Text
              weight={500}
              style={{
                fontSize: 14,
              }}
            >
              Category:{' '}
            </Text>
            <Badge color="green" variant="filled">
              Decorations
            </Badge>
          </Group>
          <Text
            weight={500}
            style={{
              fontSize: 14,
            }}
            mt={'md'}
          >
            Seller: Hashaam Nursery
          </Text>
          <Stack spacing={0}>
            <Text
              weight={500}
              style={{
                fontSize: 14,
              }}
              mt={'md'}
            >
              Description:
            </Text>
            <Text mt={'xs'}>
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
                color: '#f44336',
              }}
              mt={'md'}
            >
              Rs. 1000
            </Text>
            <Text
              weight={400}
              style={{
                fontSize: 14,
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
      <Box mt={'xl'}>
        <Tabs defaultValue="description" color="green">
          <Tabs.List>
            <Tabs.Tab
              value="description"
              icon={<TbFileDescription size={14} />}
            >
              Description
            </Tabs.Tab>
            <Tabs.Tab value="reviews" icon={<MdOutlineRateReview size={14} />}>
              Reviews
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="description" pt="xs">
            <Stack mt={'lg'}>
              <Text>Oliver Buzz Plant</Text>
              <Text>
                Eryngium x oliverianum (Oliver Sea Holly) is an upright
                perennial with basal rosettes of heart-shaped, strongly toothed,
                dark green leaves. From mid-summer to early fall, sturdy leafy
                violet-blue stems bear large, cone-shaped, thistle-like, blue to
                lavender-blue flower heads.
              </Text>
              <Text>This plant comes with a pot</Text>
              <Text>Height: 1.5 feet</Text>
              <Text>Width: 1.5 feet</Text>
              <Text>Watering: Once a week</Text>
              <Text>Light: Full sun</Text>
              <Text>Soil: Well-drained</Text>
            </Stack>
          </Tabs.Panel>

          <Tabs.Panel value="reviews" pt="xs">
            <Group>
              <Stack mt={'lg'}>
                <Group spacing={'xs'}>
                  <Avatar radius="xl" size={'lg'} />
                  <Stack spacing={0}>
                    <Text weight={500}>John Doe</Text>
                    <Group>
                      <Rating value={4.5} fractions={2} size="md" readOnly />{' '}
                      4.5
                    </Group>
                  </Stack>
                </Group>
                <Text mt={'xs'} pl={'xs'}>
                  This plant is very beautiful and it is very easy to maintain.
                </Text>
              </Stack>
            </Group>
          </Tabs.Panel>
        </Tabs>
      </Box>
    </Container>
  )
}
