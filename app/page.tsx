import Footer from '@/components/footer/Footer';
import Slider from '@/components/slider/Slider';

export default function Home() {
	return (
		<div className="h-full">
			<main className="h-full">
				<Slider />
			</main>
			<Footer />
		</div>
	);
}
