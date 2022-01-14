import { Box, Button, Container, HStack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { Logo } from './logo'

export const LandingNavbarSection = (): JSX.Element => {
  const router = useRouter()
  return (
    <Box
      bg="rgba(255, 255, 255, 0.65)"
      zIndex="10"
      borderBottomWidth="1px"
      borderBottomColor="blueGray.100"
      backdropFilter="blur(20px)"
      position="sticky"
      top={0}
    >
      <Container maxW="6xl" py={3} px={0}>
        <HStack justifyContent="space-between">
          <HStack spacing={8}>
            <Logo />
            <HStack>
              <Button
                size="sm"
                variant="ghost"
                fontSize="sm"
                fontWeight="black"
              >
                Docs
              </Button>
              <Button
                size="sm"
                variant="ghost"
                fontSize="sm"
                fontWeight="black"
              >
                Pricing
              </Button>
            </HStack>
          </HStack>
          <Button
            size="sm"
            bg="purple.500"
            color="white"
            _hover={{ bg: 'purple.500' }}
            _active={{ bg: 'purple.500' }}
            onClick={() => router.push('/login')}
          >
            Login →
          </Button>
        </HStack>
      </Container>
    </Box>
  )
}
