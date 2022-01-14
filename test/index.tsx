import React, { ReactElement, ReactNode } from 'react'
import {
  render as baseRender,
  RenderOptions,
  RenderResult,
} from '@testing-library/react'

import { ChakraProvider } from '@chakra-ui/react'

import { QueryClient, QueryClientProvider } from 'react-query'
import theme from '~/definitions/chakra/theme'

/**
 * Custom renderer example with @testing-library/react
 * You can customize it to your needs.
 *
 * To learn more about customizing renderer,
 * please visit https://testing-library.com/docs/react-testing-library/setup
 */
export const AllTheProviders: React.FC<{ children: ReactNode }> = ({
  children,
}): JSX.Element => {
  const queryClient = new QueryClient()

  return (
    <>
      <ChakraProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ChakraProvider>
    </>
  )
}

const render = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult =>
  baseRender(ui, { wrapper: AllTheProviders, ...options }) as RenderResult

// re-export everything
export * from '@testing-library/react'

// override render method
export { render }
