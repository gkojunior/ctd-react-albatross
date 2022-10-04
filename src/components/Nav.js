import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle('responsive_nav');
	};

	return (
		<header className='topnav'>
			<h3>George Owusu Jr</h3>
			<nav ref={navRef} >
				<a href='#/'>Linkedin</a>
				<a href='#/'>GitHub</a>
				<a href='#/'>Blog</a>
				<a href='#/'>Home</a>
				<button className='nav-btn nav-close-btn' onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className='nav-btn' onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
};

export default Nav;
