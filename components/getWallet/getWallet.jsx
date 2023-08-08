import Image from "next/image";
import { AiFillAndroid, AiFillApple, AiFillChrome } from "react-icons/ai";
import "./getWallet.css";
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
		<div
			className="getWalletSection"
			style={{
				textAlign: "center",
			}}>
			<section
				className="getWalletButtonsSection"
				style={{
					position: "relative",
					padding: "6rem",
					maxWidth: "30rem",
					margin: "auto",
					zIndex: "1",
				}}>
				<div
					className="getWalletButtonsBackground"
					style={{
						position: "absolute",
						top: "0",
						left: "0",
						height: "100%",
						width: "100%",
						background: `
            linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
            url('/assets/images/background_3.png') var(--primary-100) 100%/cover no-repeat
        `,
						backgroundRepeat: "no-repeat",
						opacity: "1",
						backgroundSize: "cover",
						display: "inline-block",
						zIndex: "-1",
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
				className="getWalletDownloadSection"
				style={{
					position: "relative",
					padding: "2rem",
					zIndex: "0",
					backgroundColor: "var(--primary-120)",
					margin: "auto",
				}}>
				<div className="getWalletDownloadSectionBackground"></div>
				<div
					className="getWalletMobileBackground"
					style={{
						position: "absolute",
						top: "0",
						left: "0",
						height: "100%",
						width: "100%",
						zIndex: "-1",
						background: `
            linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)),
            url('/assets/images/background_3.png') var(--primary-100) 100%/cover
        `,
						opacity: "0.4",
						backgroundSize: "cover",
						objectFit: "fill",
						mixBlendMode: "multiply",
						display: "inline-block",
					}}></div>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						margin: "2rem",
						textAlign: "left",
					}}>
					<div>
						<Image
							src={"/assets/images/wallet.png"}
							height={120}
							width={120}
							alt="wallet.png"
						/>
					</div>
					<div>
						<div
							style={{
								fontSize: "2rem",
								color: "var(--primary-50)",
								fontWeight: "bold",
							}}>
							BitWallet
						</div>
						<div
							style={{
								fontSize: "1rem",
							}}>
							A Crypto Wallet &
						</div>
						<div
							style={{
								fontSize: "1rem",
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
						className="chromeExtensionDownload"
						style={{
							display: "none",
							flexDirection: "column",
							alignItems: "center",
							border: "1px solid var(--primary-50)",
							padding: "0.5rem",
							borderRadius: "0.5rem",
							width: "10rem",
						}}>
						<div
							style={{
								height: "100px",
							}}>
							<Image
								src={"/assets/logos/googleChromeLogo.png"}
								height={60}
								width={60}
								alt="QR1"
							/>
							<div
								style={{
									fontSize: "0.8rem",
								}}>
								Chrome extension for Desktop
							</div>
						</div>
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
								alignItems: "center",
								gap: "0.3rem",
							}}>
							<AiFillChrome />
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
							width: "10rem",
							textAlign: "center",
						}}>
						<Image
							className="getWalletIosQRCode"
							src={"/assets/images/iosWalletQRcode.svg"}
							height={100}
							width={100}
							alt="QR1"
							style={{
								display: "none",
							}}
						/>
						<div
							className="getWalletIosLogo"
							style={{
								height: "100px",
								paddingTop: "1rem",
							}}>
							<Image
								src={"/assets/logos/appleLogo.png"}
								height={60}
								width={60}
								alt="ios"
								style={{
									display: "inline-block",
								}}
							/>
							<div
								style={{
									fontSize: "0.8rem",
								}}>
								IOS Application
							</div>
						</div>
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
								alignItems: "center",
								gap: "0.3rem",
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
							justifyContent: "center",
							border: "1px solid var(--primary-50)",
							padding: "0.5rem",
							borderRadius: "0.5rem",
							width: "10rem",
							textAlign: "center",
						}}>
						<Image
							className="getWalletAndroidQRCode"
							src={"/assets/images/androidWalletQRcode.svg"}
							height={100}
							width={100}
							alt="QR1"
							style={{
								display: "none",
							}}
						/>
						<div
							className="getWalletAndroidLogo"
							style={{
								height: "100px",
								paddingTop: "1rem",
							}}>
							<Image
								src={"/assets/logos/androidLogo.png"}
								height={60}
								width={60}
								alt="android"
								style={{
									display: "inline-block",
								}}
							/>
							<div
								style={{
									fontSize: "0.8rem",
								}}>
								Android Application
							</div>
						</div>
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
								alignItems: "center",
								gap: "0.3rem",
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
						className="getWalletFeaturesHeading"
						style={{
							fontSize: "1.5rem",
						}}>
						Why BitWallet
					</div>
					<div
						className="getWalletFeatures"
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "1rem",
							justifyContent: "center",
						}}>
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
					<div
						style={{
							display: "flex",
							gap: "1rem",
							flexWrap: "wrap",
						}}>
						<div
							style={{
								textAlign: "center",
								flex: "1",
							}}>
							<Image
								src={"/assets/images/walletSecurityImage.png"}
								height={200}
								width={300}
								alt="security"
								style={{
									borderRadius: "0.5rem",
								}}
							/>
						</div>
						<div
							style={{
								flex: "2",
								minWidth: "50%",
							}}>
							<div
								style={{
									fontSize: "2rem",
									color: "var(--primary-50)",
									fontWeight: "bold",
									textAlign: "left",
									margin: "1rem auto",
								}}>
								Security for your Digital Assets
							</div>
							<div
								style={{
									fontSize: "1rem",
									textAlign: "left",
								}}>
								BitWallet generates passwords and keys on your
								device, so only you have access to your accounts
								and data. Assistance navigating through various
								decentralised websites and blockchain apps.
							</div>
						</div>
					</div>
					<div
						style={{
							display: "flex",
							flexWrap: "wrap",
							gap: "1rem",
						}}>
						<div
							style={{
								textAlign: "center",
								flex: "1",
							}}>
							<Image
								src={
									"/assets/images/walletZeroDowntimeImage.png"
								}
								height={200}
								width={300}
								alt="security"
								style={{
									backgroundColor: "#5151A7",
									borderRadius: "0.5rem",
								}}
							/>
						</div>
						<div
							style={{
								flex: "2",
								minWidth: "50%",
							}}>
							<div
								style={{
									fontSize: "2rem",
									color: "var(--primary-50)",
									fontWeight: "bold",
									textAlign: "left",
									margin: "1rem auto",
								}}>
								Zero Downtime
							</div>
							<div
								style={{
									fontSize: "1rem",
									textAlign: "left",
								}}>
								Web3 and blockchain are driving the era of zero
								downtime, revolutionizing digital systems with
								uninterrupted and secure operations.
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default GetWallet;
