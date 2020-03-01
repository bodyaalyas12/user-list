import React from 'react'
import { Container, FlexBlock } from '../styled'
import styled from 'styled-components'
import { connect } from 'react-redux'
import DeleteIcon from '@material-ui/icons/Delete'
import { deleteItem, sortBy } from '../../store/actionCreators'

const HeadItem = styled(FlexBlock)`
	color: #ffffff;
	padding: 12px 15px;
	width: 20%;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	font-size: 18px;
	cursor: pointer;
	:not(:last-child) {
		border-right: 1px solid #e1e1e1;
	}
`
const HeadRow = styled(FlexBlock)`
	height: 45px;
	border-radius: 3px 3px 0 0;
`
const TableRow = styled(FlexBlock)`
	position: relative;
	:not(:last-child) {
		border-bottom: 1px solid #c2c3cb;
	}
`
const TableItem = styled(FlexBlock)`
	:not(:last-of-type) {
		border-right: 1px solid #c2c3cb;
	}
	span {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 100%;
	}
	color: #000e11;
	width: 20%;
	justify-content: center;
	align-items: center;
	padding: 8px 10px;
`
const Table = styled(FlexBlock)`
	border: 1px solid #c2c3cb;

	border-top: 0;
`
const EnhancedDelete = styled(DeleteIcon)`
	position: absolute;
	right: -12px;
	top: 50%;
	transform: translate(50%, -50%);
`

const UserList = ({ users, deleteItem, sort, sortedBy, direction }) => {
	const handleDelete = index => {
		deleteItem(index)
	}
	const sortHandler = fieldName => {
		if (sortedBy === fieldName && direction === 'asc') {
			sort(fieldName, 'desc')
		} else {
			sort(fieldName, 'asc')
		}
	}
	return (
		<Container>
			<Table column>
				<HeadRow alignCenter background={'steelblue'}>
					<HeadItem onClick={e => sortHandler('firstName')}>First Name</HeadItem>
					<HeadItem onClick={e => sortHandler('lastName')}>Last Name</HeadItem>
					<HeadItem onClick={e => sortHandler('gender')}>Gender</HeadItem>
					<HeadItem onClick={e => sortHandler('age')}>Age</HeadItem>
					<HeadItem onClick={e => sortHandler('phone')}>Phone</HeadItem>
				</HeadRow>
				{users.map(
					(user, index) =>
						user && (
							<TableRow key={index}>
								<TableItem>
									<span>{user.firstName}</span>
								</TableItem>
								<TableItem>
									<span>{user.lastName}</span>
								</TableItem>
								<TableItem>
									<span>{user.gender}</span>
								</TableItem>
								<TableItem>
									<span>{user.age}</span>
								</TableItem>
								<TableItem>
									<span>{user.phone}</span>
								</TableItem>
								<EnhancedDelete
									color="secondary"
									style={{ cursor: 'pointer' }}
									onClick={e => handleDelete(index)}
								/>
							</TableRow>
						)
				)}
			</Table>
		</Container>
	)
}

const mapStateToProps = (state, props) => ({
	...props,
	users: state.users,
	sortedBy: state.sortedBy,
	direction: state.direction
})

const mapDispatchToProps = dispatch => ({
	deleteItem: index => dispatch(deleteItem(index)),
	sort: (name, direction) => dispatch(sortBy(name, direction))
})
export default connect(mapStateToProps, mapDispatchToProps)(UserList)
