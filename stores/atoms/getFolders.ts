import { atom } from 'recoil';

import { GetDocumentFolderInfoDTO } from '@/models/document/GetDocumentFolderInfoDTO';

export const getFolders = atom<GetDocumentFolderInfoDTO[]>({
	key: 'getFolders',
	default: [],
});
