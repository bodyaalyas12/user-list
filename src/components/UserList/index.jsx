import React from 'react'
import { connect } from 'react-redux'
import { deleteItem, sortBy } from '../../store/actionCreators'
import { Container } from '../styled'
import { EnhancedDelete, HeadRow, HeadItem, Table, TableItem, TableRow } from './StyledComponents'

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
