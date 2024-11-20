'use client';

import { useEffect } from 'react';
import { useRecoilState } from 'recoil';

import FileList from './FileList';
import FolderInfo from './FolderInfo';

import { mockGetDocumenFoldertInfoData } from '@/mocks/documentFolder';
import { FolderId } from '@/models/document/entity/document';
import { getFolders } from '@/stores/atoms/getFolders';

const FolderList = () => {
	const [folders, setFolders] = useRecoilState(getFolders);

	useEffect(() => {
		setFolders((prev) => ({ ...prev, folderInfo: mockGetDocumenFoldertInfoData }));
	}, []);

	const handleFolderState = (selectedFolderId: FolderId) => {
		setFolders((prev) => ({ ...prev, openFolder: selectedFolderId }));
	};

	return (
		<div className="flex gap-[5vw]">
			<div className={`sm:block h-full max-h-[480px]`}>
				{folders.folderInfo.map((folder) => {
					return <FolderInfo folderId={folder.folderId} onFolderSelect={handleFolderState} />;
				})}
			</div>
			<FileList folderId={folders.openFolderID} />
		</div>
	);
};

export default FolderList;
