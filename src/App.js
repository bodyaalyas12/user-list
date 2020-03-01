import React from 'react'
import { FlexBlock } from './components/styled'
import UserList from './components/UserList'
import Form from './components/Form'

function App() {
	return (
		<div className="App">
			<Form />
			<UserList />
		</div>
	)
}

export default App
