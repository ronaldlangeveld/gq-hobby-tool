import Document, { Html, Head, Main, NextScript }  from 'next/document'
import { ServerStyleSheet } from 'styled-components'


export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }

  }
  render() {

    return(
      <Html>
        <Head>
          
	<title>Video Game Addiction: Ready To Quit? Join Game Quitters Today</title>
	<meta name="description" content="Game Quitters is the largest support community for video game addiction. If you&#039;re ready to quit playing video games, you&#039;re in the right place. Join today!" />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<link rel="canonical" href="https://gamequitters.com/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Video Game Addiction: Ready To Quit? Join Game Quitters Today" />
	<meta property="og:description" content="Game Quitters is the largest support community for video game addiction. If you&#039;re ready to quit playing video games, you&#039;re in the right place. Join today!" />
	<meta property="og:url" content="https://gamequitters.com/" />
	<meta property="og:site_name" content="Game Quitters" />
	<meta property="article:publisher" content="https://gamequitters.com/gamequitters" />
	<meta property="article:modified_time" content="2020-02-24T14:45:16+00:00" />
	<meta property="og:image" content="https://gamequitters.com/wp-content/uploads/Twitter-banner-1500-x-500.jpg" />
	<meta property="og:image:width" content="1000" />
	<meta property="og:image:height" content="333" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://gamequitters.com/wp-content/uploads/Twitter-banner-1500-x-500.jpg" />
	<meta name="twitter:site" content="@gamequitters" />
  <link rel='stylesheet' id='marketers-delight-typekit-css'  href='https://use.typekit.net/zgz6cbf.css?ver=5.7.2' type='text/css' media='all' />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}