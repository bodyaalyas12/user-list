import { ADD_NEW, DELETE_ITEM, SORT_BY } from './actionTypes'
const initialState = {
	users: JSON.parse(localStorage.getItem('users')) || [],
	sortedBy: '',
	direction: ''
}
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_NEW:
			const newState = { ...state, users: [...state.users, action.payload] }
			localStorage.setItem('users', JSON.stringify(newState.users))
			return newState
		case DELETE_ITEM:
			const newArray = state.users.filter((element, index) => index !== action.payload)
			const freshState = { ...state, users: newArray }
			localStorage.setItem('users', JSON.stringify(freshState.users))
			return freshState
		case SORT_BY:
			const sortedArray = state.users.sort((a, b) =>
				action.payload.direction === 'asc'
					? a[action.payload.name] > b[action.payload.name]
					: a[action.payload.name] < b[action.payload.name]
			)
			const refreshedState = {
				...state,
				users: [...sortedArray],
				sortedBy: action.payload.name,
				direction: action.payload.direction
			}
			localStorage.setItem('users', JSON.stringify(refreshedState.users))
			return { ...refreshedState }
		default:
			return state
	}
}
export default reducer
