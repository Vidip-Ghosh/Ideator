import './Navbar.css'
import { Link } from 'react-router-dom';
import img from './Ideator_1.png'

export default function Navbar() {
  const handleHamburgerClick = () => {
    const navLink = document.querySelector('.nav__link');
    navLink.classList.toggle('hide');
  };
  return (
    <div>
      <nav className="nav">
        <Link href="/" className="logo"><img src={img} alt="" /></Link>
        <div className="hamburger" onClick={handleHamburgerClick}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        <div className="nav__link hide">
          <Link href='/login'>Login</Link>
          <Link href='/register'>Register</Link>
          <Link href='/'>Generate Idea</Link>
        </div>
      </nav>
    </div>
  )
}