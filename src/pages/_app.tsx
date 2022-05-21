import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from 'theme'
import { GlobalStyles } from 'theme/GlobalStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
