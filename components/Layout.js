import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Head from 'next/head';

// import css แบบนี้ต้องติดตั้ง module @zeit/next-css ก่อน
// import "../static/css/style.css";

// import sass แบบนี้ต้องติดตั้ง module @zeit/next-sass, node-sass ก่อน
import "../static/css/style.scss";

class Layout extends Component {
  render() {
    const { children, title = 'NextJS : Server Side Rendering' } = this.props;
    return (
      <div>
        <Head>
          <meta charset="utf-8" />
          <title>{title}</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />

          {/* <link rel="stylesheet" href="/static/css/style.css"/> */}
          <link rel="stylesheet" href="/_next/static/css/style.css"/>
        </Head>
        <Header />
        { children }
        <Footer company="Thanapon" email="thanapon.yenjam@gmail.com" />
      </div>
    );
  }
}

export default Layout;