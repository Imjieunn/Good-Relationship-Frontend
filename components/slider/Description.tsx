type DescriptionProps = {
	content: string;
};

const Description = ({ content }: DescriptionProps) => {
	return <h6 className="text-gray-400 typo-Body1 whitespace-pre">{content}</h6>;
};

export default Description;
