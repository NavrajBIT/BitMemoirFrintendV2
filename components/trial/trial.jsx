"use client";

import "./trial.css";
import { useState } from "react";
import FormStatusModal from "./formStatusModal";
import Image from "next/image";
const Trial = () => {
	const formElements = [
		{ name: "FirstName", required: true },
		{ name: "LastName", required: true },
		{ name: "Designation", required: true },
		{ name: "Email", required: true },
		{ name: "Organization", required: true },
		{ name: "Contact Number", required: true },
		{ name: "Country", required: true },
	];

	const [showFormStatusModal, setShowFormStatusModal] = useState(false);
	const [success, setSuccess] = useState(false);
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
			}}>
			{showFormStatusModal && (
				<FormStatusModal
					success={success}
					setShowFormStatusModal={setShowFormStatusModal}
				/>
			)}
			<div
				className="trialBackgroundMobile"
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
					filter: `blur(${showFormStatusModal ? "5px" : "0px"})`,
					display: "none",
				}}></div>
			<form
				className="trialForm"
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "0.5rem",
					width: "80%",
					backgroundColor: "var(--primary-120)",
					borderRadius: "0.5rem",
					filter: `blur(${showFormStatusModal ? "5px" : "0px"})`,
					overflow: "hidden",
				}}>
				<div
					className="trialBackgroundDesktop"
					style={{
						position: "absolute",
						// top: "0",
						// left: "0",
						width: "100%",
						height: "100%",
						backgroundImage:
							"url('/assets/images/background_3.png')",
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						opacity: "1",
						mixBlendMode: "multiply",
						zIndex: "-1",
						filter: `blur(${showFormStatusModal ? "5px" : "0px"})`,
						display: "none",
					}}></div>
				<div
					className="trialHero"
					style={{
						backgroundColor: "var(--white-100)",
						color: "var(--primary-90)",
						padding: "2rem",
						borderRadius: "0.5rem",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						flexBasis: "50%",
					}}>
					<div
						className="trialHeroHeading"
						style={{
							textAlign: "center",
						}}>
						<div>Sign-up to get a</div>
						<div
							style={{
								fontSize: "2rem",
								fontWeight: "bold",
							}}>
							Free Trial
						</div>
					</div>
					<div
						className="trialHeroText"
						style={{
							color: "var(--primary-90)",
							textAlign: "justify",
							fontSize: "1.5rem",
							fontWeight: "bold",
							lineHeight: "2.5rem",
							letterSpacing: "0.8rem",
							width: "100%",
							wordBreak: "break-all",
							filter: "blur(3px)",
							display: "none",
							maxHeight: "20rem",
							overflow: "hidden",
						}}>
						b4914600112ba18af7798b6c1a1363728ae1d96f4914600112ba18af7798b6c1a1363728ae1d96f4914600112ba18af7798b6c1a1363728ae1d96f4914600112ba18af7798b6c14600112ba18af7798
					</div>
					<Image
						className="trialHeroImage"
						src={"/assets/images/lock.png"}
						height={200}
						width={150}
						alt="lock"
						style={{
							position: "absolute",
							top: "12rem",
							display: "none",
						}}
					/>
				</div>
				<div
					className="trialFormElements"
					style={{
						flexBasis: "50%",
						display: "grid",
						gridTemplateColumns: "auto auto",
						gap: "0.4rem",
					}}>
					{formElements.map((formElement, index) => {
						return (
							<div
								style={{
									display: "flex",
									flexDirection: "column-reverse",
									gap: "0.5rem",
									gridColumn: "1/3",
								}}>
								<input
									required={formElement.required}
									type="text"
									id="name"
									className="trialInput"
									style={{
										padding: "1rem",
										backgroundColor: "var(--primary-90)",
										border: "none",
										outline: "none",
										color: "var(--white-90)",
										fontSize: "1rem",
										borderRadius: "0.3rem",
									}}
									placeholder={`${formElement.name}${
										formElement.required ? "*" : ""
									}`}
									name={formElement.name}
								/>
								<label
									htmlFor="name"
									className="trialLabel"
									style={{
										fontSize: "0.8rem",
										transition: "all 0.3s",
										opacity: "0",
									}}>
									{formElement.name}
									{formElement.required ? "*" : ""}
								</label>
							</div>
						);
					})}
					<button
						type="submit"
						style={{
							color: "var(--white-90)",
							fontSize: "1.25rem",
							padding: "0.5em",
							border: "1px solid var(--primary-60)",
							borderRadius: "0.3em",
							backgroundColor: "var(--primary-60)",
							cursor: "pointer",
							margin: "1.5rem auto",
							width: "10rem",
							textAlign: "center",
							gridColumn: "1/3",
							alignSelf: "center",
						}}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default Trial;
