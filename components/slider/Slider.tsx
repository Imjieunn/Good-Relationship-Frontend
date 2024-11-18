'use client';

import { useState } from 'react';

import { contents, SLIDES_LENGTH, tags, titles } from '@/components/slider/data';
import Progressbar from '@/components/slider/Progressbar';
import Slide from '@/components/slider/Slide';

const Slider = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const getNextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % SLIDES_LENGTH);
	};
	const getPrevSlide = () => {
		setCurrentSlide((prev) => (prev - 1 + SLIDES_LENGTH) % SLIDES_LENGTH);
	};

	return (
		<div className="flex flex-col gap-1 justify-center h-full items-center">
			<Slide
				key={currentSlide}
				title={titles[currentSlide]}
				description={contents[currentSlide]}
				tags={tags[currentSlide]}
				image="https://via.placeholder.com/150"
			/>
			<Progressbar getNextSlide={getNextSlide} getPrevSlide={getPrevSlide} />
		</div>
	);
};

export default Slider;
