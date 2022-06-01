import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,800&family=Poppins:wght@700&display=swap"
            rel="stylesheet"
          />
          {/* <link
            rel="icon"
            href="https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200X200.png"
            type="image/x-icon"
          ></link> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
