"use client";

import { useState } from "react";
import KycDetails from "./KycDetails";
import RepresentativeDetails from "./RepresentativeDetails";
import ApprovingAuthority from "./ApprovingAuthority";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import TextScroller from "../subcomponents/textScroller";
import styles from "./kyc.module.css";

const Kyc = () => {
	const [activeTab, setActiveTab] = useState("kyc");
	const [showTooltip, setShowTooltip] = useState(false);
	return (
		<section
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				padding: "1.5rem",
				gap: "2rem",
				width: "100%",
				position: "relative",
				minHeight: "100vh",
			}}>
			<TextScroller text={"Fill any Dummy Data Here for Accessing other pages (Site under Development)"} />
			<div
				className={styles.kyc-background}
				style={{
					position: "fixed",
					top: "0",
					left: "0",
					width: "100%",
					height: "100%",
					backgroundImage: "url('/assets/images/background_3.png')",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					opacity: "1",
					mixBlendMode: "multiply",
					zIndex: "-1",
					display: "none",
				}}></div>
			<div
				className={styles.kyc-heading-mobile}
				style={{
					fontSize: "1.5rem",
					color: "var(--primary-50)",
					fontWeight: "bold",
					display: "flex",
					gap: "0.5rem",
				}}>
				{activeTab === "kyc" && "KYC Details"}
				{activeTab === "representative" && "Representative Details"}
				{activeTab === "approvingAuthority" &&
					"Approving Authority Details"}
				<div
					style={{
						position: "relative",
					}}>
					<span
						style={{
							position: "absolute",
							fontSize: "1rem",
							top: "-5rem",
							right: "0",
							transform: "translateX(50%)",
							backgroundColor: "var(--primary-90)",
							color: "var(--primary-60)",
							fontWeight: "normal",
							padding: "0.5rem",
							borderRadius: "0.5rem",
							display: showTooltip ? "block" : "none",
						}}>
						{activeTab} tooltip
					</span>
					<span
						onMouseOver={() => setShowTooltip(true)}
						onMouseLeave={() => setShowTooltip(false)}
						style={{
							fontSize: "1.2rem",
							cursor: "pointer",
							color: "var(--primary-50)",
						}}>
						<AiOutlineQuestionCircle />
					</span>
				</div>
			</div>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					marginBottom: "2rem",
				}}>
				<div
					style={{
						width: "1rem",
						height: "1rem",
						border: "2px solid var(--primary-50)",
						backgroundColor:
							activeTab === "kyc"
								? "var(--primary-50)"
								: "transparent",
						borderRadius: "50%",
					}}></div>
				<div
					style={{
						width: "3rem",
						height: "0.1rem",
						backgroundColor: "var(--primary-50)",
					}}></div>
				<div
					style={{
						width: "1rem",
						height: "1rem",
						border: "2px solid var(--primary-50)",
						backgroundColor:
							activeTab === "representative"
								? "var(--primary-50)"
								: "transparent",
						borderRadius: "50%",
					}}></div>
				<div
					style={{
						width: "3rem",
						height: "0.1rem",
						backgroundColor: "var(--primary-50)",
					}}></div>
				<div
					style={{
						width: "1rem",
						height: "1rem",
						border: "2px solid var(--primary-50)",
						backgroundColor:
							activeTab === "approvingAuthority"
								? "var(--primary-50)"
								: "transparent",
						borderRadius: "50%",
					}}></div>
			</div>
			<div
				className={styles.kyc-heading}
				style={{
					fontSize: "1.5rem",
					color: "var(--primary-50)",
					fontWeight: "bold",
					display: "none",
					width: "clamp(300px, 30%, 100%)",
					position: "absolute",
					top: "5.5rem",
					gap: "0.5rem",
				}}>
				{activeTab === "kyc" && "KYC Details"}
				{activeTab === "representative" && "Representative Details"}
				{activeTab === "approvingAuthority" &&
					"Approving Authority Details"}
				<div
					style={{
						position: "relative",
						marginTop: "-0.5rem",
					}}>
					<span
						className={styles.questionCircle}
						style={{
							fontSize: "1.2rem",
							cursor: "pointer",
							color: "var(--primary-50)",
						}}>
						<AiOutlineQuestionCircle />
					</span>
					<span
						className={styles.tooltip}
						style={{
							position: "absolute",
							fontSize: "1rem",
							top: "-5rem",
							right: "50%",
							transform: "translateX(50%)",
							backgroundColor: "var(--primary-90)",
							color: "var(--primary-60)",
							fontWeight: "normal",
							padding: "0.5rem",
							borderRadius: "0.5rem",
							display: "none",
						}}>
						{activeTab} tooltip
					</span>
				</div>
			</div>
			{activeTab === "kyc" && <KycDetails setActiveTab={setActiveTab} />}
			{activeTab === "representative" && (
				<RepresentativeDetails setActiveTab={setActiveTab} />
			)}
			{activeTab === "approvingAuthority" && (
				<ApprovingAuthority setActiveTab={setActiveTab} />
			)}
		</section>
	);
};

export default Kyc;
