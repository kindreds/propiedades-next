import React from "react";
import Document, {
  Html,
  Head,
  Main,
  NextScript as OriginalNextScript,
} from "next/document";

class NextScript extends OriginalNextScript {
  getScripts() {
    return super.getScripts().map((script) => {
      return React.cloneElement(script, {
        key: script.props.src,
        defer: true,
        async: false,
      });
    });
  }
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
