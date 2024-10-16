import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Photo from './components/Photo'
import Username from './components/Username'
import Todoa from './components/Todoa'
import { FireOutlined } from '@ant-design/icons'

const App = () => {
	return (
		<Router>
			<div>
				<Header />
				<Routes>
					<Route path='/todo' element={<Todoa />} />
					<Route path='/signina' element={<Signin />} />
					<Route path='/signupa' element={<Signup />} />
					<Route path='photo' element={<Photo />} />
					<Route path='username' element={<Username />} />
					<Route
						path='/'
						element={
							<div className='flex justify-center items-center h-[100vh] w-[1200px] m-auto min-h-screen  bg-slate-100'>
								<h2 className='text-purple-400 text-9xl '>
									<FireOutlined />
								</h2>
							</div>
						}
					/>
				</Routes>
			</div>
		</Router>
	)
}

export default App
