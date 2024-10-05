import { atom } from 'recoil';

import { GetDocumentFolderInfoDTO } from '@/models/document/getDocumentFolderInfoDTO';

export const getFolders = atom<GetDocumentFolderInfoDTO>({
	key: 'getFolders',
	default: {
		folderInfo: [],
		openFolder: undefined,
	},
});
