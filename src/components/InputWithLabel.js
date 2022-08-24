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
			/>
		</>
	);
};

InputWithLabel.prototype = {
	handleTitleChange: PropTypes.func,
};

export default InputWithLabel;
