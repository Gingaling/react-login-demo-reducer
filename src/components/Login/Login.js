import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-2724481_960_720.png';
import './Login.css';
import { handleBlur, handleChange } from '../../utils/formUtils';

function Login() {
	let navigate = useNavigate();
	const initialState = {
		email: { value: '', touched: false, hasError: true, errors: [] },
		password: { value: '', touched: false, hasError: true, errors: [] },
		isFormValid: false,
	};
	const [formState, dispatch] = useReducer(formReducer, initialState);

	function formReducer(state, action) {
		switch (action.type) {
			case 'UPDATE':
				const { name, value, hasError, errors, touched, isFormValid } =
					action.data;
				return {
					...state,
					[name]: { ...state[name], value, hasError, errors, touched },
					isFormValid,
				};
			default:
				return state;
		}
	}
	function handleLogin(event) {
		event.preventDefault();
		console.log('form submitted');
	}

	return (
		<div className='login-page-container'>
			<div className='login-page-form-container'>
				<div className='logo-container'>
					<img src={logo} alt='logo' />
				</div>
				<form onSubmit={handleLogin}>
					<label htmlFor='email'>Email</label>
					<input
						type='email'
						placeholder='Email Address'
						name='email'
						id='email'
						value={formState.email.value}
						onChange={(event) => handleChange(event, dispatch, formState)}
						onBlur={(event) => handleBlur(event, dispatch, formState)}
						//if after this field has been touched and there is an error, changes classname to 'error'
						className={
							formState.email.touched && formState.email.errors.length
								? 'error'
								: ''
						}
					/>
					<div className='error-container'>
						{/* if after the state has been touched, displays any
							errors by mapping over errors array and displaying messages*/}
						{formState.email.touched &&
							!!formState.email.errors.length &&
							formState.email.errors.map((error) => (
								<p className='error-message' key={error}>
									{error}
								</p>
							))}
					</div>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						placeholder='Password'
						id='password'
						name='password'
						value={formState.password.value}
						onChange={(event) => handleChange(event, dispatch, formState)}
						onBlur={(event) => handleBlur(event, dispatch, formState)}
						//if after this field has been touched and there is an error, changes classname to 'error'
						className={
							formState.password.touched && formState.password.errors.length
								? 'error'
								: ''
						}
					/>
					<div className='error-container'>
						{/* if after the state has been touched, displays any
							errors by mapping over errors array and displaying messages*/}
						{formState.password.touched &&
							!!formState.password.errors.length &&
							formState.password.errors.map((error) => (
								<p className='error-message' key={error}>
									{error}
								</p>
							))}
					</div>
					<input
						className='login-button'
						type='submit'
						value='Login'
						disabled={!formState.isFormValid}
					/>
				</form>
				<div className='form-bottom-links'>
					<div className='other-links'>
						<a href='#'>Forgot my password</a> |<a href='#'> Sign Up</a>
					</div>
					<div className='copyright'>&copy; 2019 A Company</div>
				</div>
			</div>
			<div className='support'>
				<p>
					Need help? No problem! Email{' '}
					<a href='mailto:support@acompany.com'>support@acompany</a> or call
					800-377-6915.
				</p>
			</div>
		</div>
	);
}

export default Login;
