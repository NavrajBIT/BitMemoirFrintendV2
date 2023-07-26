import Image from "next/image";

const ProductSuite = () => {
	const products = [
		"Authentication and Verification",
		"Digital Credentials",
		"NFT as Souvenirs",
		"NFT Loyalty Programme",
		"Non Custodial Wallet",
		"Dynamic NFT's",
		"Unlock new and unique possibilities in the digital realm by enabling unique digital ownership and facilitating seamless transactions with enhanced provenance, scarcity, and programmability.",
		"Skills Passport",
		"NFT Utilitiy",
	];
	return (
		<section
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
				position: "relative",
				marginBottom: "4rem",
			}}>
			<div
				style={{
					// backgroundImage:
					// 	"linear-gradient(to bottom,rgba(15, 48, 62, 1),rgba(15, 48, 62, 0), rgba(15, 48, 62, 1)),url('/assets/images/background_4.svg')",
					background: "url('/assets/images/background_4.svg')",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					mixBlendMode: "overlay",
					height: "100%",
					width: "100%",
					position: "absolute",
					top: "0",
					zIndex: "-1",
				}}></div>
			<div
				style={{
					marginTop: "4rem",
					fontSize: "1.5rem",
					fontWeight: "700",
				}}>
				Product Suite
			</div>
			<div
				style={{
					backgroundColor: "var(--white-100)",
					width: "242px",
					height: "242px",
					borderRadius: "50%",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					marginTop: "4rem",
				}}>
				<Image
					height={300}
					width={300}
					src={"/assets/images/productSuite.png"}
					alt="productSuite"
				/>
			</div>
			<div
				style={{
					display: "flex",
					flexWrap: "wrap",
					gap: "1.5rem",
					justifyContent: "center",
					margin: "4rem 0",
				}}>
				{products.map((product, index) => {
					return (
						<div
							key={index}
							style={{
								backgroundColor: "var(--primary-100)",
								padding: "1.5rem",
								borderRadius: "0.5rem",
								maxWidth: "40%",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								textAlign: "center",
							}}>
							{product}
						</div>
					);
				})}
			</div>
		</section>
	);
};
export default ProductSuite;
