import Link from 'next/link';

const Header = () => (
  <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link  passHref prefetch href='/'><a className="navbar-brand">WebSiteName</a></Link>
    </div>
    <ul className="nav navbar-nav">
      <li className="active"><a href="#">Home</a></li>
      <li><Link  passHref prefetch href='/'><a>Page 1</a></Link></li>
      <li><Link  passHref prefetch href='/'><a>Page 2</a></Link></li>
      <li><Link  passHref prefetch href='/'><a>Page 3</a></Link></li>
    </ul>
  </div>
</nav>
);

export default Header;