import { createEmotionCache, MantineProvider } from "@mantine/core";
import { ThemeProvider } from "@mui/material";
import Sidebar from "../components/Admin/Sidebar";
import Footer from "../components/Customer/Layout/Footer";
import Navbar from "../components/Customer/Layout/Navbar";
import GardenerSidebar from "../components/Gardener/Sidebar";
import Dashboard from "../components/Contact/Dashboard";
import NurserySidebar from "../components/Nursery/Sidebar";
import "../styles/globals.css";
import ShopContextProvider from "../context/shopContextProvider";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { theme } from "../theme/theme";
import { Toaster } from "react-hot-toast";
import AuthProvider, { AuthContext } from "../context/authContext";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { WishlistProvider } from "../context/wishlistContext";
import { useContext } from "react";

const appendCache = createEmotionCache({ key: "mantine", prepend: false });

function MyApp({ Component, pageProps, router }) {
  const client = new ApolloClient({
    // uri: "https://floragenic.herokuapp.com/graphql",
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });

  if (router.pathname.startsWith("/admin")) {
    return (
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
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
      </GoogleOAuthProvider>
    );
  }

  if (router.pathname.startsWith("/customer")) {
    return (
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
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
              <WishlistProvider>
                <ShopContextProvider>
                  <ThemeProvider theme={theme}>
                    <Navbar />
                    <Component {...pageProps} />
                    <Footer />
                  </ThemeProvider>
                </ShopContextProvider>
              </WishlistProvider>
            </ApolloProvider>
            <Toaster
              toastOptions={{
                duration: 3000,
              }}
            />
          </MantineProvider>
        </AuthProvider>
      </GoogleOAuthProvider>
    );
  }

  if (router.pathname.startsWith("/gardener")) {
    return (
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
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
      </GoogleOAuthProvider>
    );
  }

  if (router.pathname.startsWith("/nursery")) {
    return (
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
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
      </GoogleOAuthProvider>
    );
  }

  if (router.pathname.startsWith("/contact")) {
    return (
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
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
      </GoogleOAuthProvider>
    );
  }

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <ApolloProvider client={client}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
          <Toaster />
        </ApolloProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default MyApp;
