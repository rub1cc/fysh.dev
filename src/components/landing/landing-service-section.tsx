import {
  Box,
  GridItem,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { RiDashboardLine, RiSmartphoneLine, RiTv2Line } from 'react-icons/ri'
import { BaseContainer } from '../ui/base-container'
import { Card } from '../ui/card'
import { SectionTitle } from '../ui/section-title'

export const LandingServiceSection = (): JSX.Element => {
  return (
    <Box
      py={24}
      borderBottomWidth="2px"
      borderTopWidth="2px"
      borderColor="black"
    >
      <BaseContainer>
        <SectionTitle title="Services" subtitle={<>Our expertise</>} />
        <SimpleGrid columns={3} gap={6} alignItems="center" mt={12}>
          <GridItem h="100%">
            <Card h="100%">
              <HStack alignItems="flex-start" spacing={6}>
                <Box>
                  <Box
                    p={2}
                    bg="green.500"
                    color="black"
                    w="50px"
                    h="50px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Icon as={RiTv2Line} w="full" h="full" />
                  </Box>
                </Box>
                <Stack spacing={4}>
                  <Text fontWeight="bold" m={0}>
                    Web Application Development
                  </Text>
                  <Text m={0}>
                    Launch a web app built with the latest technologies.
                  </Text>
                </Stack>
              </HStack>
            </Card>
          </GridItem>
          <GridItem h="100%">
            <Card h="100%">
              <HStack alignItems="flex-start" spacing={6}>
                <Box>
                  <Box
                    p={2}
                    bg="orange.500"
                    color="black"
                    w="50px"
                    h="50px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Icon as={RiSmartphoneLine} w="full" h="full" />
                  </Box>
                </Box>
                <Stack spacing={4}>
                  <Text fontWeight="bold" m={0}>
                    Mobile Application Development
                  </Text>
                  <Text m={0}>
                    Strengthen your brand with a mobile app for iOS and Android.
                  </Text>
                </Stack>
              </HStack>
            </Card>
          </GridItem>
          <GridItem h="100%">
            <Card h="100%">
              <HStack alignItems="flex-start" spacing={6}>
                <Box>
                  <Box
                    p={2}
                    bg="pink.500"
                    color="black"
                    w="50px"
                    h="50px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Icon as={RiDashboardLine} w="full" h="full" />
                  </Box>
                </Box>
                <Stack spacing={4}>
                  <Text fontWeight="bold" m={0}>
                    User Interface Design
                  </Text>
                  <Text m={0}>
                    Get outstanding user experience with a clean and modern
                    interface.
                  </Text>
                </Stack>
              </HStack>
            </Card>
          </GridItem>
        </SimpleGrid>
      </BaseContainer>
    </Box>
  )
}
