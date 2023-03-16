import { Box, Button,Text, Heading, HStack, Input, Stack, VStack } from '@chakra-ui/react'
import { AiOutlineSend } from 'react-icons/ai'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor={"blackAlpha.900"} minH={'40'} p={'6'} color={"white"}  >
        <Stack direction={['column','row']} >
                <VStack alignItems={'stretch'}  width={'full'} px={'4'}>
                   <Heading size={'md'} textTransform={'uppercase'}>
                    Subscribe us for latest updates
                   </Heading>
                   <HStack borderBottom={'2px solid white'} py={'2'}>
                    <Input type={'email'} placeholder={'Write Your Email Here'} border={'none'}
                    borderRadius={'none'} focusBorderColor={'none'}
                    />
                   <Button
                   p={'4'}
                   colorScheme={'purple'}
                   variant={'ghost'}
                   borderRadius={'0 20px 20px 0'}
                   >
                    <AiOutlineSend  size={20}/>
                   </Button>
                   </HStack>
                </VStack>
                <VStack w={'full'}
                   borderLeft={['none','1px solid white']}    
                   borderRight={['none','1px solid white']}    
                >
                    <Heading textTransform={'uppercase'} textAlign={'center'} >Tutorials Hub</Heading>
                       <Text>All Right Reserved</Text>
                </VStack>
                <VStack w={'full'}>
                    <Heading size={'md'} textTransform={'uppercase'} >Social Media</Heading>
                         <Button variant={'link'} colorScheme={'white'}>
                            <a href="youtube.com">Youtube</a>
                         </Button>
                         <Button variant={'link'} colorScheme={'white'}>
                            <a href="youtube.com">Facebook</a>
                         </Button>
                         <Button variant={'link'} colorScheme={'white'}>
                            <a href="youtube.com">Instagram</a>
                         </Button>
                </VStack>
        </Stack>

    </Box>
  )
}

export default Footer