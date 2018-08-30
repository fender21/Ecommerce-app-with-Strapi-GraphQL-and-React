import Link from 'next/link';
import {cart} from './Cart'

const Header = () => (
  <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link  passHref prefetch href='/'><a className="navbar-brand">WebSiteName</a></Link>
    </div>
    <ul className="nav navbar-nav">
      <li><Link  href='/'><a>Home</a></Link></li>
      <li><Link  passHref prefetch href='/registration'><a>Register</a></Link></li>
      <li><Link  passHref prefetch href='/login'><a>Login</a></Link></li>
      <pre>{cart}</pre>
    </ul>
  </div>
</nav>
);

export default Header;
