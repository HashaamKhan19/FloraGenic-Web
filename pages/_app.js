import '../styles/globals.css'
import Sidebar from '../components/Admin/Sidebar'
import { ThemeProvider } from '@mui/material'
import { createTheme } from '@mui/material'

function MyApp({ Component, pageProps, router }) {
  const theme = createTheme({
    typography: {
      fontFamily: ['Poppins'].join(','),
    },

    neutral: {
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },
    shape: {
      borderRadius: 8,
    },
    action: {
      active: '#6B7280',
      focus: 'rgba(55, 65, 81, 0.12)',
      hover: 'rgba(55, 65, 81, 0.08)',
      selected: 'rgba(55, 65, 81, 0.08)',
      disabledBackground: 'rgba(55, 65, 81, 0.12)',
      disabled: 'rgba(55, 65, 81, 0.26)',
    },
    palette: {
      primary: {
        main: '#62A82C',
        light: '#b7ff80',
        dark: '#4A761F',
        contrastText: '#374151',
      },
      secondary: {
        main: '#1D9D45',
        light: '#379D1D',
        dark: '#266E14',
        contrastText: '#d8ffba',
      },
      background: {
        default: '#F8FAFC',
        paper: '#FFFFFF',
        grey: '#eff0f2',
      },
      text: {
        primary: '#121828',
        secondary: '#65748B',
        disabled: 'rgba(55, 65, 81, 0.48)',
      },
      success: {
        main: '#14B8A6',
        light: '#43C6B7',
        dark: '#0E8074',
        contrastText: '#FFFFFF',
      },
      info: {
        main: '#2196F3',
        light: '#64B6F7',
        dark: '#8238d1',
        contrastText: '#FFFFFF',
      },
      warning: {
        main: '#FFB020',
        light: '#FFBF4C',
        dark: '#B27B16',
        contrastText: '#FFFFFF',
      },
      error: {
        main: '#D14343',
        light: '#DA6868',
        dark: '#922E2E',
        contrastText: '#FFFFFF',
      },
    },
  })
  if (router.pathname.startsWith('/admin')) {
    return (
      <ThemeProvider theme={theme}>
        <Sidebar>
          <Component {...pageProps} />
        </Sidebar>
      </ThemeProvider>
    )
  }

  return <Component {...pageProps} />
}

export default MyApp
