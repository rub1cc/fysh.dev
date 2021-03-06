import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react'
import { BaseContainer } from '../ui/base-container'
import { HighlightedText } from '../ui/highlghted-text'

export const LandingFAQSection = (): JSX.Element => {
  return (
    <Box py={24}>
      <BaseContainer>
        <Stack spacing={0}>
          <Text color="blue.500" fontWeight="bold" fontSize="sm">
            Lorem, ipsum dolor.
          </Text>
          <Heading
            fontFamily="PlusJakartaSans-ExtraBold"
            fontSize="4xl"
            w="20ch"
            lineHeight="short"
          >
            Lorem ipsum dolor sit amet consectetur{' '}
            <HighlightedText>adipisicing</HighlightedText> elit.
          </Heading>
        </Stack>
        <Accordion allowMultiple mt={12}>
          {[...Array(5)].map(() => (
            <AccordionItem>
              <AccordionButton
                py={8}
                _hover={{ bg: 'white' }}
                _focus={{ outline: 'none' }}
              >
                <Box flex="1" textAlign="left">
                  <Heading as="h2" size="md" fontWeight="medium">
                    Lorem ipsum dolor sit amet?
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={8} pt={0}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
                facere?
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </BaseContainer>
    </Box>
  )
}
