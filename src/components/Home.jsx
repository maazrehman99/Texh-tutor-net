import React from 'react'
import { Box, Container, filter, Heading, Image,Stack,Text } from '@chakra-ui/react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'


const headingOptions = {
  pos: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50% ,-50%)',
  textTransform: 'uppercase',
  p: '4',
  size: '4xl',

}
const Home = () => {
  return (

    <Box>
      <MyCarousel/>
      <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
        
        <Heading textTransform={'uppercase'} py={'2'} w={'fit-content'} borderBottom={'2px'} m={'auto'}  >Services</Heading>
         <Stack
         h={'full'}
         p={"full"}
         alignItems={'center'}
         direction={['column','row']}
 >
  <Image src={img5} h={['40','400']} filter={'hue-rotate(-130deg)'}/>
  <Text letterSpacing={"widest"} lineHeight={"190%"} p={["4","16"]} textAlign={"center"}>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque necessitatibus et neque consequatur, alias sint, ut ex soluta pariatur porro ad aliquid itaque ullam fugit. Obcaecati debitis eum tempora laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo quasi, delectus molestias, dolorum, dolore libero cupiditate sapiente inventore velit beatae? Provident quia cum laboriosam ea officia doloremque qui quis Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus reiciendis, ab quos quis magnam odit atque quibusdam suscipit laborum delectus dolorum quasi necessitatibus non rem ipsam cumque voluptatum. Repellat, magnam.
  </Text>

         </Stack>
      </Container>
      </Box>
  )
}

const MyCarousel = () => (
  <Carousel
    autoPlay
    infiniteLoop
    interval={3000}
    showArrows={false}
    showThumbs={false}
    showStatus={false}
  >
    <Box w="full" h={'100vh'} >
      <Image src={img1} h={"full"} w={"full"} objectFit={"cover"} />

      <Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>
        Enjoy The Future
      </Heading>
    </Box>
    <Box w="full" h={'100vh'} >
      <Image src={img2} h={"full"} w={"full"} objectFit={"cover"}  />
      <Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}>
        Future is Gaming
      </Heading>
    </Box>
    <Box w="full" h={'100vh'} >
      <Image src={img3} h={"full"} w={"full"} objectFit={"cover"}  />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
        Gaming Console
      </Heading>
    </Box>
    <Box w="full" h={'100vh'} >
      <Image src={img4} h={"full"} w={"full"} objectFit={"cover"}  />
      <Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>
       Night Life is Cool
      </Heading>
    </Box>
    
  </Carousel>
);

export default Home