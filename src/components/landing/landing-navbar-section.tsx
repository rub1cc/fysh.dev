import { Box, HStack } from '@chakra-ui/react'
import { BaseContainer } from '../ui/base-container'
import { PrimaryButton, SecondaryButton } from '../ui/button'
import { Logo } from '../ui/logo'

export const LandingNavbarSection = (): JSX.Element => {
  return (
    <Box
      bg="rgba(255, 255, 255, 0.65)"
      zIndex="10"
      borderBottomWidth="2px"
      borderBottomColor="black"
      backdropFilter="blur(5px)"
      position="sticky"
      top={0}
    >
      <BaseContainer py={3} px={0}>
        <HStack justifyContent="space-between">
          <HStack spacing={8}>
            <Logo />
          </HStack>
          <HStack>
            <SecondaryButton variant="ghost">Home</SecondaryButton>
            <SecondaryButton variant="ghost">Our Works</SecondaryButton>
            <PrimaryButton>Contact Us</PrimaryButton>
          </HStack>
        </HStack>
      </BaseContainer>
    </Box>
  )
}
