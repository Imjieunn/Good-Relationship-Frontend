import { contents, tags, titles } from '@/components/slider/data';
import Slide from '@/components/slider/Slide';

const Slider = () => {
	const index = [0, 1, 2];

	return (
		<div className="flex gap-1">
			{index.map((i) => {
				return (
					<Slide
						key={i}
						title={titles[i]}
						description={contents[i]}
						tags={tags[i]}
						image="https://via.placeholder.com/150"
					/>
				);
			})}
		</div>
	);
};

export default Slider;
