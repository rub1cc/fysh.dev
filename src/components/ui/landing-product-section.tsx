import {
  Box,
  Container,
  Stack,
  Heading,
  SimpleGrid,
  GridItem,
  HStack,
  Text,
} from '@chakra-ui/react'
import { HighlightedText } from './highlghted-text'

export const LandingProductSection = (): JSX.Element => {
  return (
    <Box bg="blueGray.50" py={24} mt={24}>
      <Container maxW="6xl">
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
            Lorem ipsum <HighlightedText>dolor</HighlightedText> sit amet.
          </Heading>
        </Stack>
        <SimpleGrid columns={4} gap={4} alignItems="center" mt={12}>
          {[...Array(4)].map((_, i) => (
            <GridItem>
              <Stack
                borderWidth="1px"
                borderColor="blueGray.200"
                bg="white"
                p={6}
                rounded="lg"
              >
                <HStack>
                  <Text fontWeight="bold" m={0} color="purple.500">
                    {i + 1}.
                  </Text>
                  <Text fontWeight="bold" m={0}>
                    Lorem, ipsum.
                  </Text>
                </HStack>
                <Text m={0}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsam, facere?
                </Text>
              </Stack>
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
