import { chakra, ChakraComponent } from '@chakra-ui/react'

export const HighlightedText: React.FC<ChakraComponent<'span'>> = (
  props: any
): JSX.Element => (
  <chakra.span
    bgGradient="linear(to-r, purple.500, purple.700)"
    bgClip="text"
    {...props}
  >
    {props.children}
  </chakra.span>
)
