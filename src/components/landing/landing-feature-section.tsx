import {
  AspectRatio,
  Box,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import { BaseContainer } from '../ui/base-container'
import { PrimaryButton } from '../ui/button'
import { SectionTitle } from '../ui/section-title'

export const LandingFeatureSection = (): JSX.Element => {
  return (
    <Box py={24}>
      <BaseContainer>
        <Box flex="1">
          <SectionTitle
            title="Projects"
            subtitle={<>Latest projects we've worked on</>}
          />
          <SimpleGrid columns={2} mt={12} gap={8}>
            <AspectRatio
              ratio={1}
              borderWidth="2px"
              borderColor="black"
              boxShadow="10px 10px black"
            >
              <GridItem h="100%" w="100%">
                <Box p={8} w="100%" h="100%" position="relative">
                  <Image
                    src="https://miro.medium.com/max/3840/1*rPypt_bQdSNMxfgOKERKzA.jpeg"
                    position="absolute"
                    w="100%"
                    top={0}
                    left={0}
                    h="100%"
                    objectFit="cover"
                  />
                  <Box
                    position="relative"
                    bg="black"
                    borderWidth="2px"
                    borderColor="black"
                    p={6}
                    color="white"
                  >
                    <Text m={0}>lorem</Text>
                    <Heading as="h3" fontSize="2xl">
                      Easily rent an apartment in your city
                    </Heading>
                  </Box>
                </Box>
              </GridItem>
            </AspectRatio>
            <AspectRatio
              ratio={1}
              borderWidth="2px"
              borderColor="black"
              boxShadow="10px 10px black"
            >
              <GridItem h="100%" w="100%">
                <Box p={8} w="100%" h="100%" position="relative">
                  <Image
                    src="https://cdn.dribbble.com/users/25514/screenshots/16646929/media/bd9794b20413f0c243535a09330d1338.png?compress=1&resize=1600x1200&vertical=top"
                    position="absolute"
                    w="100%"
                    top={0}
                    left={0}
                    h="100%"
                    objectFit="cover"
                  />
                  <Box
                    position="relative"
                    bg="black"
                    borderWidth="2px"
                    borderColor="black"
                    p={6}
                    color="white"
                  >
                    <Text m={0}>lorem</Text>
                    <Heading as="h3" fontSize="2xl">
                      Order your food online from your favorite restaurants
                    </Heading>
                  </Box>
                </Box>
              </GridItem>
            </AspectRatio>
            <AspectRatio
              ratio={1}
              borderWidth="2px"
              borderColor="black"
              boxShadow="10px 10px black"
            >
              <GridItem h="100%" w="100%">
                <Box p={8} w="100%" h="100%" position="relative">
                  <Image
                    src="https://cdn.dribbble.com/users/2366584/screenshots/15978830/media/052076454d7770e303616f30896b1c3a.png?compress=1&resize=800x600&vertical=top"
                    position="absolute"
                    w="100%"
                    top={0}
                    left={0}
                    h="100%"
                    objectFit="cover"
                  />
                  <Box
                    position="relative"
                    bg="black"
                    borderWidth="2px"
                    borderColor="black"
                    p={6}
                    color="white"
                  >
                    <Text m={0}>lorem</Text>
                    <Heading as="h3" fontSize="2xl">
                      Your personal assistant is here to help you
                    </Heading>
                  </Box>
                </Box>
              </GridItem>
            </AspectRatio>
            <AspectRatio
              ratio={1}
              borderWidth="2px"
              borderColor="black"
              boxShadow="10px 10px black"
            >
              <GridItem h="100%" w="100%">
                <Box p={8} w="100%" h="100%" position="relative">
                  <Image
                    src="https://cdn.dribbble.com/users/27547/screenshots/17268245/media/6a915fef0bed29e12ce16d6d9fed594b.jpg?compress=1&resize=1600x1200&vertical=top"
                    position="absolute"
                    w="100%"
                    top={0}
                    left={0}
                    h="100%"
                    objectFit="cover"
                  />
                  <Box
                    position="relative"
                    bg="black"
                    borderWidth="2px"
                    borderColor="black"
                    p={6}
                    color="white"
                  >
                    <Text m={0}>lorem</Text>
                    <Heading as="h3" fontSize="2xl">
                      Read your favorite books in a single click
                    </Heading>
                  </Box>
                </Box>
              </GridItem>
            </AspectRatio>
          </SimpleGrid>
        </Box>
        <Box textAlign="center" mt={24}>
          <PrimaryButton size="3xl">See more projects</PrimaryButton>
        </Box>
      </BaseContainer>
    </Box>
  )
}
