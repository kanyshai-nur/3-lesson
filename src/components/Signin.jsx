import React from 'react'

const Signin = () => {
	return (
		<>
			<div className='w-[1200px] m-auto min-h-screen '>
				<div className='w-[500px] m-auto bg-gradient-to-b from-slate-200 to-slate-200 shadow-lg justify-center items-center h-[70vh] rounded-md mt-[60px] '>
					<div className=''>
						<h2 className='text-center font-medium text-5xl pt-[30px] '>
							Sign In
						</h2>
					</div>
					<div className='text-center mt-[30px]'>
						<div>
							<h2 className='mr-[260px] text-1xl'>Username:</h2>
							<input
								type='text'
								placeholder='Enter your username'
								className='border-2 outline-none px-5 py-4 rounded-2xl w-[70%] mt-1'
							/>
						</div>
						<div>
							<h3 className='mr-[260px] mt-[10px] text-1xl'>Password:</h3>
							<input
								type='text'
								placeholder='Enter your password'
								className='border-2  outline-none px-5 py-4 rounded-2xl w-[70%] mt-1'
							/>
						</div>
						<button className='text-center text-base font-medium bg-gradient-to-b from-purple-700 to-purple-900  text-white  w-[70%] px-5 py-4 rounded-2xl mt-9'>
							Sign In
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default Signin
