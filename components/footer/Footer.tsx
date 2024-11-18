import Info from '@/components/footer/Info';
import { infoDataList } from '@/components/footer/into.data';

const Footer = () => {
	return (
		<footer className="bg-gray-100 min-h-[200px] sm:px-[140px] px-4 py-10 flex gap-10 flex-wrap content-center">
			{infoDataList.map((info, index) => (
				<Info key={index} {...info} />
			))}
		</footer>
	);
};

export default Footer;
