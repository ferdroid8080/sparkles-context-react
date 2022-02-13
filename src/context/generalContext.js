import React, { createContext, useReducer } from 'react';
import generalReducer from '../reducer/generalReducer';

const initialState = {
	sparkles: 1,
};

export const GeneralContext = createContext(initialState);

export const GeneralProvider = ({ children }) => {
	const [state, dispatch] = useReducer(generalReducer, initialState);

	return (
		<GeneralContext.Provider value={{ state, dispatch }}>
			{children}
		</GeneralContext.Provider>
	);
};
