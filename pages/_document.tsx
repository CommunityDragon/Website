import syncFetchGlobalConfig from '@fetch/sync-global-config'
import parse from 'html-react-parser'
import Document, {
  DocumentContext,
  NextScript,
  Html,
  Head,
  Main,
} from 'next/document'

class MyDocument extends Document {
  /**
   * initial page props
   * 
   * @param ctx document context
   */
  static async getInitialProps(ctx: DocumentContext) {
    return await Document.getInitialProps(ctx)
  }
  
  render() {
    let ghostHeadScript = null
    let ghostFootScript = null

    const config = syncFetchGlobalConfig()
    if (config) {
      if (config.codeinjection_head) ghostHeadScript = parse(config.codeinjection_head)
      if (config.codeinjection_foot) ghostFootScript = parse(config.codeinjection_foot)
    }

    return (
      <Html lang='en' className='uk-background-muted uk-background-secondary uk-light'>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400&display=swap"
            rel="stylesheet"
          />
          {ghostHeadScript}
        </Head>
        <body>
          <Main />
          <NextScript />
          {ghostFootScript}
        </body>
      </Html>
    )
  }
}

export default MyDocument