import FileContentClient from './FileContentClient';

import { getWorkspaceInfo } from '@/apis/workspace';

interface FileContentProps {
	fileId: number;
}

const FileContent = async ({ fileId }: FileContentProps) => {
	const { workspaceId } = await getWorkspaceInfo();

	return <FileContentClient fileId={fileId} workspaceId={workspaceId} />;
};

export default FileContent;
