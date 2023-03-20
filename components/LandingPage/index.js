// import { Box } from "@mui/material";
import Image from 'next/legacy/image'
import React from 'react'
import LandingPageBackground from '../../assets/images/landing-page-bg.jpg'
import LandingPageForeground from '../../assets/images/transparent-leaf-bark.png'
import { Box, Button, Center, Group, Text } from '@mantine/core'
import Link from 'next/link'

const LandingPage = () => {
  return (
    <Box
      p="100px"
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundImage: `url(${LandingPageBackground.src})`,
        objectFit: 'cover',
        backgroundSize: 'cover',
        position: 'relative',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <Box
        sx={{
          backdropFilter: 'blur(30px)',
          height: '100%',
          width: '100%',
          bgcolor: 'rgba(61, 117, 48, 0.5)',
          borderRadius: 5,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            width: '100%',
            flexDirection: 'column',
          }}
        >
          <Text
            style={{
              fontSize: 45,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
              fontFamily: 'Poppins',
            }}
            mb={'xs'}
          >
            Buy Your Favorite Plants from FloraGenic!
          </Text>

          <Group
            style={{
              zIndex: 1,
            }}
          >
            <Button
              variant="outline"
              style={{
                color: 'white',
                border: '1px solid #62A82C',
                fontFamily: 'Poppins',
                cursor: 'pointer',
              }}
            >
              Sign In
            </Button>

            <Button
              variant="outline"
              style={{
                color: 'white',
                border: '1px solid #62A82C',
                fontFamily: 'Poppins',
                cursor: 'pointer',
              }}
            >
              Sign Up
            </Button>
          </Group>
        </Box>
      </Box>
      <div
        style={{
          position: 'absolute',
          bottom: 30,
          right: 0,
          width: 800,
        }}
      >
        <Image src={LandingPageForeground} alt="Landing Page Foreground" />
      </div>
    </Box>
  )
}

export default LandingPage
