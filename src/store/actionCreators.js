import { ADD_NEW, DELETE_ITEM, SORT_BY } from './actionTypes'

export const addNew = user => {
	return {
		type: ADD_NEW,
		payload: user
	}
}
export const deleteItem = index => {
	return {
		type: DELETE_ITEM,
		payload: index
	}
}
export const sortBy = (fieldName, direction) => {
	return {
		type: SORT_BY,
		payload: {
			name: fieldName,
			direction
		}
	}
}
