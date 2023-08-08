"use client";
import Image from "next/image";
import Link from "next/link";
import LoginButton from "./loginButton";
import Button from "../button/button";
import Navmenu from "../navmenu/navmenu";
import { useRouter } from "next/navigation";
import styles from "./navbar.module.css";

const Navbar = () => {
	const router = useRouter();
	const navMenuItems = [
		{ name: "Certificates", route: "/certificate" },
		{ name: "NFT", route: "/nft" },
		{ name: "Souvenirs", route: "/souvenirs" },
		{ name: "Verify", route: "/verify" },
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
					src="/assets/logos/bitmemoirlogo.png"
					alt="BitMemoir"
				/>
			</Link>
			<div
				className={styles.navitems}
				style={{
					display: "none",
					gap: "2rem",
					alignItems: "center",
				}}>
				{navMenuItems.map((item, index) => {
					return (
						<Link
							className={styles.link}
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
				className={styles.navitems}
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
					
					onClick={() => {
						router.push("/login");
					}}
				/>
					
				<Button
					text={"Get Wallet"}
					style={{
						color: "var(--white-100)",
						fontSize: "1.25rem",
						padding: "0.5em 1em",
						border: "1px solid var(--primary-60)",
						borderRadius: "0.3em",
						backgroundColor: "var(--primary-60)",
						cursor: "pointer",
					}}
				>
				</Button >
			</div>
			<span className={styles.navmenu}>
				<Navmenu />
			</span>
		</nav>
	);
};

export default Navbar;
