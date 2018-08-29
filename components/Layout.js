import Head from 'next/head';

import Header from './Header';

const Layout = ({ title, children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
      <title>{title}</title>
    </Head>

    <div className="container">
      <Header />
      { children }
    </div>
  </div>
);

export default Layout;
