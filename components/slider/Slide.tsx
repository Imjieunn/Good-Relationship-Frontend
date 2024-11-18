import RoundedButton from '@/components/RoundedButton';
import Description from '@/components/slider/Description';
import Tag from '@/components/slider/Tag';
import Title from '@/components/slider/Title';

type SlideProps = {
	title: string;
	description: string;
	tags: string[];
	image: string;
};

const Slide = ({ title, description, tags }: SlideProps) => {
	return (
		<section className="flex flex-col sm:flex-row items-center gap-[48px]">
			<div className="flex flex-col p-[10px] gap-2">
				<Tag tags={tags} />
				<Title content={title} />
				<Description content={description} />
				<RoundedButton size="Large">무료로 시작하기</RoundedButton>
			</div>
			<div className="bg-gray-500 w-[350px] h-[200px]" />
		</section>
	);
};

export default Slide;
