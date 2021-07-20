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
          
	<title>Hobby Tool | Find New Activities to Replace Gaming</title>
	<meta name="description" content="Need new activities to replace gaming? Use our hobby tool. Contains 70+ different ideas with 12 filters to select new hobbies from." />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<link rel="canonical" href="https://gamequitters.com/hobby-tool" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Hobby Tool | Find New Activities to Replace Gaming" />
	<meta property="og:description" content="Need new activities to replace gaming? Use our hobby tool. Contains 70+ different ideas with 12 filters to select new hobbies from." />
	<meta property="og:url" content="https://gamequitters.com/hobby-tool" />
	<meta property="og:site_name" content="Game Quitters" />
	<meta property="article:publisher" content="https://www.facebook.com/GameQuitters/" />
	<meta property="og:image" content="https://gamequitters.com/wp-content/uploads/Twitter-banner-1500-x-500.jpg" />
	<meta property="og:image:width" content="1000" />
	<meta property="og:image:height" content="333" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content="https://gamequitters.com/wp-content/uploads/Twitter-banner-1500-x-500.jpg" />
	<meta name="twitter:site" content="@gamequitters" />
  <link rel='stylesheet' id='marketers-delight-typekit-css'  href='https://use.typekit.net/zgz6cbf.css?ver=5.7.2' type='text/css' media='all' />
  <link rel="icon" 
      type="image/png" 
      href="/hobby-tool/icon.png"></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}