import {
  Box,
  Container,
  HStack,
  Stack,
  SimpleGrid,
  GridItem,
  Text,
  Image,
} from '@chakra-ui/react'
import { Logo } from './logo'

export const LandingFooterSection = (): JSX.Element => {
  return (
    <Box
      borderTopWidth="1px"
      borderTopColor="blueGray.200"
      fontSize="sm"
      bg="blueGray.50"
    >
      <Container maxW="6xl" py={24} px={0}>
        <HStack alignItems="flex-start">
          <Box flex="2">
            <Logo />
            <Stack mt={8}>
              <Box>
                <Text fontWeight="bold" m={0}>
                  Call center
                </Text>
                <Text m={0}>+12345678</Text>
              </Box>
              <Box>
                <Text fontWeight="bold" m={0}>
                  Address
                </Text>
                <Text m={0}>Jl. Lorem ipsum dolor sit amet.</Text>
              </Box>
            </Stack>
          </Box>
          <SimpleGrid columns={3} gap={4}>
            <GridItem>
              <Stack spacing={10}>
                <Text fontWeight="bold" m={0}>
                  Company
                </Text>
                <Stack spacing={1}>
                  <Text m={0}>About</Text>
                  <Text m={0}>Blog</Text>
                  <Text m={0}>Changelog</Text>
                  <Text m={0}>Pricing</Text>
                </Stack>
              </Stack>
            </GridItem>
            <GridItem>
              <Stack spacing={10}>
                <Text fontWeight="bold" m={0}>
                  Support
                </Text>
                <Stack spacing={1}>
                  <Text m={0}>Helpdesk</Text>
                </Stack>
              </Stack>
            </GridItem>
            <GridItem>
              <Stack spacing={10}>
                <Text fontWeight="bold" m={0}>
                  Download our app
                </Text>
                <Stack spacing={1}>
                  <Box>
                    <Image src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/assets/2020/12/10/688ad290-7149-4465-b118-23ea3966ccda-1607591614346-f4450af6b8627940554c4f7ef1a63379.png" />
                  </Box>
                  {/* <Box>
                      <Image src="https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/original/assets/2020/12/10/48426f93-bbfc-49b4-ae59-291676986d24-1607591614088-d2285921c100b89f80b011edabd8ccad.png" />
                    </Box> */}
                </Stack>
              </Stack>
            </GridItem>
          </SimpleGrid>
        </HStack>
      </Container>
      <Container
        maxW="6xl"
        py={8}
        px={0}
        borderTopWidth="1px"
        borderTopColor="blueGray.200"
      >
        <Text fontSize="sm" m={0}>
          Copyright © 2022
        </Text>
      </Container>
    </Box>
  )
}
