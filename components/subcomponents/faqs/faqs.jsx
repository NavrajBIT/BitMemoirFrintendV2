import Accordian from "../accordian/accordian";

const FAQ = () => {
	const faqs = [
		{
			question: "What is Bitmemoir?",
			answer: "BitMemoir is a unique blockchain-based platform focusing primarily on negating the possibility of creating fake credentials or fudging the documents. The aim is to develop and nurture an ecosystem of verified documents and journey mapping an individual’s life.",
		},
		{
			question: "What is Bitmemoir?",
			answer: "BitMemoir is a unique blockchain-based platform focusing primarily on negating the possibility of creating fake credentials or fudging the documents. The aim is to develop and nurture an ecosystem of verified documents and journey mapping an individual’s life.",
		},
		{
			question: "What is Bitmemoir?",
			answer: "BitMemoir is a unique blockchain-based platform focusing primarily on negating the possibility of creating fake credentials or fudging the documents. The aim is to develop and nurture an ecosystem of verified documents and journey mapping an individual’s life.",
		},
		{
			question: "What is Bitmemoir?",
			answer: "BitMemoir is a unique blockchain-based platform focusing primarily on negating the possibility of creating fake credentials or fudging the documents. The aim is to develop and nurture an ecosystem of verified documents and journey mapping an individual’s life.",
		},
		{
			question: "What is Bitmemoir?",
			answer: "BitMemoir is a unique blockchain-based platform focusing primarily on negating the possibility of creating fake credentials or fudging the documents. The aim is to develop and nurture an ecosystem of verified documents and journey mapping an individual’s life.",
		},
		{
			question: "What is Bitmemoir?",
			answer: "BitMemoir is a unique blockchain-based platform focusing primarily on negating the possibility of creating fake credentials or fudging the documents. The aim is to develop and nurture an ecosystem of verified documents and journey mapping an individual’s life.",
		},
	];
	return (
		<section
			style={{
				backgroundColor: "var(--primary-100)",
				position: "relative",
			}}>
			<div
				style={{
					fontSize: "1.5rem",
					fontWeight: "700",
					textAlign: "center",
					transform: "translateY(-50%)",
				}}>
				FAQ's
			</div>
			<div>
				{faqs.map((faq, index) => {
					return (
						<Accordian
							heading={faq.question}
							text={faq.answer}
							index={index}
						/>
					);
				})}
			</div>
		</section>
	);
};
export default FAQ;
