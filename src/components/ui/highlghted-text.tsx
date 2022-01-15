import { chakra, ChakraComponent } from '@chakra-ui/react'

export const HighlightedText: ChakraComponent<'span', any> = (
  props: any
): JSX.Element => (
  <chakra.span color="white" bg="black" {...props}>
    {props.children}
  </chakra.span>
)
