import { Box, Heading } from '@chakra-ui/react'

export const Logo: React.FC = (): JSX.Element => {
  return (
    <Box
      px={4}
      py={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Heading m={0} fontSize="lg">
        {'<fysh<'}
      </Heading>
    </Box>
  )
}
