import React, { createContext } from 'react';
import { useSocket } from '../hooks/useSocket';

const pathServer = 'http://localhost:8080';

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {
	const { socket, online } = useSocket(pathServer);

	return (
		<SocketContext.Provider value={{ socket, online }}>
			{children}
		</SocketContext.Provider>
	);
};
