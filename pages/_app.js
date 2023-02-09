import '../styles/globals.css'
import Sidebar from '../components/Admin/Sidebar'
import GardenerSidebar from '../components/Gardener/Sidebar'
import NurserySidebar from '../components/Nursery/Sidebar'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { theme } from '../theme/theme'
import { MantineProvider, createEmotionCache } from '@mantine/core'
import Navbar from '../components/Customer/Layout/Navbar'
import Footer from '../components/Customer/Layout/Footer'

const appendCache = createEmotionCache({ key: 'mantine', prepend: false })

function MyApp({ Component, pageProps, router }) {
  const client = new ApolloClient({
    uri: 'https://floragenic.herokuapp.com/graphql',
    cache: new InMemoryCache(),
  })

  if (router.pathname.startsWith('/admin')) {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Sidebar>
            <Component {...pageProps} />
          </Sidebar>
        </ThemeProvider>
      </ApolloProvider>
    )
  }

  if (router.pathname.startsWith('/customer')) {
    return (
      <MantineProvider
        theme={{ fontFamily: 'Poppins' }}
        emotionCache={appendCache}
        withGlobalStyles
        withNormalizeCSS
      >
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            {/* <Navbar /> */}
            <Component {...pageProps} />
            {/* <Footer /> */}
          </ThemeProvider>
        </ApolloProvider>
      </MantineProvider>
    )
  }

  if (router.pathname.startsWith('/gardener')) {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <GardenerSidebar>
            <Component {...pageProps} />
          </GardenerSidebar>
        </ThemeProvider>
      </ApolloProvider>
    )
  }

  if (router.pathname.startsWith('/nursery')) {
    return (
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <NurserySidebar>
            <Component {...pageProps} />
          </NurserySidebar>
        </ThemeProvider>
      </ApolloProvider>
    )
  }

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default MyApp
