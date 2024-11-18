import Link from 'next/link';
import React from 'react';

type InfoProps = {
	content: string;
	link?: string;
};

const Info = ({ content, link }: InfoProps) => {
	const Comp = link ? Link : 'h6';
	return (
		<Comp className="text-gray-600 typo-Body2" href={link || ''}>
			{content}
		</Comp>
	);
};

export default Info;
