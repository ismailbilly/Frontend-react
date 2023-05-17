import './NavBar.css'
const Navbar = () => {
  return (
    <nav>
        <a href="#">LOGO</a>
        <div className="menu">
            <ul className='nav-menu'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Sign in</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar