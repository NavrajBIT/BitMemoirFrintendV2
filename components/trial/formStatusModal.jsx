import { BiSolidError } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

const FormStatusModal = ({ success, setShowFormStatusModal }) => {
	return (
		<div
			style={{
				width: "100%",
				height: "100%",
				position: "fixed",
				zIndex: "10",
				display: "flex",
				justifyContent: "center",
				top: "6rem",
				alignItems: "center",
			}}>
			{success ? (
				<div
					style={{
						marginBottom: "15rem",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "1rem",
					}}>
					<div
						style={{
							backgroundColor: "var(--success)",
							padding: "0.8rem 2rem",
							borderRadius: "0.5rem",
							textAlign: "center",
							display: "flex",
							alignItems: "center",
							gap: "0.5rem",
						}}>
						<Image
							src={"/icons/tick.svg"}
							height={18}
							width={18}
							alt="tick"
						/>
						Form Submitted Successfully
					</div>
					<Link
						href="/certCreater"
						className="trial-button"
						style={{
							backgroundColor: "white",
							padding: "0.7rem",
							minWidth: "10rem",
							borderRadius: "0.5rem",
							fontSize: "1rem",
							color: "var(--primary-60)",
							fontWeight: "bold",
							cursor: "pointer",
							textAlign: "center",
						}}>
						Create Certificate
					</Link>
					<Link
						href="/profile"
						className="trial-button"
						style={{
							backgroundColor: "white",
							padding: "0.7rem",
							minWidth: "10rem",
							borderRadius: "0.5rem",
							fontSize: "1rem",
							color: "var(--primary-60)",
							fontWeight: "bold",
							cursor: "pointer",
							textAlign: "center",
						}}>
						Profile
					</Link>
					<Link
						href="/kyc"
						className="trial-button"
						style={{
							backgroundColor: "white",
							padding: "0.7rem",
							minWidth: "10rem",
							borderRadius: "0.5rem",
							fontSize: "1rem",
							color: "var(--primary-60)",
							fontWeight: "bold",
							cursor: "pointer",
							textAlign: "center",
						}}>
						Complete KYC
					</Link>
				</div>
			) : (
				<div
					style={{
						marginBottom: "15rem",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: "1rem",
					}}>
					<div
						style={{
							backgroundColor: "var(--danger)",
							padding: "1rem 2rem",
							borderRadius: "0.5rem",
							textAlign: "center",
							display: "flex",
							gap: "0.5rem",
							alignItems: "center",
						}}>
						<BiSolidError />
						Something Went Wrong
					</div>
					<button
						className="trial-button"
						onClick={() => setShowFormStatusModal(false)}
						style={{
							backgroundColor: "white",
							padding: "0.7rem",
							minWidth: "10rem",
							borderRadius: "0.5rem",
							fontSize: "1rem",
							color: "var(--primary-60)",
							fontWeight: "bold",
							cursor: "pointer",
						}}>
						Try Again
					</button>
				</div>
			)}
		</div>
	);
};
export default FormStatusModal;
