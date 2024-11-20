import { GetDocumentFileInfoDTO } from '@/models/document/getDocumentFileInfoDTO';
import { GetDocumentFolderStateDTO } from '@/models/document/getDocumentFolderStateDTO';
import { fetcher } from '@/utils/fetcher';

// 폴더 & 파일 정보 모두 불러옴
export const getAllFoldersAndFiles = async () => {
	const url = '/docs/all';
	await fetcher(url, true);
};

// 폴더 생성 ('+' 버튼 클릭 시, 'Untitled' 이름으로 일단 Post , 이후 Put으로 폴더명 변경)
export const createNewFolder = async ({ folderName }: GetDocumentFolderStateDTO) => {
	const url = '/docs/folder';
	const fetch = await fetcher(url, true, {
		method: 'POST',
		body: JSON.stringify({ folderName }),
	});
	return fetch;
};

// 폴더 수정(api 없음)

// 폴더 삭제(api 없음)

// 파일 생성 ('+' 버튼 클릭 시, 'Untitled' 이름으로 일단 Post , 이후 Put으로 폴더명 변경)
export const createNewFile = async ({ fileName, folderId, content }: GetDocumentFileInfoDTO) => {
	const url = '/docs/file';
	const fetch = await fetcher(url, true, {
		method: 'POST',
		body: JSON.stringify({ fileName, folderId, content }),
	});
	return fetch;
};

// 파일 수정(api 없음)

// 파일 삭제(api 없음)

// 문서 조회
export const getFileContent = async ({ fileId }: GetDocumentFileInfoDTO) => {
	const url = `/docs/file/${fileId}`;
	await fetcher(url, true);
};

// 문서 수정
export const updateFileContent = async ({ fileId, fileName, folderId, content }: GetDocumentFileInfoDTO) => {
	const url = `/docs/file/${fileId}`;
	const fetch = await fetcher(url, true, {
		method: 'PUT',
		body: JSON.stringify({ fileName, folderId, content }),
	});
	return fetch;
};

// 문서 삭제(api 없음)
