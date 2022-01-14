import {
  Box,
  Container,
  HStack,
  Stack,
  Heading,
  SimpleGrid,
  GridItem,
  Text,
  Image,
} from '@chakra-ui/react'
import { HighlightedText } from './highlghted-text'

export const LandingFeatureSection = (): JSX.Element => {
  return (
    <Box bg="blueGray.50" py={24}>
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
                w="20ch"
                lineHeight="short"
              >
                Lorem ipsum dolor sit amet{' '}
                <HighlightedText>consectetur</HighlightedText>.
              </Heading>
            </Stack>
            <SimpleGrid columns={1} gap={4} alignItems="center" mt={12}>
              {[...Array(2)].map((_, i) => (
                <GridItem>
                  <Stack
                    borderWidth="1px"
                    borderColor={i == 0 ? 'blueGray.200' : 'transparent'}
                    bg={i == 0 ? 'white' : 'transparent'}
                    p={6}
                    py={4}
                    rounded="lg"
                  >
                    <Text fontWeight="bold" m={0}>
                      Lorem, ipsum.
                    </Text>
                    <Text m={0}>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </Text>
                  </Stack>
                </GridItem>
              ))}
            </SimpleGrid>
          </Box>
          <Box flex="1">
            <Image src="https://mui.com/static/branding/mui-x/Mocktable-light.png" />
          </Box>
        </HStack>
      </Container>
    </Box>
  )
}
