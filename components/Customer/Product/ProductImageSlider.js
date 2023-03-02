import { Carousel } from '@mantine/carousel'
import { Image } from '@mantine/core'
import { useHover } from '@mantine/hooks'
import Autoplay from 'embla-carousel-autoplay'
import { React, useRef } from 'react'

const ProductImageSlider = () => {
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
    <>
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
    </>
  )
}

export default ProductImageSlider
