import {
  Box,
  GridItem,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { BaseContainer } from '../ui/base-container'
import { SectionTitle } from '../ui/section-title'

export const LandingStatSection = (): JSX.Element => {
  return (
    <Box py={24} borderTopWidth="2px" borderColor="black">
      <BaseContainer>
        <HStack alignItems="flex-start" spacing={4}>
          <Box flex="1.5" pr={12}>
            <SectionTitle title="Stats" subtitle={<>Fysh in numbers</>} />
            <Text m={0} mt={8} maxW="50ch">
              As a full-service software development agency, we work closely
              with our clients to define, design and develop transformative user
              experiences across all platforms and brand’s touchpoints.
            </Text>
          </Box>
          <Box flex="1">
            <SimpleGrid columns={2} gap={5} alignItems="center">
              <GridItem h="100%">
                <Stack>
                  <Text
                    m={0}
                    fontSize="5xl"
                    fontFamily="PlusJakartaSans-ExtraBold"
                  >
                    4+
                  </Text>
                  <Text m={0}>years in the industry</Text>
                </Stack>
              </GridItem>
              <GridItem h="100%">
                <Stack>
                  <Text
                    m={0}
                    fontSize="5xl"
                    fontFamily="PlusJakartaSans-ExtraBold"
                  >
                    25+
                  </Text>
                  <Text m={0}>Clients</Text>
                </Stack>
              </GridItem>
              <GridItem h="100%">
                <Stack>
                  <Text
                    m={0}
                    fontSize="5xl"
                    fontFamily="PlusJakartaSans-ExtraBold"
                  >
                    1k
                  </Text>
                  <Text m={0}>Projects</Text>
                </Stack>
              </GridItem>
            </SimpleGrid>
          </Box>
        </HStack>
      </BaseContainer>
    </Box>
  )
}
