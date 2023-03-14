import {
  createStyles,
  Card,
  Overlay,
  CardProps,
  Button,
  Text,
  Rating,
  Group,
  Stack,
  useMantineTheme,
  ActionIcon,
  Box,
} from '@mantine/core'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { BsFacebook, BsInstagram, BsTelephone, BsTwitter } from 'react-icons/bs'
import { GoLocation } from 'react-icons/go'
import { HiArrowNarrowRight } from 'react-icons/hi'
import NurseryDetails from './NurseryDetails'

const useStyles = createStyles((theme) => ({
  card: {
    height: 240,
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
  },

  description: {
    color: theme.white,
    fontSize: 14,
  },
}))

export default function NurseryInfoCard({ data }) {
  const { classes } = useStyles()
  const theme = useMantineTheme()
  const router = useRouter()

  console.log('====================================')
  console.log('data image', data?.images[0])
  console.log('====================================')

  const [opened, setOpened] = useState(false)

  return (
    <>
      <Card
        radius="md"
        style={{
          backgroundImage: `url(${data?.images[0]})`,
        }}
        className={
          router.pathname.includes('viewNursery')
            ? classes.nurseryCard
            : classes.card
        }
      >
        <Overlay
          gradient={`linear-gradient(105deg, ${theme.black} 25%, #312f2f 50%, ${theme.colors.gray[4]} 100%)`}
          opacity={0.55}
          zIndex={0}
        />

        <div className={classes.content}>
          <Text
            size={router.pathname.includes('viewNursery') ? 26 : 'lg'}
            weight={600}
            className={classes.title}
          >
            {data?.name}
          </Text>

          <Stack mt={'sm'}>
            <Rating
              value={data?.rating}
              readOnly
              size={router.pathname.includes('viewNursery') ? 'md' : 'sm'}
            />

            <Group
              noWrap
              mt={router.pathname.includes('viewNursery') ? 'xs' : 0}
            >
              <GoLocation
                style={{
                  color: theme.white,
                  fontSize: 20,
                }}
              />
              <Text className={classes.description}>{data?.address}</Text>
            </Group>
            <Group
              noWrap
              mt={router.pathname.includes('viewNursery') ? 'xs' : 0}
            >
              <BsTelephone
                style={{
                  color: theme.white,
                  fontSize: 20,
                }}
              />
              <Text className={classes.description}>{data?.phoneNumber}</Text>
            </Group>
            <Group
              position={
                router.pathname.includes('viewNursery') ? 'center' : 'right'
              }
            >
              {router.pathname.includes('viewNursery') ? (
                <Group
                  noWrap
                  style={
                    router.pathname.includes('viewNursery')
                      ? {
                          width: '100%',
                          justifyContent: 'space-between',
                        }
                      : {
                          width: '100%',
                        }
                  }
                  mt={'lg'}
                >
                  <Group noWrap>
                    <BsFacebook color="white" size={22} />
                    <BsInstagram color="white" size={22} />
                    <BsTwitter color="white" size={22} />
                  </Group>
                  <Group>
                    <Button
                      variant="outline"
                      style={{
                        color: theme.white,
                        borderColor: theme.white,
                      }}
                    >
                      Contact Nursery
                    </Button>

                    <Button
                      variant="filled"
                      style={{
                        backgroundColor: theme.white,
                        color: theme.black,
                      }}
                      onClick={() => setOpened(true)}
                    >
                      Nursery Details
                    </Button>
                  </Group>
                </Group>
              ) : (
                <ActionIcon variant="transparent">
                  <HiArrowNarrowRight
                    size={24}
                    style={{
                      color: theme.white,
                    }}
                  />
                </ActionIcon>
              )}
            </Group>
          </Stack>
        </div>
      </Card>
      <NurseryDetails opened={opened} setOpened={setOpened} data={data} />
    </>
  )
}
