import { Box, Heading } from '@chakra-ui/react'

export const Logo: React.FC = (): JSX.Element => {
  return (
    <Box
      bgGradient="linear(to-tr, purple.500, purple.700)"
      w="40px"
      h="40px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      rounded="full"
    >
      <Heading m={0} fontSize="lg" color="white">
        d
      </Heading>
    </Box>
  )
}
