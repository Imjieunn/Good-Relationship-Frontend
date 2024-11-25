'use client';

import { BlockNoteEditor } from '@blocknote/core';
import { BlockNoteView } from '@blocknote/mantine';
import { useCreateBlockNote } from '@blocknote/react';
import { useRoom } from '@liveblocks/react/suspense';
import { LiveblocksYjsProvider } from '@liveblocks/yjs';
import { useEffect, useState } from 'react';
import * as Y from 'yjs';
import '@blocknote/mantine/style.css';

// import { patchFileContent } from '@/apis/document';
import { getUserInfo } from '@/apis/user';

const baseColorsRGB = [
	'rgb(255, 99, 71)', // Tomato Red
	'rgb(135, 206, 235)', // Sky Blue
	'rgb(34, 139, 34)', // Forest Green
	'rgb(255, 255, 0)', // Yellow
	'rgb(128, 0, 128)', // Purple
	'rgb(255, 165, 0)', // Orange
	'rgb(255, 192, 203)', // Pink
	'rgb(0, 128, 128)', // Teal
	'rgb(75, 0, 130)', // Indigo
	'rgb(0, 255, 0)', // Lime Green
];

const Editor = () => {
	const room = useRoom();
	const [doc, setDoc] = useState<Y.Doc>();
	const [provider, setProvider] = useState<unknown>();

	useEffect(() => {
		const yDoc = new Y.Doc();
		const yProvider = new LiveblocksYjsProvider(room, yDoc);
		setDoc(yDoc);
		setProvider(yProvider);

		return () => {
			yDoc?.destroy();
			yProvider?.destroy();
		};
	}, [room]);

	if (!doc || !provider) {
		return null;
	}

	return <BlockNote doc={doc} provider={provider} />;
};

type EditorProps = {
	doc: Y.Doc;
	provider: unknown;
};

function BlockNote({ doc, provider }: EditorProps) {
	const [name, setName] = useState('Gest');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getName = async () => {
			try {
				const { userName } = await getUserInfo();
				setName(userName);
			} catch (error) {
				console.error('Error fetching user info:', error);
			}
		};

		getName(); // 함수 호출

		setIsLoading(true);
	}, []);

	const editor: BlockNoteEditor = useCreateBlockNote({
		collaboration: {
			provider,

			// Y.Doc에 blockNote 데이터 저장
			fragment: doc.getXmlFragment('document-store'),

			user: {
				name: name,
				color: baseColorsRGB[Math.random() % 10],
			},
		},
	});

	// // Save content to server when changes are detected
	// useEffect(() => {
	// 	if (!editor) return;

	// 	const handleContentChange = () => {
	// 		const content = editor; // Extract editor content as JSON
	// 		patchFileContent(1, { content: JSON.stringify(content) }); // Send to server
	// 	};

	// 	editor.addEventListener('change', handleContentChange); // Listen for content changes

	// 	return () => {
	// 		editor.events.off('change', handleContentChange); // Cleanup
	// 	};
	// }, [editor]);

	return <div>{isLoading ? <BlockNoteView editor={editor} /> : <p>로딩중,,</p>}</div>;
}

export default Editor;
