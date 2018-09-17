import Link from 'next/link';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const email = cookies.get('email');
console.log(email)
const Header = () => (
  <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link  as='/'><a className="navbar-brand">Shopping App</a></Link>
    </div>
    <ul className="nav navbar-nav">
      <li><Link   as='/' ><a>Home</a></Link></li>
      <li><Link  passHref prefetch href='/registration'><a>Register</a></Link></li>
      {email ? <li><Link  passHref prefetch href='/logout'><a>Logout</a></Link></li>:
      <li><Link  passHref prefetch href='/login'><a>Login</a></Link></li> }
    </ul>
  </div>
</nav>
);

export default Header;
