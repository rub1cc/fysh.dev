import { ComponentWithAs, Stack, StackProps } from '@chakra-ui/react'

export const Card: ComponentWithAs<'div', StackProps> = (
  props
): JSX.Element => {
  return (
    <Stack
      borderWidth="1px"
      borderColor="black"
      bg="white"
      p={6}
      // rounded="lg"
      boxShadow="10px 10px black"
      {...props}
    >
      {props.children}
    </Stack>
  )
}
