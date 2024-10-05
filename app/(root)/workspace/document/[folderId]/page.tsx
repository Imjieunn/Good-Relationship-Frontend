import Link from 'next/link';

import DocumentHeader from '@/components/document/DocumentHeader';
import FolderList from '@/components/document/FolderList';

const DocumentPage = ({ params }: { params: { folderId: string } }) => {
	const { folderId } = params;
	return (
		<div className="h-full flex flex-col">
			<DocumentHeader />
			<Link href={'/workspace/document'} className="mt-[20px] sm:hidden">
				선택한폴더명 &gt;
			</Link>
			<div className="flex flex-1 mt-[20px] sm:mt-[40px] gap-[5vw]">
				<FolderList folderId={folderId} />
				{/* <FileList folderId={folderId} /> */}
			</div>
		</div>
	);
};

export default DocumentPage;
