type ProgressbarProps = {
	getNextSlide: () => void;
	getPrevSlide: () => void;
};

const Progressbar = ({ getNextSlide, getPrevSlide }: ProgressbarProps) => {
	return (
		<div className="w-full max-w-[600px] flex justify-between">
			<button onClick={getPrevSlide}>left</button>
			<button onClick={getNextSlide}>right</button>
		</div>
	);
};

export default Progressbar;
