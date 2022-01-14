import {
  Box,
  Container,
  HStack,
  Stack,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react'
import { HighlightedText } from './highlghted-text'

export const LandingHeroSection = (): JSX.Element => {
  return (
    <Box overflowX="hidden">
      <Container
        maxW="6xl"
        display="flex"
        justifyContent="flex-end"
        position="relative"
      >
        <HStack spacing={24} w="6xl">
          <Stack flex="1" spacing={6}>
            <Heading fontSize="6xl">
              Lorem <HighlightedText>ipsum</HighlightedText> dolor sit amet.
            </Heading>
            <Text fontSize="sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,
              laboriosam? Aliquid alias expedita neque quam suscipit laborum
              autem, beatae vel soluta eligendi ipsa, libero culpa sapiente
              molestias tempore nulla error.
            </Text>
          </Stack>
          <Box w="50%" position="relative">
            <Image
              position="relative"
              minW="860px"
              overflow="hidden auto"
              borderBottomLeftRadius="2xl"
              src="https://cdn.dribbble.com/users/323673/screenshots/14147317/1_4x.png"
            />
          </Box>
        </HStack>
      </Container>
    </Box>
  )
}
