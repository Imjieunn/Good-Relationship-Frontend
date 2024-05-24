'use server';

import { cookies } from 'next/headers';

import { login, refreshAccessToken } from '@/apis/auth';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '@/constants/storage';
import { LoginRequestDTO } from '@/models/auth/request/loginRequestDTO';

export const useLogin = async ({ loginProvider, inviteCode, code }: LoginRequestDTO) => {
	const cookieStore = cookies();
	const loginData = await login({ loginProvider, inviteCode, code });
	if (loginData) {
		cookieStore.set(ACCESS_TOKEN, loginData.accessToken);
		cookieStore.set(REFRESH_TOKEN, loginData.refreshToken);
	}

	return loginData;
};

export const useLogout = () => {
	const cookieStore = cookies();
	cookieStore.delete(ACCESS_TOKEN);
	cookieStore.delete(REFRESH_TOKEN);
};

const isTokenExpired = (token: string) => {
	const [, payloadEncoded] = token.split('.');
	const payload = JSON.parse(Buffer.from(payloadEncoded, 'base64').toString());

	if (!payload.exp) {
		return false;
	}

	const currentTimeInSeconds = Math.floor(Date.now() / 1000);
	const tokenExpireTime = payload.exp;

	return currentTimeInSeconds >= tokenExpireTime;
};

export const useGetAccessToken = async () => {
	const cookieStore = cookies();
	let accessToken = cookieStore.get(ACCESS_TOKEN)?.value || '';

	if (isTokenExpired(accessToken)) {
		const refreshToken = await useGetRefreshToken();
		accessToken = await refreshAccessToken(refreshToken);
		cookieStore.set(ACCESS_TOKEN, accessToken);
	}

	return accessToken;
};

export const useGetRefreshToken = () => {
	const cookieStore = cookies();
	return cookieStore.get(REFRESH_TOKEN)?.value || '';
};

export const useIsLoggedIn = () => {
	return !!useGetAccessToken();
};