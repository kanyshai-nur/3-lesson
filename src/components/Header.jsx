import React, { useState } from 'react'

function Header() {
	const [isToggled, setIsToggled] = useState(false)

	const handleToggle = () => {
		setIsToggled(!isToggled)
	}

	return (
		<div className=' w-[1200px] m-auto  '>
			<header className='bg-gradient-to-b from-purple-700 to-purple-900 p-[20px]  shadow-lg'>
				<div className='max-w-7xl mx-auto flex items-center justify-between'>
					<div className='flex-shrink-0'>
						<a
							href='/'
							className='text-5xl font-extrabold text-white tracking-wide hover:text-purple-400 transition duration-300'
						>
							L
						</a>
						<a
							href='/'
							className='text-5xl font-extrabold text-purple-400 tracking-wide hover:text-gray-200 transition duration-300'
						>
							O
						</a>
						<a
							href='/'
							className='text-5xl font-extrabold text-white tracking-wide hover:text-purple-400 transition duration-300'
						>
							G
						</a>
						<a
							href='/'
							className='text-5xl font-extrabold text-purple-400 tracking-wide hover:text-gray-200 transition duration-300'
						>
							O
						</a>
					</div>

					<div className='flex-grow'>
						<div className='flex justify-center '>
							<a
								href='/todo'
								className='text-2xl font-semibold ml-[160px] text-white hover:bg-white hover:text-purple-500 py-2 px-6 rounded-full transition duration-300'
							>
								Todo
							</a>

							<a
								href='/username'
								className='text-2xl font-semibold ml-[40px]  text-white hover:bg-white hover:text-purple-500 py-2 px-6 rounded-full transition duration-300'
							>
								User's
							</a>
							<a
								href='/photo'
								className='text-2xl font-semibold ml-[40px] text-white hover:bg-white hover:text-purple-500 py-2 px-6 rounded-full transition duration-300'
							>
								Photos
							</a>

							<a
								href='/signina'
								className='text-2xl font-semibold ml-[40px] text-white hover:bg-white hover:text-purple-500 py-2 px-6 rounded-full transition duration-300'
							>
								Sign In
							</a>
							<div className='flex items-center'>
								<a
									href='/signupa'
									className='text-2xl font-semibold ml-[40px] text-white hover:bg-white hover:text-purple-500 py-2 px-6 rounded-full transition duration-300'
								>
									Sign Up
								</a>

								<div
									onClick={handleToggle}
									className={` ml-[30px] w-14 h-7 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer transition-colors duration-300 ${
										isToggled ? 'bg-purple-500' : 'bg-gray-300'
									}`}
								>
									<div
										className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ${
											isToggled ? 'translate-x-7' : ''
										}`}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	)
}

export default Header
