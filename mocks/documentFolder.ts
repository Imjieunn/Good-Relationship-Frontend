import { GetDocumentFolderInfoDTO } from '@/models/document/getDocumentFolderInfoDTO';

export const mockGetDocumenFoldertInfoData: GetDocumentFolderInfoDTO[] = [
	{
		folderId: 1,
		folderName: 'folder1 으하하하하하하',
		isOpen: true,
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
		isOpen: false,
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
		isOpen: false,
		files: [],
	},
];
