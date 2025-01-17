import { useMeeting } from '@/hooks/meeting';

export const useLocalStream = () => {
	const { localStreamRef } = useMeeting();

	const getLocalStream = async (constraints?: MediaStreamConstraints) => {
		return await navigator.mediaDevices.getUserMedia(constraints || { video: true, audio: true });
	};

	const setLocalStream = (stream: MediaStream) => {
		localStreamRef.current = stream;
	};

	const addStreamTracksToPeer = (peerConnection: RTCPeerConnection) => {
		if (!localStreamRef.current) {
			return;
		}

		localStreamRef.current.getTracks().forEach((track) => {
			if (!localStreamRef.current) {
				return;
			}
			peerConnection.addTrack(track, localStreamRef.current);
		});
	};

	const toggleMuteCamera = () => {
		if (!localStreamRef.current) {
			return;
		}

		localStreamRef.current.getVideoTracks()[0].enabled = !localStreamRef.current.getVideoTracks()[0].enabled;
	};

	const toggleMuteMicrophone = () => {
		if (!localStreamRef.current) {
			return;
		}

		localStreamRef.current.getAudioTracks()[0].enabled = !localStreamRef.current.getAudioTracks()[0].enabled;
	};

	const getDevices = async () => {
		return await navigator.mediaDevices.enumerateDevices();
	};

	return {
		localStreamRef,
		setLocalStream,
		getLocalStream,
		addStreamTracksToPeer,
		toggleMuteCamera,
		toggleMuteMicrophone,
		getDevices,
	};
};
