'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import FileList from './FileList';
import FolderInfo from './FolderInfo';

import { mockGetDocumenFoldertInfoData } from '@/mocks/documentFolder';
import { getFolders } from '@/stores/atoms/getFolders';

interface folderInfoData {
	folderId?: string;
}

const FolderList = ({ folderId }: folderInfoData) => {
	const [folders, setFolders] = useRecoilState(getFolders);
	useEffect(() => {
		setFolders(mockGetDocumenFoldertInfoData);
	}, []);

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
		<div className="flex gap-[5vw]">
			<div className={`${folderId ? 'hidden' : 'block'} sm:block h-full max-h-[480px]`}>
				{folders.map((folder) => {
					return <FolderInfo folderId={folder.folderId} onFolderSelect={handleFolderState} />;
				})}
			</div>
			<FileList />
		</div>
	);
};

export default FolderList;
