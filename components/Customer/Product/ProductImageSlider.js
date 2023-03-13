import { Carousel } from '@mantine/carousel'
import { Image, Skeleton } from '@mantine/core'
import { useHover } from '@mantine/hooks'
import Autoplay from 'embla-carousel-autoplay'
import { React, useRef } from 'react'

const ProductImageSlider = ({ data, loading, error }) => {
  const autoplay = useRef(Autoplay({ delay: 2500 }))
  const { hovered, ref } = useHover()

  const slides = data?.map((url, index) => (
    <Carousel.Slide key={index} ref={ref}>
      {loading ? (
        <Skeleton height={380} radius={'md'} />
      ) : (
        <Image
          radius={'md'}
          src={url || 'no image'}
          height={380}
          alt="no image"
        />
      )}
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
