import { useEffect, useState } from 'react'

const Username = () => {
	const [data, setData] = useState([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => setData(data))
			.catch(error => console.error('Error fetching data:', error))
	}, [])

	const leftColumn = data.slice(0, 5)
	const rightColumn = data.slice(5, 10)

	return (
		<div className='flex justify-between p-4'>
			<div className='w-1/2 bg-slate-200 p-4'>
				<h2 className='text-xl font-bold mb-4'>Left Column</h2>
				{leftColumn.length > 0 ? (
					leftColumn.map(user => (
						<div key={user.id} className='mb-2'>
							<button className='text-center text-base font-medium bg-slate-50  text-purple-700  w-[70%] px-5 py-4 rounded-2xl mt-9'>
								Name: {user.name}
							</button>
						</div>
					))
				) : (
					<p>Loading...</p>
				)}
			</div>
			]
			<div className='w-1/2 bg-slate-200 p-4'>
				<h2 className='text-xl font-bold mb-4'>Right Column</h2>
				{rightColumn.length > 0 ? (
					rightColumn.map(user => (
						<div key={user.id} className='mb-2'>
							<button className='text-center text-base font-medium bg-slate-50  text-purple-700  w-[70%] px-5 py-4 rounded-2xl mt-9  '>
								Name: {user.name}
							</button>
						</div>
					))
				) : (
					<p>Loading...</p>
				)}
			</div>
		</div>
	)
}

export default Username
