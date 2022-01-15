import { Box, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react'
import { BaseContainer } from '../ui/base-container'
import { HighlightedText } from '../ui/highlghted-text'

export const LandingHeroSection = (): JSX.Element => {
  return (
    <Box borderBottomWidth="2px" borderBottomColor="black">
      <BaseContainer
        display="flex"
        justifyContent="flex-end"
        position="relative"
      >
        <HStack spacing={24} w="6xl">
          <Stack flex="1" spacing={6}>
            <Heading fontSize="6xl">
              We'are a <HighlightedText> Dev Team</HighlightedText> from
              Indonesia
            </Heading>
            <Text>
              Lift your business to the next level with our expertise in
              technology.
            </Text>
          </Stack>
          <Box
            w="50%"
            position="relative"
            borderLeftWidth="2px"
            borderLeftColor="black"
          >
            <Image
              position="relative"
              minW="50vw"
              overflow="hidden auto"
              src="https://i.pinimg.com/originals/d2/8d/16/d28d165c6ad5f93bc8951074f7db5118.png"
            />
          </Box>
        </HStack>
      </BaseContainer>
    </Box>
  )
}
