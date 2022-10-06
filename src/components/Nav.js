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
				<a href='https://www.linkedin.com/in/george-owusu-2a853411b/' target='blank'>Linkedin</a>
				<a href='https://github.com/gkojunior' target='blank' >GitHub</a>
				<a href='https://github.com/gkojunior/hacker-stories' target='blank'>Blog</a>
				<a href='https://gkojunior.github.io/personal-portfolio/' target='blank'>Home</a>
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
