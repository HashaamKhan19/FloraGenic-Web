import {
  Badge,
  Box,
  Button,
  Group,
  Indicator,
  Paper,
  Stepper,
  StepperProps,
  Text,
} from '@mantine/core'
import React, { useState } from 'react'
import { AiOutlineCheckCircle, AiTwotoneCheckCircle } from 'react-icons/ai'
import { BiPackage } from 'react-icons/bi'
import { BsBagCheckFill, BsCheckCircleFill, BsTruck } from 'react-icons/bs'
import { FaGifts } from 'react-icons/fa'

const OrderDetails = () => {
  const [active, setActive] = useState(1)

  function StyledStepper(props) {
    return (
      <Stepper
        p={'xl'}
        styles={{
          stepBody: {
            display: 'none',
          },

          step: {
            padding: 0,
          },

          stepIcon: {
            borderWidth: 0,
          },

          separator: {
            marginLeft: -2,
            marginRight: -2,
            height: 3,
          },

          separatorActive: {
            backgroundColor: '#62A82C',
          },
        }}
        active={2}
        {...props}
        size="xl"
      />
    )
  }

  return (
    <>
      <Group position="apart">
        <Group spacing={'xs'}>
          <BsBagCheckFill size={22} color="#62A82C" />
          <Text
            style={{
              fontWeight: 500,
              fontSize: '24px',
              color: 'darkslategray',
            }}
          >
            Order Details
          </Text>
        </Group>
        <Button variant="light" c={'#62A82C'}>
          Order Again
        </Button>
      </Group>

      <Paper p={'xl'} mt={'lg'} shadow="xs" radius={'md'}>
        <StyledStepper active={active}>
          <Stepper.Step
            completedIcon={
              <>
                <BiPackage size={30} />
                <AiOutlineCheckCircle
                  size={16}
                  style={{
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    zIndex: 1,
                    backgroundColor: 'gray',
                    fill: 'white',
                    borderRadius: '50%',
                  }}
                />
              </>
            }
            color="#62A82C"
            style={{
              position: 'relative',
            }}
          />
          <Stepper.Step icon={<BsTruck size={28} />} />
          <Stepper.Step icon={<FaGifts size={28} />} />
        </StyledStepper>
        <Group pt={'xl'} position="right">
          <Badge variant="light" c={'#62A82C'} size="lg">
            <Text
              style={{
                fontWeight: 500,
                fontSize: '14px',
                color: '#62A82C',
              }}
            >
              Estimated Delivery Date 4th October
            </Text>
          </Badge>
        </Group>
      </Paper>

      <Paper bg={'#e5e5e5'} mt={'xl'}>
        <Text>Order Id here</Text>
        <Paper bg={'white'}>
          <Text>Items here</Text>
        </Paper>
      </Paper>
    </>
  )
}

export default OrderDetails
