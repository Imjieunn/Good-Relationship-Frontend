import { Content, FileName, FolderName } from '../entity/document';

export type UpdateFileContentDTO = {
	fileName: FileName;
	folderName: FolderName;
	content: Content;
};
