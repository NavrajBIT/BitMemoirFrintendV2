"use client";
// next
import Image from "next/image";

// components
import ProductSuite from "./subcomponents/productSuite/productSuite";
import FAQ from "./subcomponents/faqs/faqs";
import TextScroller from "../subcomponents/textScroller";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useRouter } from "next/navigation";
import styles from "./home.module.css";


const Home = () => {
	const router = useRouter();
	return (
		<div style={{ minHeight: "var(--min-height)" 
		}}>
			<TextScroller text ="Site Under Development" />
			<section
				className={styles.hero}
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					marginTop: "0rem",
				}}>
				<Image
					src={"/assets/images/background_hero.png"}
					alt="hero_image"
					fill
					style={{
						position: "absolute",
						top: 0,
						left: 0,
						zIndex: "-1",
						opacity: "0.06",
						display: "none",
					}}
					className={styles.heroBackgroundImage}
				/>

				<div
					style={{
						alignSelf: "flex-start",
						display: "flex",
						flexDirection: "column",
						gap: "1rem",
						width: "55%",
					}} className={styles.homeTextDiv}>
					<div
						style={{
							margin: "2rem 0 0 2rem",
							fontSize: "2.5rem",
							fontWeight: "700",
						}}
						className={styles.heroHeading}>
						BitMemoir <br />
						for Education
					</div>
					<div
						style={{
							margin: "0 2rem 0 2rem",
							fontSize: "1.125rem",
							color: "var(--primary-50)",
						}}
						className={styles.heroSubheading}>
						Revolutionizing Certification with Blockchain
					</div>
					<button
						className={styles.freeTrialButton}
						style={{
							color: "var(--primary-60)",
							fontSize: "1.25rem",
							fontWeight: "700",
							padding: "1rem 2rem",
							borderRadius: "0.3em",
							backgroundColor: "var(--white-100)",
							cursor: "pointer",
							marginLeft: "5rem",
							marginRight: "auto",
							display: "none",
							alignItems: "center",
							gap: "1rem",
						}}
						onClick={() => {
							router.push("/freeTrial");
						}}
						>
						Free Trial <AiOutlineArrowRight />
					</button>
				</div>

				<Image
					height={300}
					width={300}
					src={"/assets/images/hero_diamond_3.svg"}
					alt="heroImage"
					className={`${styles.heroDiamondDesktop} ${styles.diamond1}`}
					style={{
						display: "none",
						marginBottom: "auto",
					}}
				/>
				<Image
					height={600}
					width={600}
					src={"/assets/images/hero_diamond_2.svg"}
					alt="heroImage"
					
					className={`${styles.heroDiamondDesktop} ${styles.diamond2}`}
					style={{
						display: "none",
						marginBottom: "auto",
					}}
				/>
				<Image
					height={200}
					width={200}
					src={"/assets/images/hero_diamond_2.svg"}
					alt="heroImage"
					className={`${styles.heroDiamondDesktop} ${styles.diamond3}`}
					style={{ display: "none", marginBottom: "auto" }}
				/>
				<div>
					<Image
						height={400}
						width={300}
						src={"/assets/images/hero_diamond.svg"}
						alt="heroImage"
						className={styles.heroDiamondMobile}
					/>
				</div>
			</section>
			<section
				className="whyBitmemoir"
				style={{
					position: "relative",
					padding: "3rem",
					textAlign: "center",
					backgroundColor: "var(--primary-80)",
				}}>
				<div
					style={{
						position: "absolute",
						top: "0",
						left: "0",
						height: "100%",
						width: "100%",
						zIndex: "0",
						background:
							"url('/assets/images/background_1.png') var(--primary-80) 100%/ cover no-repeat",
						opacity: "0.4",
						backgroundSize: "cover",
						objectFit: "fill",
						mixBlendMode: "multiply",
					}}></div>
				<div
					className={styles.whybitmemoirHeading}
					style={{
						fontSize: "1.5rem",
						fontWeight: "700",
						zIndex: "1",
						position: "relative",
						// marginTop: "-3.8rem",
					}}>
					Why BitMemoir
				</div>

				<div
					className={styles.whybitmemoirContent}
					style={{
						zIndex: "1",
						position: "relative",
					}}>
					<iframe
						src="https://www.youtube.com"
						style={{
							borderRadius: "0.5em",
							border: "1px solid var(--primary-50)",
							marginTop: "2rem",
							aspectRatio: "16/9",
							flexBasis: "50%",
							width: "100%",
						}}></iframe>
					<div
						style={{
							fontSize: "0.875rem",
							lineHeight: "1.5rem",
							textAlign: "left",
							marginTop: "2rem",
							flexBasis: "50%",
						}}>
						Revolutionizing the education landscape by the issuing
						legitimate and validated credentials, eliminating any
						chance of duplicity, forgery, or tampering with
						documents. This transformative approach ensures the
						authentication and verification of educational records,
						leaving no room for the existence or acceptance of
						counterfeit or deceitful certificates. By implementing
						such a system, the education ecosystem undergoes a
						profound change, offering a secure and reliable means of
						credentialing that safeguards the integrity and
						credibility of individuals' academic achievements.
					</div>
				</div>
			</section>
			<ProductSuite />
			<FAQ />
		</div>
	);
};

export default Home;
