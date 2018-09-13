import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  /* eslint-disable react/jsx-filename-extension */

  render() {
    return (
      <html lang="de">
        <Head>
          <title>Dashboard Boilerplate</title>
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }

  /* eslint-enable react/jsx-filename-extension */
}