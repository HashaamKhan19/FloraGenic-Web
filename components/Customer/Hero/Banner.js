import React from 'react'
import { Paper, Button, Container, Text } from '@mantine/core'

function Banner() {
  return (
    <Container size={'xl'} py={60}>
      <Paper
        style={{
          height: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
        mx={'lg'}
        radius={0}
        bg={'#434343'}
      >
        <Paper
          style={{
            width: '30%',
            textAlign: 'center',
            height: '100%',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0 100%)',
          }}
          bg={'#E0E0E0'}
          radius={0}
        >
          <span
            style={{
              fontSize: 28,
              color: 'darkslategray',
              fontWeight: 525,
              paddingLeft: 20,
            }}
          >
            Black Friday Sale!
          </span>
        </Paper>
        <div
          style={{
            width: '60%',
            display: 'inline-block',
            position: 'relative',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              whiteSpace: 'nowrap',
              animation: 'move-text 25s linear infinite',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 24,
                color: 'white',
                fontWeight: 525,
                fontStyle: 'italic',
              }}
            >
              Buy your favorite plant from our store and get a chance to win a
              free gift
            </Text>
          </div>
        </div>
        <Paper
          style={{
            width: '15%',
            textAlign: 'center',
            height: '100%',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          bg={'#434343'}
        >
          <Button
            style={{
              backgroundColor: '#fff',
              color: '#000',
            }}
            radius={0}
          >
            Shop Now
          </Button>
        </Paper>
        <style>
          {`
          @keyframes move-text {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          `}
        </style>
      </Paper>
    </Container>
  )
}

export default Banner
