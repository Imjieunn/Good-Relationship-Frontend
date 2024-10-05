import { GetDocumentFileInfoDTO } from './getDocumentFileInfoDTO';

export type GetDocumentFolderStateDTO = {
	folderId: number;
	folderName: string;
	files: GetDocumentFileInfoDTO[];
};
