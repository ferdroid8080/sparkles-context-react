import { connect } from 'react-redux';

const Sparkles = (props) => {
	const counter = props.sparkles;
	const sparklesArray = Array(counter).fill('✨');
	console.log('Render Sparkles....');
	return <p className='Sparkles'>{sparklesArray.join(' ')}</p>;
};

const mapStateToProps = (state) => ({
	sparkles: state.sparkles,
});

export default connect(mapStateToProps)(Sparkles);
