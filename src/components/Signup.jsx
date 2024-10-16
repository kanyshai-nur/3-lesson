import React from 'react'

const Signup = () => {
	return (
		<>
			<div className='w-[500px] m-auto bg-gradient-to-b from-slate-200 to-slate-200 shadow-lg justify-center items-center h-[76vh] rounded-md mt-[60px] '>
				<h2 className='text-center font-medium text-4xl pt-[30px]'>Sign Up</h2>
				<div className='text-center mt-[25px]'>
					<input
						type='text'
						placeholder='Enter your full name'
						className='border-2 outline-none px-5 py-4 rounded-2xl w-[70%] mt-1'
					/>
					<div>
						<input
							type='text'
							placeholder='Enter your emailid'
							className='border-2 outline-none px-5 py-4 rounded-2xl w-[70%]  mt-[20px]'
						/>
					</div>
					<input
						type='text'
						placeholder='Enter password'
						className='border-2 outline-none px-5 py-4 rounded-2xl w-[70%] mt-[20px]'
					/>
					<div>
						<input
							type='text'
							placeholder='Enter confirm password'
							className='border-2 outline-none px-5 py-4 rounded-2xl w-[70%] mt-[20px]'
						/>
					</div>
					<button className='text-center text-base font-medium bg-gradient-to-b from-purple-700 to-purple-900  text-white  w-[70%] px-5 py-4 rounded-2xl mt-7'>
						Sign Up
					</button>
				</div>
			</div>
		</>
	)
}

export default Signup
