import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import './NavBar.css'
const Navbar = ({cartCount}) => {
  return (
    <nav>
      <a href="#">LOGO</a>
      <div className="menu">
        <ul className="nav-menu">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Sign in</li>
        </ul>
      </div>
      <div style={{ position: "relative" }}>
        <AiOutlineShoppingCart size={30} />
        <div id="cart-no">{cartCount}</div>
      </div>
      <Link to="login">Login</Link>
      <Link to="old">Old Products</Link>
    </nav>
  );
}

export default Navbar