'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import FolderInfo from './FolderInfo';

import { mockGetDocumenFoldertInfoData } from '@/mocks/documentFolder';

interface folderInfoData {
	folderId?: string;
}

const FolderList = ({ folderId }: folderInfoData) => {
	const [folders, setFolders] = useState(mockGetDocumenFoldertInfoData);

	const router = useRouter();

	const handleFolderState = (selectedFolderId: number) => {
		router.push(`/workspace/document/${selectedFolderId}`);

		const updatedFolder = folders.map((folder) => {
			if (folder.folderId == selectedFolderId) {
				return { ...folder, isOpen: true };
			} else {
				return { ...folder, isOpen: false };
			}
		});
		setFolders(updatedFolder);
	};

	return (
		<div className={`${folderId ? 'hidden' : 'block'} sm:block h-full max-h-[480px]`}>
			{folders.map((folder) => {
				return (
					<FolderInfo
						folderId={folder.folderId}
						folderName={folder.folderName}
						isOpen={folder.isOpen}
						onFolderSelect={handleFolderState}
					/>
				);
			})}
			ddd
		</div>
	);
};

export default FolderList;
