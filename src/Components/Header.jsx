import React, { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom

const Header = () => {
	// // // // // const [isOpen, setIsOpen] = useState(false);

	// // // // // const toggleMenu = () => {
	// // // // // 	setIsOpen(!isOpen);
	// // // // // };

	return (
		<header className="flex justify-between items-center bg-gray-800 text-white p-4">
			<Link to="/" className="text-xl font-bold">
			<img src=""/>
			</Link>

			{/* <button
				className="md:hidden focus:outline-none"
				onClick={toggleMenu}
			>
				{isOpen ? (
					<svg
						className="fill-current h-6 w-6"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M4.707 3.707a1 1 0 011.414 0L10 8.293l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10L4.293 5.707a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				) : (
					<svg
						className="fill-current h-6 w-6"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6 10a1 1 0 011-1h12a1 1 0 010 2H7a1 1 0 01-1-1zM9 15a1 1 0 011-1h12a1 1 0 110 2H10a1 1 0 01-1-1z"
							clipRule="evenodd"
						/>
					</svg>
				)}
			</button> */}

			<nav className="hidden md:flex gap-[1rem] ">
				<Link to="/" className="text-white hover:text-gray-200">
					Home
				</Link>
				<Link to="/about" className="text-white hover:text-gray-200">
					About
				</Link>
			</nav>

		
			{/* {isOpen && (
				<nav className="md:hidden fixed top-0 left-0 w-full h-full bg-gray-800 text-white p-4">
					<ul className="space-y-2">
						<li>
							<Link
								to="/"
								className="block py-2 px-4 text-white hover:text-gray-200"
								onClick={toggleMenu} // Close menu on link click
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								to="/about"
								className="block py-2 px-4 text-white hover:text-gray-200"
								onClick={toggleMenu}
							>
								About
							</Link>
						</li>
					</ul>
				</nav>
			)} */}
		</header>
	);
};

export default Header;
