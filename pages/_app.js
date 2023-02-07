import '../styles/globals.css'
import Sidebar from '../components/Admin/Sidebar'
import GardenerSidebar from '../components/Gardener/Sidebar'
import NurserySidebar from '../components/Nursery/Sidebar'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { theme } from '../theme/theme'
import { MantineProvider } from '@mantine/core'

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

  if (router.pathname.startsWith('/customer')) {
    return (
      <MantineProvider theme={{ fontFamily: 'Poppins' }}>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </ApolloProvider>
      </MantineProvider>
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
