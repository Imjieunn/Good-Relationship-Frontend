'use client';

import { LiveblocksProvider, RoomProvider } from '@liveblocks/react';

import Editor from './editor';

interface FileContentClientProps {
	fileId: number;
	workspaceId: string;
}

const FileContentClient = ({ fileId, workspaceId }: FileContentClientProps) => {
	return (
		<div className="mt-8">
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

export default FileContentClient;
