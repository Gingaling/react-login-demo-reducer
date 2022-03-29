import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import UserHome from './components/UserHome/UserHome';
import './App.css';

function App() {
	return (
		<div className='container'>
			<Routes>
				<Route path='/' element={<Login />} />
				<Route path='/home' element={<UserHome />} />
			</Routes>
		</div>
	);
}

export default App;
