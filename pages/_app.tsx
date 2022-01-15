import ProgressBar from '@badrap/bar-of-progress'
import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { Provider as SessionProvider } from 'next-auth/client'
import { AppProps } from 'next/app'
import Router from 'next/router'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Hydrate } from 'react-query/hydration'
import theme from '~/definitions/chakra/theme'
import '@fontsource/ibm-plex-sans'
import '~/styles/global.css'

const progress = new ProgressBar({
  size: 5,
  color: 'var(--chakra-colors-brand-purple)',
  delay: 100,
})

// this fixes safari jumping to the bottom of the page
// when closing the search modal using the `esc` key
if (typeof window !== 'undefined') {
  progress.start()
  progress.finish()
}

Router.events.on('routeChangeStart', () => progress.start())
Router.events.on('routeChangeComplete', () => progress.finish())
Router.events.on('routeChangeError', () => progress.finish())

const Noop: React.FC = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const queryClient = new QueryClient()
  const Layout = (Component as any)?.layoutProps?.Layout || Noop
  const isProteced = (Component as any)?.layoutProps?.protected

  return (
    <SessionProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <Global
          styles={`
          /* latin */
          @font-face {
            font-family: 'PlusJakartaSans-ExtraBold';
            font-style: normal;
            font-weight: 800;
            font-display: swap;
            src: url('./fonts/PlusJakartaSans-ExtraBold.woff') format('woff');
          }
      `}
        />
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Hydrate state={pageProps.dehydratedState}>
            {isProteced ? (
              <Layout pageProps={pageProps}>
                <Component {...pageProps} />
              </Layout>
            ) : (
              <Layout pageProps={pageProps}>
                <Component {...pageProps} />
              </Layout>
            )}
          </Hydrate>
        </QueryClientProvider>
      </ChakraProvider>
    </SessionProvider>
  )
}

export default MyApp
