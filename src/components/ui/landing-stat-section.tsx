import {
  Box,
  Container,
  HStack,
  Stack,
  Heading,
  SimpleGrid,
  GridItem,
  Text,
} from '@chakra-ui/react'
import { HighlightedText } from './highlghted-text'

export const LandingStatSection = (): JSX.Element => {
  return (
    <Box py={24}>
      <Container maxW="6xl">
        <HStack alignItems="center" spacing={4}>
          <Box flex="1" pr={12}>
            <Stack spacing={0}>
              <Text color="purple.500" fontWeight="bold" fontSize="sm">
                Lorem, ipsum dolor.
              </Text>
              <Heading
                fontFamily="PlusJakartaSans-ExtraBold"
                fontSize="4xl"
                w="15ch"
                lineHeight="short"
              >
                <HighlightedText>Lorem</HighlightedText> ipsum, dolor sit amet.
              </Heading>
            </Stack>
          </Box>
          <Box flex="1">
            <SimpleGrid columns={2} gap={5} alignItems="center" mt={4}>
              {[...Array(4)].map(() => (
                <GridItem>
                  <Stack borderLeftWidth="2px" px={6}>
                    <Text
                      fontWeight="bold"
                      m={0}
                      fontSize="4xl"
                      fontFamily="PlusJakartaSans-ExtraBold"
                    >
                      9.7k
                    </Text>
                    <Text m={0}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </Text>
                  </Stack>
                </GridItem>
              ))}
            </SimpleGrid>
          </Box>
        </HStack>
      </Container>
    </Box>
  )
}
