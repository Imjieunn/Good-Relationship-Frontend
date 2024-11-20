'use client';
import Image from 'next/image';
import { useState } from 'react';

import { mockGetDocumenFoldertInfoData } from '@/mocks/documentFolder';

const DocumentHeader = () => {
	const [folders, setFolders] = useState(mockGetDocumenFoldertInfoData);

	const addFolder = () => {
		console.log('폴더 추가!');
		setFolders([...folders, { folderId: 4, folderName: 'Untitled', files: [] }]);
	};

	// useEffect(() => {
	// 	console.log('현재 폴더 상태: ', folders);
	// }, [folders]);

	return (
		<div className="w-full typo-Header4 flex gap-3">
			<div>기록</div>
			<Image
				src="/icons/add_folder.svg"
				alt="add folder button"
				width={32}
				height={32}
				className="cursor-pointer"
				onClick={addFolder}
			/>
		</div>
	);
};

export default DocumentHeader;
