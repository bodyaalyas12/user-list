const phoneValidation = value => {
	if (value && !value.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g)) {
		return 'phone number is incorrect.'
	}
	if (!value.length) {
		return 'phone number is required'
	}
	if (value.length < 5) {
		return 'phone number too short'
	}
	if (value.length > 30) {
		return 'phone number is too long'
	}
	return ''
}

const firstNameValidation = value => {
	if (!value.length) {
		return 'first name is required'
	}
	if (value.length > 30) {
		return 'first name is too long'
	}
	if (value.length < 3) {
		return 'first name too short'
	}
	return ''
}

const lastNameValidation = value => {
	if (!value.length) {
		return 'last name is required'
	}
	if (value.length > 30) {
		return 'last name is too long'
	}
	if (value.length < 3) {
		return 'last name too short'
	}
	return ''
}
const ageValidation = value => {
	if (!value.length) {
		return 'age is required'
	}
	if (value.length > 3) {
		return 'field age is too long'
	}
	return ''
}

const genderValidation = value => {
	if (!value) {
		return 'gender field is required'
	}
	return ''
}

export default {
	firstNameValidation,
	lastNameValidation,
	phoneValidation,
	ageValidation,
	genderValidation
}
