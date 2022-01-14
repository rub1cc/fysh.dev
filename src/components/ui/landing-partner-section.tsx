import { Container, SimpleGrid, GridItem, Image, Text } from '@chakra-ui/react'

export const LandingPartnerSection = (): JSX.Element => {
  return (
    <Container maxW="6xl" mt={28}>
      <SimpleGrid columns={5} gap={8} alignItems="center">
        <GridItem
          h="50px"
          display="flex"
          justifyContent="center"
          filter="grayscale(1)"
          transition="all"
          transitionDuration="0.3s"
          _hover={{ filter: 'grayscale(0)' }}
        >
          <Image
            h="100%"
            objectFit="contain"
            src="https://mui.com/static/branding/companies/netflix-light.svg"
          />
        </GridItem>
        <GridItem
          h="50px"
          display="flex"
          justifyContent="center"
          filter="grayscale(1)"
          transition="all"
          transitionDuration="0.3s"
          _hover={{ filter: 'grayscale(0)' }}
        >
          <Image
            h="100%"
            objectFit="contain"
            src="https://mui.com/static/branding/companies/spotify-light.svg"
          />
        </GridItem>
        <GridItem
          h="50px"
          display="flex"
          justifyContent="center"
          filter="grayscale(1)"
          transition="all"
          transitionDuration="0.3s"
          _hover={{ filter: 'grayscale(0)' }}
        >
          <Image
            h="100%"
            objectFit="contain"
            src="https://mui.com/static/branding/companies/unity-light.svg"
          />
        </GridItem>
        <GridItem
          h="50px"
          display="flex"
          justifyContent="center"
          filter="grayscale(1)"
          transition="all"
          transitionDuration="0.3s"
          _hover={{ filter: 'grayscale(0)' }}
        >
          <Image
            h="100%"
            objectFit="contain"
            src="https://mui.com/static/branding/companies/nasa-light.svg"
          />
        </GridItem>
        <GridItem
          h="50px"
          display="flex"
          justifyContent="center"
          filter="grayscale(1)"
          transition="all"
          transitionDuration="0.3s"
          _hover={{ filter: 'grayscale(0)' }}
        >
          <Image
            h="100%"
            objectFit="contain"
            src="https://mui.com/static/branding/companies/amazon-light.svg"
          />
        </GridItem>
      </SimpleGrid>
      <Text textAlign="center" w="40ch" mx="auto" fontSize="sm" mt={8}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, dolorem!
      </Text>
    </Container>
  )
}
