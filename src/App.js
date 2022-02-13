// import { useContext } from 'react';
import * as actions from './actions/types';
// import { GeneralContext } from './context/generalContext';
import { connect } from 'react-redux';
import Sparkles from './componets/Sparkles';

function App(props) {
	// const { dispatch } = useContext(GeneralContext);

	const handleOnClick = (type) => {
		if (type === 'ADD_SPARKLE') {
			props.onAddSparkle();
		} else if (type === 'REMOVE_SPARKLE') {
			props.onRemoveSparkle();
		}
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

const mapDispatchToProps = (dispatch) => ({
	onAddSparkle: () => dispatch({ type: actions.ADD_SPARKLE }),
	onRemoveSparkle: () => dispatch({ type: actions.REMOVE_SPARKLE }),
});

export default connect(null, mapDispatchToProps)(App);
