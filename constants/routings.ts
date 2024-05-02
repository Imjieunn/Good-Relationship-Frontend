import { IconId } from '@/types/icons';

type SidebarRoutingType = {
	label: string;
	path: string;
	icon: IconId;
};

export const sidebarRoutings: SidebarRoutingType[] = [
	{
		label: '회의하기',
		path: '/meeting',
		icon: 'webcam',
	},
	{
		label: '기록하기',
		path: '/document',
		icon: 'pencil',
	},
	{
		label: '일정 관리',
		path: '/schedule',
		icon: 'calendar',
	},
	{
		label: '팀스페이스 설정',
		path: '/setting',
		icon: 'setting',
	},
];

export const URLS = Object.freeze({
	WORKSPACE: '/',
	WORKSPACE_MEETING: '/meeting',
	WORKSPACE_DOCUMENT: '/document',
	WORKSPACE_SCHEDULE: '/schedule',
	WORKSPACE_SETTING: '/setting',
	WORKSPACE_DOCUMENT_FILE: '/document-file',
	WORKSPACE_MEETING_ROOM: '/meeting-room',
	WORKSPACE_WHITEBOARD_FILE: '/whiteboard-file',
	ONBOARDING_CREATE: '/onboarding/create',
	ONBOARDING_EMPTY: '/onboarding/empty',
	ONBOARDING_INVITED: '/onboarding/invited',
	ONBOARDING_OVERFLOW: '/onboarding/overflow',
	LOGIN: '/login',
	LOGIN_KAKAO: '/login/kakao',
	LOGIN_NAVER: '/login/naver',
});

export const getWorkspaceDocumentFileUrl = (fileId: string) => `${URLS.WORKSPACE_DOCUMENT_FILE}/${fileId}`;
export const getWorkspaceMeetingRoomUrl = (meetingId: string) => `${URLS.WORKSPACE_MEETING_ROOM}/${meetingId}`;
export const getWorkspaceWhiteboardFileUrl = (fileId: string) => `${URLS.WORKSPACE_WHITEBOARD_FILE}/${fileId}`;

export const API_URLS = Object.freeze({
	SEARCH_SCHOOL: (schoolName: string) => `/workspace/school?name=${schoolName}`,
	CREATE_WORKSPACE: '/workspace/create',
	GET_WORKSPACE_INFO: '/workspace/info',
});

export type UrlKeyType = keyof typeof URLS;
export type UrlType = (typeof URLS)[UrlKeyType];
export type ApiUrlKeyType = keyof typeof API_URLS;
export type ApiUrlType = (typeof API_URLS)[ApiUrlKeyType];
export type RoutingKeyType = UrlKeyType | ApiUrlKeyType;
export type RoutingType = UrlType | ApiUrlType;
