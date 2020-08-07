import {useState} from 'react'

const useForm = (callback, validation, initialForm) => {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState(initialForm)

  const handleChange = ({target}) => {
    const {value, name} = target
    const error = validation[name](value)
    setErrors({...errors, [name]: error})
    setForm({...form, [name]: value})
  }

  const handleSubmit = () => {
    const errorObj = {}
    Object.keys(form).forEach(key => {
      errorObj[key] = validation[key](form[key])
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
