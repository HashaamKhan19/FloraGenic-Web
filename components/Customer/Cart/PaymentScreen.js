import React from 'react'
import { PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { Button } from '@mantine/core'

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  formStyles: {
    display: 'flex',
    width: '500px',
    flexDirection: 'column',
  },
}

const PaymentScreen = () => {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      },
      redirect: 'if_required',
    })

    if (error) {
      if (error.type === 'card_error' || error.type === 'validation_error') {
        alert(error.message)
      } else {
        alert('An unexpected error occured.')
      }
    } else {
      alert('Payment successful!')
      // await axios
      //   .post("/api/user/create-user", {
      //     email: session?.user?.email,
      //     name: session?.user?.name,
      //     image: session?.user?.image,
      //   })
      //   .then((res) => {
      //     alert("Payment successful!");
      //     router.push("/dashboard");
      //   })
      //   .catch((err) => alert(err.response.data.message));
      //   router.push("/dashboard");
    }
  }

  return (
    <main style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.formStyles}>
        <PaymentElement />
        <Button type="submit" variant={'filled'} disabled={!stripe} my={20}>
          Pay Now
        </Button>
      </form>
    </main>
  )
}

export default PaymentScreen
