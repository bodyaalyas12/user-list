import styled from 'styled-components'
import { FlexBlock } from '../styled'
import DeleteIcon from '@material-ui/icons/Delete'

export const HeadItem = styled(FlexBlock)`
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
	:hover {
		background-color: slateblue;
	}
`
export const HeadRow = styled(FlexBlock)`
	height: 45px;
	border-radius: 3px 3px 0 0;
`
export const TableRow = styled(FlexBlock)`
	position: relative;
	:not(:last-child) {
		border-bottom: 1px solid #c2c3cb;
	}
`
export const TableItem = styled(FlexBlock)`
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
export const Table = styled(FlexBlock)`
	border: 1px solid #c2c3cb;

	border-top: 0;
`
export const EnhancedDelete = styled(DeleteIcon)`
	position: absolute;
	right: -12px;
	top: 50%;
	transform: translate(50%, -50%);
`
