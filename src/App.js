import { useContext } from 'react';
import * as actions from './actions/types';
import { GeneralContext } from './context/generalContext';

export const Sparkles = () => {
	const { state } = useContext(GeneralContext);
	const counter = state.sparkles;
	const sparklesArray = Array(counter).fill('✨');
	console.log('Render Sparkles....');
	return <p className='Sparkles'>{sparklesArray.join(' ')}</p>;
};

function App() {
	const { dispatch } = useContext(GeneralContext);

	const handleOnClick = (type) => {
		dispatch({ type });
	};

	return (
		<div>
			<Sparkles />
			<ul>
				<li className='Add'>
					<button onClick={() => handleOnClick(actions.ADD_SPARKLE)}>
						Agregar
					</button>
				</li>
				<li className='Remove'>
					<button
						onClick={() => handleOnClick(actions.REMOVE_SPARKLE)}
					>
						Eliminar
					</button>
				</li>
			</ul>
		</div>
	);
}

export default App;
