import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyles from './components/styled/globalStyles'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.render(
	<Provider store={store}>
		<GlobalStyles />
		<App />
	</Provider>,
	document.getElementById('root')
)
