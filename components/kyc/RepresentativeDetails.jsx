"use client";

import { useState } from "react";
import { AiOutlineQuestionCircle, AiFillFolderOpen } from "react-icons/ai";

const RepresentativeDetails = ({ setActiveTab }) => {
	const [uploadedFile, setUploadedFile] = useState("");
	const handleFileChange = (event) => {
		const file = event.target.files[0];
		if (file) {
			setUploadedFile(file.name);
		}
	};
	return (
		<form
			onSubmit={() => setActiveTab("approvingAuthority")}
			className="kycForm"
			style={{
				display: "flex",
				flexDirection: "column",
				gap: "0.8rem",
				width: "clamp(300px, 40%, 90%)",
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
					placeholder="Name"
				/>
				<label
					htmlFor="name"
					className="kyc-label"
					style={{
						fontSize: "0.8rem",
						transition: "all 0.3s",
						opacity: "0",
					}}>
					Name
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
					id="surname"
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
					placeholder="Surname"
				/>
				<label
					htmlFor="surname"
					className="kyc-label"
					style={{
						fontSize: "0.8rem",
						transition: "all 0.3s",
						opacity: "0",
					}}>
					Surname
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
					id="designation"
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
					placeholder="Designation"
				/>
				<label
					htmlFor="designation"
					className="kyc-label"
					style={{
						fontSize: "0.8rem",
						transition: "all 0.3s",
						opacity: "0",
					}}>
					Designation
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
					id="email"
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
					placeholder="Official Email ID"
				/>
				<label
					htmlFor="email"
					className="kyc-label"
					style={{
						fontSize: "0.8rem",
						transition: "all 0.3s",
						opacity: "0",
					}}>
					Official Email ID
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
					id="phone"
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
					placeholder="Official Phone Number"
				/>
				<label
					htmlFor="phone"
					className="kyc-label"
					style={{
						fontSize: "0.8rem",
						transition: "all 0.3s",
						opacity: "0",
					}}>
					Official Phone Number
				</label>
			</div>

			<label
				htmlFor="detailsform"
				style={{
					borderRadius: "0.3rem",
					display: "flex",
					cursor: "pointer",
					marginTop: "1.5rem",
					backgroundColor: "var(--primary-90)",
				}}>
				<input
					required
					type="file"
					id="detailsform"
					onChange={(e) => handleFileChange(e)}
					style={{
						width: "0",
						border: "none",
						outline: "none",
						height: "0",
					}}
				/>
				<input
					required
					className="kyc-input"
					style={{
						padding: "1rem",
						backgroundColor: "var(--primary-90)",
						border: "none",
						outline: "none",
						color: "white",
						fontSize: "1rem",
						borderRadius: "0.3rem 0 0 0.3rem",
						flexBasis: "85%",
					}}
					disabled
					defaultValue={uploadedFile}
					placeholder="ID Proof of Representative"
				/>

				<span
					className="kyc-choosefileicon"
					style={{
						gridColumn: "2/3",
						fontSize: "1.5rem",
						cursor: "pointer",
						color: "var(--primary-50)",
						alignSelf: "center",
						margin: "auto",
						display: "flex",
						backgroundColor: "var(--primary-80)",
						padding: "0.85rem",
						flexBasis: "15%",
						justifyContent: "center",
						borderRadius: "0 0.3rem 0.3rem 0",
					}}>
					<AiFillFolderOpen />
				</span>
				<span
					className="kyc-choosefile"
					style={{
						backgroundColor: "var(--white-100)",
						color: "var(--primary-80)",
						fontSize: "1rem",
						flexBasis: "25%",
						display: "none",
						justifyContent: "center",
						alignItems: "center",
						borderRadius: "0.3rem",
						margin: "0.7rem 0.8rem",
						minWidth: "7rem",
					}}>
					Choose File
				</span>
			</label>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					gap: "0.5rem",
					margin: "1.5rem",
				}}>
				<button
					type="button"
					onClick={() => setActiveTab("kyc")}
					style={{
						color: "var(--white-90)",
						fontSize: "1.25rem",
						padding: "0.5em 4rem",
						border: "1px solid var(--primary-60)",
						borderRadius: "0.3em",
						backgroundColor: "transparent",
						cursor: "pointer",
					}}>
					Prev
				</button>
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
					}}>
					Next
				</button>
			</div>
		</form>
	);
};
export default RepresentativeDetails;
