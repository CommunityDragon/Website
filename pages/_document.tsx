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
    return (
      <Html lang='en' className='uk-background-muted uk-background-secondary uk-light'>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument