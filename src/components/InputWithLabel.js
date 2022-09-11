import React from 'react';
import PropTypes from 'prop-types';

const InputWithLabel = ({
	children,
	todoTitle,
	handleTitleChange,
	isFocused,
}) => {
	const inputRef = React.useRef();

	React.useEffect(() => {
		inputRef.current.focus();
	}, []);
	return (
		<>
			<label htmlFor='todoTitle'>{children} </label>
			<input
				ref={inputRef}
				id='todoTitle'
				name='title'
				value={todoTitle}
				onChange={handleTitleChange}
				placeholder='Enter a Todo'
			/>
		</>
	);
};

InputWithLabel.prototype = {
	handleTitleChange: PropTypes.func,
	todoTitle: PropTypes.string,
	isFocused: PropTypes.bool,
	children: PropTypes.string,
};

export default InputWithLabel;
