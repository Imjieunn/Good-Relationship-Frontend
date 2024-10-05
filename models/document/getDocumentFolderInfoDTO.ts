import { GetDocumentFolderStateDTO } from './getDocumentFolderStateDTO';

export type GetDocumentFolderInfoDTO = {
	folderInfo: GetDocumentFolderStateDTO[];
	openFolder: number | undefined;
};
