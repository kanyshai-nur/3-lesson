import React, { useState } from 'react'

function App() {
	const [todos, setTodos] = useState([])
	const [input, setInput] = useState('')

	const addTodo = () => {
		if (input.trim()) {
			setTodos([...todos, { text: input, completed: false }])
			setInput('')
		}
	}

	const toggleComplete = index => {
		const newTodos = todos.map((todo, i) =>
			i === index ? { ...todo, completed: !todo.completed } : todo
		)
		setTodos(newTodos)
	}

	const removeTodo = index => {
		const newTodos = todos.filter((_, i) => i !== index)
		setTodos(newTodos)
	}

	return (
		<div className=' w-[1200px] m-auto min-h-screen flex items-center justify-center bg-slate-50'>
			<div className='bg-gradient-to-b from-slate-200 to-slate-200 shadow-lg  rounded-lg p-8 max-w-md w-full'>
				<h1 className=' text-center text-2xl font-bold mb-4 text-gray-800'>
					ToDo List
				</h1>

				<div className='mb-4 flex'>
					<input
						className='border-2  outline-none px-5 py-4 rounded-2xl w-[80%] mt-1'
						type='text'
						value={input}
						onChange={e => setInput(e.target.value)}
						placeholder='Add a new task'
					/>
					<button
						className='bg-gradient-to-b from-purple-700 to-purple-900 text-white px-4  py-1 rounded-3xl '
						onClick={addTodo}
					>
						Add
					</button>
				</div>

				<ul className='space-y-2'>
					{todos.map((todo, index) => (
						<li
							key={index}
							className='flex items-center justify-between p-2 border-b border-gray-300'
						>
							<span
								onClick={() => toggleComplete(index)}
								className={`flex-1 cursor-pointer ${
									todo.completed ? 'line-through text-gray-400' : ''
								}`}
							>
								{todo.text}
							</span>
							<button
								className='bg-red-500 text-white p-1 rounded hover:bg-red-600'
								onClick={() => removeTodo(index)}
							>
								Delete
							</button>
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default App
