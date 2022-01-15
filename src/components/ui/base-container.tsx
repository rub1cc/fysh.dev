import { ComponentWithAs, Container, ContainerProps } from '@chakra-ui/react'
import React from 'react'

export const BaseContainer: ComponentWithAs<'div', ContainerProps> = (
  props
): JSX.Element => {
  return (
    <Container maxW="6xl" {...props}>
      {props.children}
    </Container>
  )
}
