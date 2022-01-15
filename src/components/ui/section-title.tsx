import { ComponentWithAs, Heading, Stack, StackProps } from '@chakra-ui/react'

export const SectionTitle: ComponentWithAs<
  'div',
  StackProps & {
    title: string | React.ReactNode
    subtitle: string | React.ReactNode
  }
> = (props) => {
  return (
    <Stack spacing={0}>
      {/* <Text color="blue.500" fontWeight="bold">
        {props.title}
      </Text> */}
      <Heading
        fontFamily="PlusJakartaSans-ExtraBold"
        fontSize="5xl"
        w="20ch"
        lineHeight="short"
      >
        {props.subtitle}
      </Heading>
    </Stack>
  )
}
