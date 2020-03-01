import { useState } from 'react'

const useForm = (callback, validation, initialForm) => {
	const [form, setForm] = useState(initialForm)
	const [errors, setErrors] = useState({
		firstName: '',
		lastName: '',
		phone: '',
		age: '',
		gender: ''
	})

	const handleChange = ({ target }) => {
		const { value, name } = target
		const error = validation[`${name}Validation`](value)
		setErrors({ ...errors, [name]: error })
		setForm({ ...form, [name]: value })
	}

	const handleSubmit = event => {
		const errorObj = {}
		Object.keys(form).forEach(key => {
			const error = validation[`${key}Validation`](form[key])
			errorObj[key] = error
		})
		setErrors(errorObj)
		if (!Object.values(errorObj).find(element => element)) {
			callback(form)
			setForm(initialForm)
		}
	}

	return [form, errors, handleChange, handleSubmit]
}

export default useForm
