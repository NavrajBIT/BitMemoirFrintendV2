import Image from "next/image";
import { AiFillAndroid, AiFillApple } from "react-icons/ai";
const GetWallet = () => {
	const bitWalletFeatures = [
		"Data Protection",
		"Verified and Secure",
		"Robust Infrastructure",
		"Easy to use",
		"Decentralized",
		"Support Assets",
	];
	return (
		<div>
			<section style={{ position: "relative", padding: "6rem" }}>
				<div
					style={{
						position: "absolute",
						top: "0",
						left: "0",
						height: "100%",
						width: "100%",
						zIndex: "-1",
						background: `
            linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
            url('/assets/images/background_3.png') var(--primary-100) 100%/cover no-repeat
        `,
						backgroundRepeat: "no-repeat",
						opacity: "1",
						backgroundSize: "cover",
					}}></div>
				<button
					style={{
						color: "var(--primary-60)",
						fontSize: "1.125rem",
						padding: "0.5em 1.2em",
						border: "1px solid var(--primary-60)",
						borderRadius: "0.3em",
						backgroundColor: "white",
						display: "block",
						margin: "auto",
						cursor: "pointer",
					}}>
					Create Wallet
				</button>
				<button
					style={{
						color: "var(--white-100)",
						fontSize: "1.125rem",
						padding: "0.5em 1em",
						border: "1px solid var(--primary-60)",
						borderRadius: "0.3em",
						backgroundColor: "var(--primary-60)",
						display: "block",
						margin: "auto",
						marginTop: "1rem",
						cursor: "pointer",
					}}>
					Login/Import Wallet
				</button>
			</section>
			<section
				style={{
					position: "relative",
					padding: "2rem",
				}}>
				<div
					style={{
						position: "absolute",
						top: "0",
						left: "0",
						height: "100%",
						width: "100%",
						zIndex: "-1",
						background: `
            linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
            url('/assets/images/background_3.png') var(--primary-100) 100%/cover no-repeat
        `,
						opacity: "0.4",
						backgroundSize: "cover",
						objectFit: "fill",
						mixBlendMode: "multiply",
					}}></div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						margin: "2rem",
					}}>
					<div>
						<Image
							src={"/assets/images/wallet.png"}
							height={90}
							width={90}
							alt="wallet.png"
						/>
					</div>
					<div>
						<div
							style={{
								fontSize: "1.5rem",
								color: "var(--primary-50)",
								fontWeight: "bold",
							}}>
							BitWallet
						</div>
						<div
							style={{
								fontSize: "0.8rem",
							}}>
							A Crypto Wallet &
						</div>
						<div
							style={{
								fontSize: "0.8rem",
							}}>
							Gateway to Blockchain World
						</div>
					</div>
				</div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						gap: "1rem",
						margin: "3rem 2rem",
					}}>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							border: "1px solid var(--primary-50)",
							padding: "0.5rem",
							borderRadius: "0.5rem",
						}}>
						<Image
							src={"/assets/images/iosWalletQRcode.svg"}
							height={90}
							width={90}
							alt="QR1"
						/>
						<button
							style={{
								color: "var(--white-100)",
								fontSize: "1rem",
								padding: "0.5em 1em",
								border: "1px solid var(--primary-60)",
								borderRadius: "0.3em",
								backgroundColor: "var(--primary-60)",
								display: "flex",
								margin: "auto",
								marginTop: "1rem",
								cursor: "pointer",
							}}>
							<AiFillApple />
							Download
						</button>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							border: "1px solid var(--primary-50)",
							padding: "0.5rem",
							borderRadius: "0.5rem",
						}}>
						<Image
							src={"/assets/images/androidWalletQRcode.svg"}
							height={90}
							width={90}
							alt="QR1"
						/>
						<button
							style={{
								color: "var(--white-100)",
								fontSize: "1rem",
								padding: "0.5em 1em",
								border: "1px solid var(--primary-60)",
								borderRadius: "0.3em",
								backgroundColor: "var(--primary-60)",
								display: "flex",
								margin: "auto",
								marginTop: "1rem",
								cursor: "pointer",
							}}>
							<AiFillAndroid />
							Download
						</button>
					</div>
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						gap: "1rem",
						alignItems: "center",
						justifyContent: "center",
						margin: "3rem 2rem",
					}}>
					<div
						style={{
							fontSize: "1.5rem",
						}}>
						Why BitWallet
					</div>
					{bitWalletFeatures.map((feature, index) => {
						return (
							<div
								style={{
									padding: "1.5rem 1rem",
									fontSize: "0.875rem",
									backgroundColor: "var(--primary-100)",
									borderRadius: "0.5rem",
									minWidth: "12rem",
									textAlign: "center",
								}}
								key={index}>
								{feature}
							</div>
						);
					})}
				</div>
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						margin: "3rem 2rem",
						alignItems: "center",
						justifyContent: "center",
						gap: "3rem",
					}}>
					<div>
						<div
							style={{
								textAlign: "center",
							}}>
							<Image
								src={"/assets/images/walletSecurityImage.png"}
								height={200}
								width={400}
								alt="security"
								style={{
									borderRadius: "0.5rem",
								}}
							/>
						</div>
						<div
							style={{
								fontSize: "1.5rem",
								color: "var(--primary-50)",
								fontWeight: "bold",
								textAlign: "left",
								margin: "1rem auto",
							}}>
							Security for your Digital Assets
						</div>
						<div
							style={{
								fontSize: "0.875rem",
							}}>
							BitWallet generates passwords and keys on your
							device, so only you have access to your accounts and
							data. Assistance navigating through various
							decentralised websites and blockchain apps.
						</div>
					</div>
					<div>
						<div
							style={{
								textAlign: "center",
							}}>
							<Image
								src={
									"/assets/images/walletZeroDowntimeImage.png"
								}
								height={200}
								width={400}
								alt="security"
								style={{
									backgroundColor: "#5151A7",
									borderRadius: "0.5rem",
								}}
							/>
						</div>
						<div
							style={{
								fontSize: "1.5rem",
								color: "var(--primary-50)",
								fontWeight: "bold",
								textAlign: "left",
								margin: "1rem auto",
							}}>
							Zero Downtime
						</div>
						<div
							style={{
								fontSize: "0.875rem",
							}}>
							Web3 and blockchain are driving the era of zero
							downtime, revolutionizing digital systems with
							uninterrupted and secure operations.
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default GetWallet;
