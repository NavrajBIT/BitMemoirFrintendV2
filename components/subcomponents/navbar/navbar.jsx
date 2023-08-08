import Image from "next/image";
import Link from "next/link";
import Button from "../button/button";
import Navmenu from "../navmenu/navmenu";
import "./navbar.css";
const Navbar = () => {
	const navMenuItems = [
		{ name: "Certificates", route: "/mint" },
		{ name: "NFT", route: "/view" },
		{ name: "Souvenirs", route: "/verify" },
		{ name: "Blog", route: "/blog" },
		{ name: "About Us", route: "/about" },
	];
	return (
		<nav
			style={{
				height: "100px",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				padding: "4rem 2rem",
				gap: "2rem",
			}}>
			<Link href="/home">
				<Image
					height={23}
					width={114}
					src="/assets/bitmemoirlogo.png"
					alt="BitMemoir"
				/>
			</Link>
			<div
				className="navitems"
				style={{
					display: "none",
					gap: "2rem",
					alignItems: "center",
				}}>
				{navMenuItems.map((item, index) => {
					return (
						<Link
							className="link"
							href={item.route}
							key={index}
							style={{
								background:
									"linear-gradient(to bottom, var(--primary-110), var(--primary-100))",
								padding: "0.5rem",
								borderRadius: "0.2rem",
							}}>
							{item.name}
						</Link>
					);
				})}
			</div>
			<div
				className="navitems"
				style={{
					alignItems: "center",
					display: "flex",
					gap: "1em",
					justifyContent: "center",
					display: "none",
				}}>
				<Button
					text={"Sign Up"}
					style={{
						color: "var(--white-100)",
						fontSize: "1.25rem",
						padding: "0.5em 1.2em",
						border: "1px solid var(--primary-60)",
						borderRadius: "0.3em",
						cursor: "pointer",
					}}
				/>
				<Link
					href={"/getWallet"}
					style={{
						color: "var(--white-100)",
						fontSize: "1.25rem",
						padding: "0.5em 1em",
						border: "1px solid var(--primary-60)",
						borderRadius: "0.3em",
						backgroundColor: "var(--primary-60)",
						cursor: "pointer",
					}}>
					Get Wallet
				</Link>
			</div>
			<span className="navmenu">
				<Navmenu />
			</span>
		</nav>
	);
};

export default Navbar;
