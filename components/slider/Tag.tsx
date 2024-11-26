import Chip from '@/components/Chip';

type TagProps = {
	tags: string[];
};

const Tag = ({ tags }: TagProps) => {
	return (
		<div className="flex gap-1">
			{tags.map((tag, index) => {
				return <Chip key={index} name={tag} />;
			})}
		</div>
	);
};

export default Tag;
