import { Button, ComponentWithAs, ButtonProps } from '@chakra-ui/react'

export const PrimaryButton: ComponentWithAs<'button', ButtonProps> = (
  props
) => {
  return (
    <Button
      bg="black"
      color="white"
      borderWidth="2px"
      rounded="none"
      borderColor="black"
      _hover={{ bg: 'white', color: 'black' }}
      _active={{ bg: 'white', color: 'black' }}
      p={4}
      {...props}
    >
      {props.children}
    </Button>
  )
}
export const SecondaryButton: ComponentWithAs<'button', ButtonProps> = (
  props
) => {
  return (
    <Button
      color="black"
      borderWidth="2px"
      borderColor="transparent"
      rounded="none"
      _hover={{ borderColor: 'black', color: 'black', bg: 'white' }}
      _active={{ borderColor: 'black', color: 'black', bg: 'white' }}
      p={4}
      {...props}
    >
      {props.children}
    </Button>
  )
}
