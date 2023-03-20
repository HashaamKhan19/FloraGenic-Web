import { useEffect, useState } from 'react'

import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import gql from 'graphql-tag'
import { useMutation } from '@apollo/client'
import PaymentScreen from './PaymentScreen'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)

const GET_PAYMENT_INTENT = gql`
  mutation CreatePaymentIntent($amount: Int!) {
    createPaymentIntent(amount: $amount)
  }
`

const Checkout = () => {
  const [clientSecret, setClientSecret] = useState('')
  console.log('====================================')
  console.log('stripePromise', process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
  console.log('====================================')

  const [getIntent, { data, loading, error }] = useMutation(
    GET_PAYMENT_INTENT,
    {
      variables: {
        amount: 100,
      },
      onCompleted: (data) => {
        setClientSecret(data.createPaymentIntent)
      },
    },
  )

  useEffect(() => {
    getIntent()
  }, [])

  return (
    <>
      {clientSecret && stripePromise ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <PaymentScreen />
        </Elements>
      ) : (
        <p>Loading</p>
      )}
    </>
  )
}

export default Checkout
