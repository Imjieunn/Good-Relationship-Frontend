import { GetDocumentFolderStateDTO } from '../models/document/getDocumentFolderStateDTO';

export const mockGetDocumenFoldertInfoData: GetDocumentFolderStateDTO[] = [
	{
		folderId: 1,
		folderName: 'folder1 으하하하하하하',
		files: [
			{
				fileId: 1,
				fileName: 'file1.txt',
			},
			{
				fileId: 2,
				fileName: 'file2.pdf',
			},
			{
				fileId: 3,
				fileName: 'file3.jpg',
			},
		],
	},
	{
		folderId: 2,
		folderName: 'folder2',
		files: [
			{
				fileId: 4,
				fileName: 'file4.doc',
			},
			{
				fileId: 5,
				fileName: 'file5.docx',
			},
			{
				fileId: 6,
				fileName: 'file6.xlsx',
			},
		],
	},
	{
		folderId: 3,
		folderName: 'Untitled',
		files: [],
	},
];
