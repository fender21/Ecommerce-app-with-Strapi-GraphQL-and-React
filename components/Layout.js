import Head from 'next/head';

const Layout = ({ title, children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
      <title>{title}</title>
    </Head>

    <div className="container">
      { children }
    </div>
  </div>
);

export default Layout;
