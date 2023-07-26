// next
import Image from "next/image";

// components
import ProductSuite from "../subcomponents/productSuite/productSuite";
import FAQ from "../subcomponents/faqs/faqs";
const Home = () => {
	return (
		<div style={{ minHeight: "var(--min-height)" }}>
			<section
				className="hero"
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
				}}>
				<div
					style={{
						alignSelf: "flex-start",
						margin: "2rem 0 0 2rem",
						fontSize: "2.5rem",
						fontWeight: "700",
					}}>
					Bitmemoir <br />
					for Education
				</div>
				<div
					style={{
						alignSelf: "flex-start",
						margin: "0 0 0 2rem",
						fontSize: "1.125rem",
						color: "var(--primary-50)",
					}}>
					Revolutionizing Certification <br /> with Blockchain
				</div>
				<div>
					<Image
						height={400}
						width={300}
						src={"/assets/images/hero.svg"}
						alt="heroImage"
					/>
				</div>
			</section>
			<section
				className="why-bitmemoir"
				style={{
					position: "relative",
					padding: "3rem",
					textAlign: "center",
				}}>
				<div
					style={{
						position: "absolute",
						top: "0",
						left: "0",
						height: "100%",
						width: "100%",
						zIndex: "-1",
						background:
							"url('/assets/images/background_2.svg') var(--primary-70) 50% / cover no-repeat",
						opacity: "0.6",
						mixBlendMode: "lighten",
					}}></div>
				<div
					style={{
						fontSize: "1.5rem",
						fontWeight: "700",
						marginTop: "-3.8rem",
					}}>
					Why Bitmemoir
				</div>

				<iframe
					src="https://www.youtube.com"
					frameborder="0"
					style={{
						borderRadius: "0.5em",
						border: "1px solid var(--primary-50)",
						marginTop: "2rem",
						width: "100%",
						height: "100%",
						aspectRatio: "16:9",
					}}></iframe>
				<div
					style={{
						fontSize: "0.875rem",
						lineHeight: "1.5rem",
						textAlign: "left",
						marginTop: "2rem",
					}}>
					Revolutionizing the education landscape by the issuing
					legitimate and validated credentials, eliminating any chance
					of duplicity, forgery, or tampering with documents. This
					transformative approach ensures the authentication and
					verification of educational records, leaving no room for the
					existence or acceptance of counterfeit or deceitful
					certificates. By implementing such a system, the education
					ecosystem undergoes a profound change, offering a secure and
					reliable means of credentialing that safeguards the
					integrity and credibility of individuals' academic
					achievements.
				</div>
			</section>
			<ProductSuite />
			<FAQ />
		</div>
	);
};

export default Home;
