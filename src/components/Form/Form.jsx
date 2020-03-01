import {
	Button,
	FormControl,
	FormControlLabel,
	FormLabel,
	InputAdornment,
	Radio,
	RadioGroup,
	TextField,
	FormHelperText
} from '@material-ui/core'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import AddIcon from '@material-ui/icons/Add'
import ContactPhoneIcon from '@material-ui/icons/ContactPhone'
import DateRangeIcon from '@material-ui/icons/DateRange'
import React from 'react'
import { FlexBlock } from '../styled'
import useForm from './helpers/useForm'
import validation from './helpers/validation'
import { addNew } from '../../store/actionCreators'
import { connect } from 'react-redux'

const defaultForm = {
	firstName: '',
	lastName: '',
	phone: '',
	age: '',
	gender: ''
}

const Form = ({ add }) => {
	const [form, errors, handleChange, handleSubmit] = useForm(add, validation, defaultForm)
	return (
		<>
			<FlexBlock justifyCenter m={[15]}>
				<TextField
					label="First name"
					error={Boolean(errors.firstName)}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<AccountBoxIcon />
							</InputAdornment>
						)
					}}
					onChange={handleChange}
					helperText={errors.firstName}
					name={'firstName'}
					value={form.firstName}
					variant="outlined"
				/>
			</FlexBlock>
			<FlexBlock justifyCenter m={[15]}>
				<TextField
					label="Last name"
					error={Boolean(errors.lastName)}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<AccountBoxIcon />
							</InputAdornment>
						)
					}}
					onChange={handleChange}
					name={'lastName'}
					value={form.lastName}
					helperText={errors.lastName}
					variant="outlined"
				/>
			</FlexBlock>
			<FlexBlock justifyCenter m={[15]}>
				<TextField
					label="Age"
					error={Boolean(errors.age)}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<DateRangeIcon />
							</InputAdornment>
						)
					}}
					type="number"
					onChange={handleChange}
					name={'age'}
					value={form.age}
					helperText={errors.age}
					variant="outlined"
				/>
			</FlexBlock>
			<FlexBlock justifyCenter m={[15]}>
				<TextField
					label="Phone"
					id={'phoneInput'}
					error={Boolean(errors.phone)}
					onChange={handleChange}
					name={'phone'}
					value={form.phone}
					helperText={errors.phone}
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<ContactPhoneIcon />
							</InputAdornment>
						)
					}}
					variant="outlined"
				/>
			</FlexBlock>
			<FlexBlock justifyCenter m={[15]}>
				<FormControl component="fieldset">
					<FormLabel component="legend">Gender</FormLabel>
					<RadioGroup
						aria-label="gender"
						name="gender"
						value={form.gender}
						row
						onChange={handleChange}
					>
						<FormControlLabel
							value="female"
							control={<Radio color="primary" />}
							label="Female"
							labelPlacement="start"
						/>
						<FormControlLabel
							value="male"
							control={<Radio color="primary" />}
							label="Male"
							labelPlacement="start"
						/>
						<FormControlLabel
							value="other"
							control={<Radio color="primary" />}
							label="Other"
							labelPlacement="start"
						/>
					</RadioGroup>
					<FormHelperText error>{errors.gender}</FormHelperText>
				</FormControl>
			</FlexBlock>
			<FlexBlock justifyCenter>
				<Button variant={'contained'} color="primary" onClick={handleSubmit} endIcon={<AddIcon />}>
					Add
				</Button>
			</FlexBlock>
		</>
	)
}

const mapDispatchToProps = dispatch => ({
	add: user => dispatch(addNew(user))
})

export default connect(null, mapDispatchToProps)(Form)
