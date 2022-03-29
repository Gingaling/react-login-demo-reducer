function validateInput(name, value) {
	let hasError = false;
	let errors = [];
	switch (name) {
		case 'email':
			// check length
			if (value.trim() === '') {
				hasError = true;
				errors.push('Email cannot be empty');
			}
			// check @
			if (!value.includes('@')) {
				hasError = true;
				errors.push('Email must include @ symbol');
			}
			// check .
			if (!value.includes('.')) {
				hasError = true;
				errors.push('Email must include at least one "."');
			}
			break;
		case 'password':
			// check entered
			if (value.trim() === '') {
				hasError = true;
				errors.push('Password cannot be empty');
			}
			// check length
			if (value.length < 8) {
				hasError = true;
				errors.push('Password must be at least 8 characters');
			}
			break;
		default:
			break;
	}

	return { hasError, errors };
}

export function handleBlur(event, dispatch, formState) {
	const { hasError, errors } = validateInput(
		event.target.name,
		event.target.value
	);
	let isFormValid = true;

	for (const key in formState) {
		const item = formState[key];
		if (key === event.target.name && hasError) {
			isFormValid = false;
		} else if (key !== event.target.name && item.hasError) {
			isFormValid = false;
			break;
		}
	}
	dispatch({
		type: 'UPDATE',
		data: {
			name: event.target.name,
			value: event.target.value,
			hasError,
			errors,
			touched: true,
			isFormValid,
		},
	});
}

export function handleChange(event, dispatch, formState) {
	const { hasError, errors } = validateInput(
		event.target.name,
		event.target.value
	);
	let isFormValid = true;

	for (const key in formState) {
		const item = formState[key];
		if (key === event.target.name && hasError) {
			isFormValid = false;
		} else if (key !== event.target.name && item.hasError) {
			isFormValid = false;
			break;
		}
	}
	dispatch({
		type: 'UPDATE',
		data: {
			name: event.target.name,
			value: event.target.value,
			hasError,
			errors,
			touched: false,
			isFormValid,
		},
	});
}
