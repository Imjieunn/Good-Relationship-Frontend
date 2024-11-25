'use client';

import { LiveblocksProvider, RoomProvider } from '@liveblocks/react';

import Editor from './editor';

import { getWorkspaceInfo } from '@/apis/workspace';
// import { fileEditorContents } from '@/mocks/fileEditor';

interface FileContentProps {
	fileId: number;
}
const FileContent = async ({ fileId }: FileContentProps) => {
	const { workspaceId } = await getWorkspaceInfo();

	return (
		<div className="mt-8">
			{/* onChange에는 변화하는 document 넣기 (update) */}
			{/* <Editor onChange={() => {}} initialContent={data} /> */}
			<LiveblocksProvider
				publicApiKey={'pk_prod_TTYuOuBeUFo0F3yE3TWnVdKg150fOkiMmIPUQvOHKTFoHa5eAH2263GKyo_bQ26D'}
			>
				<RoomProvider id={`${workspaceId}-${fileId}`}>
					<Editor />
				</RoomProvider>
			</LiveblocksProvider>
		</div>
	);
};

export default FileContent;
