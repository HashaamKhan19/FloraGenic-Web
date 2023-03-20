import { createEmotionCache, MantineProvider } from "@mantine/core";
import { ThemeProvider } from "@mui/material";
import Sidebar from "../components/Admin/Sidebar";
import Footer from "../components/Customer/Layout/Footer";
import Navbar from "../components/Customer/Layout/Navbar";
import GardenerSidebar from "../components/Gardener/Sidebar";
import Dashboard from "../components/Contact/Dashborad";
import NurserySidebar from "../components/Nursery/Sidebar";
import "../styles/globals.css";
import ShopContextProvider from "../context/shopContextProvider";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { theme } from "../theme/theme";
import { Toaster } from "react-hot-toast";
import AuthProvider from "../context/authContext";

const appendCache = createEmotionCache({ key: "mantine", prepend: false });

function MyApp({ Component, pageProps, router }) {
  const client = new ApolloClient({
    uri: "https://floragenic.herokuapp.com/graphql",
    // uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });

  if (router.pathname.startsWith("/admin")) {
    return (
      <AuthProvider>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <Sidebar>
              <Component {...pageProps} />
            </Sidebar>
          </ThemeProvider>
          <Toaster
            toastOptions={{
              duration: 3000,
            }}
          />
        </ApolloProvider>
      </AuthProvider>
    );
  }

  if (router.pathname.startsWith("/customer")) {
    return (
      <AuthProvider>
        <MantineProvider
          theme={{
            fontFamily: "Poppins",
          }}
          emotionCache={appendCache}
          withGlobalStyles
          withNormalizeCSS
        >
          <ApolloProvider client={client}>
            <ShopContextProvider>
              <ThemeProvider theme={theme}>
                <Navbar />
                <Component {...pageProps} />
                <Footer />
              </ThemeProvider>
            </ShopContextProvider>
          </ApolloProvider>
          <Toaster
            toastOptions={{
              duration: 3000,
            }}
          />
        </MantineProvider>
      </AuthProvider>
    );
  }

  if (router.pathname.startsWith("/gardener")) {
    return (
      <AuthProvider>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <GardenerSidebar>
              <Component {...pageProps} />
            </GardenerSidebar>
          </ThemeProvider>
          <Toaster
            toastOptions={{
              duration: 3000,
            }}
          />
        </ApolloProvider>
      </AuthProvider>
    );
  }

  if (router.pathname.startsWith("/nursery")) {
    return (
      <AuthProvider>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <NurserySidebar>
              <Component {...pageProps} />
            </NurserySidebar>
          </ThemeProvider>
          <Toaster
            toastOptions={{
              duration: 3000,
            }}
          />
        </ApolloProvider>
      </AuthProvider>
    );
  }

  if (router.pathname.startsWith("/contact")) {
    return (
      <AuthProvider>
        <MantineProvider
          theme={{
            fontFamily: "Poppins",
          }}
          emotionCache={appendCache}
          withGlobalStyles
          withNormalizeCSS
        >
          <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
              <Dashboard />
              <Component {...pageProps} />
            </ThemeProvider>
          </ApolloProvider>
          <Toaster
            toastOptions={{
              duration: 3000,
            }}
          />
        </MantineProvider>
      </AuthProvider>
    );
  }

  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
        <Toaster />
      </ApolloProvider>
    </AuthProvider>
  );
}

export default MyApp;
