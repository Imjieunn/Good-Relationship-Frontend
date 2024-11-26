'use client';

import { Client } from '@stomp/stompjs';
import { createContext, ReactNode, useContext, useEffect, useRef } from 'react';
import SockJS from 'sockjs-client';

const WebsocketContext = createContext<Client>({} as Client);

export const useWebsocket = () => {
	const context = useContext(WebsocketContext);
	if (context === undefined) {
		throw new Error('useWebsocket must be used within a WebsocketProvider');
	}

	return context;
};

const initializeWebsocket = (accessToken: string) => {
	const stompClient = new Client({
		brokerURL: `${process.env.NEXT_PUBLIC_WEBSOCKET_URL}`,
		connectHeaders: {
			Authorization: `Bearer ${accessToken}`,
		},
		reconnectDelay: 0,
		onStompError: (frame) => {
			// TODO: stomp 오류 처리
			console.error('Broker reported error: ' + frame.headers['message']);
			console.error('Additional details: ' + frame.body);
		},
		debug: (str) => {
			console.log(str);
		},
		webSocketFactory: () => new SockJS(`${process.env.NEXT_PUBLIC_WEBSOCKET_URL}`),
	});

	stompClient.activate();
	return stompClient;
};

export const WebsocketProvider = ({ children, accessToken }: { children: ReactNode; accessToken: string }) => {
	const stompClient = useRef<Client>(initializeWebsocket(accessToken));

	useEffect(() => {
		return () => {
			if (stompClient.current && stompClient.current.connected) {
				stompClient.current.deactivate();
			}
		};
	}, []);

	return <WebsocketContext.Provider value={stompClient.current}>{children}</WebsocketContext.Provider>;
};
