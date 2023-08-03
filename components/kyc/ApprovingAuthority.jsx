"use client";
import Link from "next/link";
import { useState } from "react";
import { AiFillFolderOpen, AiOutlineQuestionCircle } from "react-icons/ai";
import { useRouter } from "next/navigation";

const ApprovingAuthority = ({ setActiveTab }) => {
	const router = useRouter();
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
				width: "clamp(300px, 40%, 100%)",
				backgroundColor: "transparent",
				borderRadius: "0.5rem",
			}}>
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
				<label
					className="kycFileUpload"
					htmlFor="detailsform"
					style={{
						gridRow: "2/3",
						gridColumn: "1/3",
						borderRadius: "0.2rem",
						display: "flex",
						cursor: "pointer",
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
							color: "var(--white-100)",
							fontSize: "1rem",
							borderRadius: "0.3rem 0 0 0.3rem",
							flexBasis: "85%",
						}}
						defaultValue={uploadedFile}
						disabled
						placeholder="Upload the Details Form"
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
			</div>
			<Link
				href={"/files/approvingAuthorityExample.csv"}
				style={{
					textDecoration: "underline",
					margin: "auto",
				}}
				download={"approvingAuthorityExample.csv"}>
				Download Example File
			</Link>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					gap: "0.5rem",
					margin: "1.5rem",
				}}>
				<button
					type="button"
					onClick={() => setActiveTab("representative")}
					style={{
						color: "var(--white-100)",
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
					// type="submit"
					style={{
						color: "var(--white-100)",
						fontSize: "1.25rem",
						padding: "0.5em 4rem",
						border: "1px solid var(--primary-60)",
						borderRadius: "0.3em",
						backgroundColor: "var(--primary-60)",
						cursor: "pointer",
					}}
					onClick={() => router.push("/certificate")}>
					
					Submit
				</button>
			</div>
		</form>
	);
};
export default ApprovingAuthority;
