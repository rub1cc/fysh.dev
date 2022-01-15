import { GridItem, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { BaseContainer } from '../ui/base-container'

export const LandingPartnerSection = (): JSX.Element => {
  return (
    <BaseContainer py={32} pb={24}>
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
            src="https://crowde.co/static/images/logo-color2.png"
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
            src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/4dc03753c6df7a796b56c4e84fe3b7ef.png"
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
            src="http://lipi.go.id/public/themes/web/assets/img/logo.jpg"
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
            src="https://www.bkpm.go.id/images/uploads/logo/Logo_Kementerian_Investasi_BKPM_Warna_Landscape_ID.png"
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
            src="https://webmail.ap1.co.id/asset/logo/logoap1.png"
          />
        </GridItem>
      </SimpleGrid>
      <Text textAlign="center" w="29ch" mx="auto" mt={16}>
        We have helped various organizations to grow their business.
      </Text>
    </BaseContainer>
  )
}
