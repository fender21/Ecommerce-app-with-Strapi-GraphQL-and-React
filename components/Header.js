import Link from 'next/link';

const Header = () => (
  <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link  passHref prefetch href='/'><a className="navbar-brand">Shopping App</a></Link>
    </div>
    <ul className="nav navbar-nav">
      <li><Link  href='/'><a>Home</a></Link></li>
      <li><Link  passHref prefetch href='/registration'><a>Register</a></Link></li>
      <li><Link  passHref prefetch href='/login'><a>Login</a></Link></li>
    </ul>
  </div>
</nav>
);

export default Header;
