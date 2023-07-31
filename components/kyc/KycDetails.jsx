import { AiOutlineQuestionCircle } from "react-icons/ai";

const KycDetails = ({ setActiveTab }) => {
	return (
		<form
			onSubmit={() => setActiveTab("representative")}
			className="kycForm"
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "0.8rem",
				width: "clamp(300px, 40%, 100%)",
				backgroundColor: "transparent",
				borderRadius: "0.5rem",
			}}>
			<div
				style={{
					display: "flex",
					flexDirection: "column-reverse",
					gap: "0.5rem",
				}}>
				<input
					required
					type="text"
					id="name"
					className="kyc-input"
					style={{
						padding: "1rem",
						backgroundColor: "var(--primary-90)",
						border: "none",
						outline: "none",
						color: "var(--white-90)",
						fontSize: "1rem",
						borderRadius: "0.3rem",
					}}
					placeholder="Name of Company/Institution"
				/>
				<label
					htmlFor="name"
					className="kyc-label"
					style={{
						fontSize: "0.8rem",
						transition: "all 0.3s",
						opacity: "0",
					}}>
					Name of Company/Institution
				</label>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column-reverse",
					gap: "0.5rem",
				}}>
				<textarea
					type="text"
					id="name"
					className="kyc-input"
					style={{
						padding: "1rem",
						backgroundColor: "var(--primary-90)",
						border: "none",
						outline: "none",
						color: "var(--white-90)",
						fontSize: "1rem",
						borderRadius: "0.3rem",
					}}
					rows={5}
					placeholder="Description of the Organization"
				/>
				<label
					htmlFor="name"
					className="kyc-label"
					style={{
						fontSize: "0.8rem",
						transition: "all 0.3s",
						opacity: "0",
					}}>
					Description of the Organization
				</label>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column-reverse",
					gap: "0.5rem",
				}}>
				<input
					required
					type="text"
					id="name"
					className="kyc-input"
					style={{
						padding: "1rem",
						backgroundColor: "var(--primary-90)",
						border: "none",
						outline: "none",
						color: "var(--white-90)",
						fontSize: "1rem",
						borderRadius: "0.3rem",
					}}
					placeholder="Country"
				/>
				<label
					htmlFor="name"
					className="kyc-label"
					style={{
						fontSize: "0.8rem",
						transition: "all 0.3s",
						opacity: "0",
					}}>
					Country
				</label>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column-reverse",
					gap: "0.5rem",
				}}>
				<input
					required
					type="text"
					id="name"
					className="kyc-input"
					style={{
						padding: "1rem",
						backgroundColor: "var(--primary-90)",
						border: "none",
						outline: "none",
						color: "var(--white-90)",
						fontSize: "1rem",
						borderRadius: "0.3rem",
					}}
					placeholder="Official Website"
				/>
				<label
					htmlFor="name"
					className="kyc-label"
					style={{
						fontSize: "0.8rem",
						transition: "all 0.3s",
						opacity: "0",
					}}>
					Official Website
				</label>
			</div>

			<div
				style={{
					display: "grid",
					gap: "0.5rem",
					gridTemplateColumns: "1fr auto",
					alignItems: "center",
				}}>
				<div
					style={{
						position: "relative",
					}}>
					<span
						className="questionCircle"
						style={{
							fontSize: "1.2rem",
							cursor: "pointer",
							color: "var(--primary-50)",
						}}>
						<AiOutlineQuestionCircle />
					</span>
					<span
						className="tooltip"
						style={{
							position: "absolute",
							fontSize: "1rem",
							top: "-4rem",
							right: "50%",
							transform: "translateX(50%)",
							backgroundColor: "var(--primary-90)",
							color: "var(--primary-60)",
							fontWeight: "normal",
							padding: "0.5rem",
							borderRadius: "0.5rem",
							display: "none",
						}}>
						tooltip
					</span>
				</div>
				<input
					required
					type="text"
					id="name"
					className="kyc-input"
					style={{
						padding: "1rem",
						backgroundColor: "var(--primary-90)",
						border: "none",
						outline: "none",
						color: "var(--white-90)",
						fontSize: "1rem",
						borderRadius: "0.3rem",
						gridRow: "2/3",
					}}
					placeholder="CIN"
				/>
				<label
					htmlFor="name"
					className="kyc-label"
					style={{
						fontSize: "0.8rem",
						transition: "all 0.3s",
						opacity: "0",
						gridColumn: "1/3",
						gridRow: "1/2",
					}}>
					CIN
				</label>
			</div>
			<button
				type="submit"
				style={{
					color: "var(--white-90)",
					fontSize: "1.25rem",
					padding: "0.5em 4rem",
					border: "1px solid var(--primary-60)",
					borderRadius: "0.3em",
					backgroundColor: "var(--primary-60)",
					cursor: "pointer",
					margin: "1.5rem auto",
				}}>
				Next
			</button>
		</form>
	);
};
export default KycDetails;
