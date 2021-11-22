import { CssBaseline } from '@mui/material'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline enableColorScheme/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
