'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';

import DocumentInput from './DocumentInput';
import { Popover, PopoverClose, PopoverContent, PopoverTrigger } from '../ui/popover';

import { updateFileName } from '@/apis/document';
import { useDocumentLists } from '@/hooks/documentInfo';
import { cn } from '@/lib/utils';
import { SelectFileInfoDTO } from '@/models/document/request/createFileInfo';

const FileInfo = ({ folderId, fileId, fileName }: SelectFileInfoDTO) => {
	const { fetchDocumentLists } = useDocumentLists();

	const [isEdit, setIsEdit] = useState(false);
	const [newFileName, setNewFileName] = useState(fileName);

	console.log(folderId); // 나중에 삭제 예정

	const updateFileInfo = useCallback(async () => {
		if (newFileName !== fileName) {
			await updateFileName(fileId, newFileName);
			fetchDocumentLists();
		}
	}, [newFileName]);

	useEffect(() => {
		if (!isEdit) {
			updateFileInfo();
		}
	}, [isEdit]);

	const changeEdit = (editState: boolean) => {
		setIsEdit(editState);
	};

	const handleChange = (e: { target: { value: React.SetStateAction<string> } }) => {
		setNewFileName(e.target.value);
	};

	return (
		<div className="flex w-full sm:w-[30vw] sm:max-w-[300px] h-10 items-center">
			<div className="flex justify-between h-full w-full items-center rounded-xl hover:bg-gray-100">
				{isEdit ? (
					<DocumentInput
						className="typo-Body4 flex-1"
						value={newFileName}
						isEdit={isEdit}
						onChange={handleChange}
						changeEdit={changeEdit}
					/>
				) : (
					<Link href={`/workspace/document/${fileId}`}>
						<p
							className={cn(
								'pl-[10px] pt-1 typo-Body4 flex-1',
								newFileName == 'Untitled' ? 'text-gray-300 italic' : '',
							)}
						>
							{newFileName}
						</p>
					</Link>
				)}
				<div className="flex pt-1 pr-2">
					<Popover>
						<PopoverTrigger>
							<div className="w-6 h-6 rounded-md flex justify-center hover:bg-Gray-200">
								<Image
									src="/icons/folder_setting.svg"
									alt="folder setting"
									width={3}
									height={18}
									className="cursor-pointer"
								/>
							</div>
						</PopoverTrigger>
						<PopoverContent className="w-[120px] py-0">
							<PopoverClose asChild>
								<div
									className="w-full h-full p-3 hover:bg-gray-100 cursor-pointer rounded-xl"
									onClick={() => changeEdit(true)}
								>
									파일명 수정
								</div>
							</PopoverClose>
						</PopoverContent>
					</Popover>
				</div>
			</div>
			<div className="w-[2vw]" />
		</div>
	);
};

export default FileInfo;
