import { FileInfo, FolderId } from '../entity/document';

export type CreateFileInfoDTO = FileInfo & {
	folderId: FolderId;
};
