import Image from 'next/image';

import Chatting from './Chatting';

import { PopoverClose, PopoverContent } from '@/components/ui/popover';

const ChattingPop = () => {
	return (
		<PopoverContent
			align="end"
			className="w-screen h-screen md:w-[370px] md:h-[75vh] md:max-h-[720px] md:block py-0 z-0 text-black translate-y-[-14px]"
		>
			<Chatting>
				<PopoverClose>
					<Image src="/icons/close.svg" alt="close chatting" width={15} height={15} />
				</PopoverClose>
			</Chatting>
		</PopoverContent>
	);
};

export default ChattingPop;
