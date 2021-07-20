import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;

  }
  body{
    position: relative;
    font-size: 1.4rem;
    font-family: "jaf-domus";
    margin:0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-y: scroll;
  }
`

const theme = {
  colors: {
    primary: '#E2574C',
    dark: '#323032',
    light: '#ebebe9'
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
