import {
  Box,
  GridItem,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { BaseContainer } from '../ui/base-container'

export const LandingFooterSection = (): JSX.Element => {
  return (
    <Box
      borderTopWidth="1px"
      borderTopColor="blueGray.200"
      bg="black"
      color="white"
    >
      <BaseContainer py={24} px={0}>
        <HStack alignItems="flex-start">
          <Box flex="2">
            <Stack spacing={4}>
              <Box>
                <Text fontWeight="bold" m={0}>
                  Address
                </Text>
                <Text m={0}>Jl. Lorem ipsum dolor sit.</Text>
              </Box>
              <Box>
                <Text fontWeight="bold" m={0}>
                  Email
                </Text>
                <Text m={0}>hi@fysh.dev</Text>
              </Box>
              <Box>
                <Text fontWeight="bold" m={0}>
                  Social
                </Text>
                <Text m={0}>hi@fysh.dev</Text>
              </Box>
            </Stack>
          </Box>
          <SimpleGrid columns={2} gap={24} fontSize="lg">
            <GridItem>
              <Stack spacing={4}>
                <Text m={0}>Services</Text>
                <Text m={0}>Our Works</Text>
                <Text m={0}>About Us</Text>
                <Text m={0}>Work with Us</Text>
              </Stack>
            </GridItem>
            <GridItem>
              <Stack spacing={4}>
                <Text m={0}>Help</Text>
                <Text m={0}>Blog</Text>
                <Text m={0}>Terms of Service</Text>
                <Text m={0}>Privacy Policy</Text>
              </Stack>
            </GridItem>
          </SimpleGrid>
        </HStack>
      </BaseContainer>
      <BaseContainer
        py={8}
        px={0}
        mt={24}
        borderTopWidth="1px"
        borderTopColor="gray.900"
        fontSize="lg"
      >
        <Text m={0}>Copyright © 2022 Fysh.dev</Text>
      </BaseContainer>
    </Box>
  )
}
