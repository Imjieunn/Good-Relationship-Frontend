type TitleProps = {
	content: string;
};

const Title = ({ content }: TitleProps) => {
	return <h3 className="text-black typo-Header1 whitespace-pre">{content}</h3>;
};

export default Title;
